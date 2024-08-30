import { Editor, Element, Point, Range, type TextUnit, Transforms } from 'slate';
import { SHORTCUTS_VALUES } from './shortcuts';
import type { CustomEditor } from '@/types';

export function deleteBackward(editor: CustomEditor) {
    const { deleteBackward } = editor;

    return (args: TextUnit) => {
        const { selection } = editor;

        if (selection && Range.isCollapsed(selection)) {
            const match = Editor.above(editor, {
                match: node => Element.isElement(node) && Editor.isBlock(editor, node),
            });

            if (match) {
                const [block, path] = match;
                const start = Editor.start(editor, path);

                if (
                    !Editor.isEditor(block)
                    && Element.isElement(block)
                    && block.type !== 'paragraph'
                    && Point.equals(selection.anchor, start)
                ) {
                    Transforms.setNodes(editor, {
                        type: 'paragraph',
                    });

                    if (!SHORTCUTS_VALUES.includes(block.type)) {
                        return;
                    }

                    Transforms.unwrapNodes(editor, {
                        match: node =>
                            Editor.isEditor(node)
                            && Element.isElement(node)
                            && SHORTCUTS_VALUES.includes(node.type),
                        split: true,
                    });
                }
            }

            deleteBackward(args);
        }
    };
}
