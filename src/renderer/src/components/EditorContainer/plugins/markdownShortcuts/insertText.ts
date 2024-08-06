import { SHORTCUTS } from './shortcuts';
import { Slate_Editor, Slate_Element, Slate_Range, Slate_Transforms } from '@/lib/slate';
import type { CustomEditor, CustomElement } from '@/types';

export function insertText(editor: CustomEditor) {
  const { insertText } = editor;

  return (text: string) => {
    const { selection } = editor;

    // 块级代码块
    if (text.endsWith('`') && selection && Slate_Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Slate_Editor.above(editor, {
        match: node => Slate_Element.isElement(node) && Slate_Editor.isBlock(editor, node),
      });
      const path = block ? block[1] : [];
      const start = Slate_Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = (Slate_Editor.string(editor, range) + text.slice(0)) as unknown as keyof typeof SHORTCUTS;
      const type = SHORTCUTS[beforeText] as CustomElement['type'];

      console.log('beforeText', beforeText, type);

      if (type) {
        Slate_Transforms.select(editor, range);
        if (!Slate_Range.isCollapsed(range)) {
          Slate_Transforms.delete(editor);
        }

        Slate_Transforms.setNodes(editor, { type }, {
          match: node => Slate_Element.isElement(node) && Slate_Editor.isBlock(editor, node),
        });

        return;
      }
    }

    // 标题
    if (text.endsWith(' ') && selection && Slate_Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Slate_Editor.above(editor, {
        match: node => Slate_Element.isElement(node) && Slate_Editor.isBlock(editor, node),
      });
      const path = block ? block[1] : [];
      const start = Slate_Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = (Slate_Editor.string(editor, range) + text.slice(0, -1)) as unknown as keyof typeof SHORTCUTS;
      const type = SHORTCUTS[beforeText] as CustomElement['type'];

      if (type) {
        Slate_Transforms.select(editor, range);
        if (!Slate_Range.isCollapsed(range)) {
          Slate_Transforms.delete(editor);
        }

        Slate_Transforms.setNodes(editor, { type }, {
          match: node => Slate_Element.isElement(node) && Slate_Editor.isBlock(editor, node),
        });

        return;
      }
    }

    insertText(text);
  };
}
