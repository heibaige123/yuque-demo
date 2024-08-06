import type { TextUnit } from 'slate';
import { SHORTCUTS_VALUES } from './shortcuts';
import type { CustomEditor } from '@/types';

export function deleteBackward(editor: CustomEditor) {
	const { deleteBackward } = editor;

	return (args: TextUnit) => {
		const { selection } = editor;

		if (selection && Slate_Range.isCollapsed(selection)) {
			const match = Slate_Editor.above(editor, {
				match: node => Slate_Element.isElement(node) && Slate_Editor.isBlock(editor, node),
			});

			if (match) {
				const [block, path] = match;
				const start = Slate_Editor.start(editor, path);

				if (
					!Slate_Editor.isEditor(block)
					&& Slate_Element.isElement(block)
					&& block.type !== 'paragraph'
					&& Slate_Point.equals(selection.anchor, start)
				) {
					Slate_Transforms.setNodes(editor, {
						type: 'paragraph',
					});

					if (!SHORTCUTS_VALUES.includes(block.type)) {
						return;
					}

					Slate_Transforms.unwrapNodes(editor, {
						match: node => Slate_Editor.isEditor(node)
						&& Slate_Element.isElement(node)
						&& SHORTCUTS_VALUES.includes(node.type),
						split: true,
					});
				}
			}

			deleteBackward(args);
		}
	};
}
