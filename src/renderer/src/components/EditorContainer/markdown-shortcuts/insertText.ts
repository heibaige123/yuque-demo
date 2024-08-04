import { SHORTCUTS } from './shortcuts';
import { Slate_Editor, Slate_Element, Slate_Range, Slate_Transforms } from '@/lib/slate';
import type { CustomEditor, CustomElement } from '@/types';

export function insertText(editor: CustomEditor) {
  const { insertText } = editor;

  return (text: string) => {
    const { selection } = editor;

    console.log('insertText', { text, selection });

    if (text.endsWith(' ') && selection && Slate_Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Slate_Editor.above(editor, {
        match: node => Slate_Element.isElement(node) && Slate_Editor.isBlock(editor, node),
      });
      const path = block ? block[1] : [];
      const start = Slate_Editor.start(editor, path);

      // console.log('satrt', start);
      const range = { anchor, focus: start };
      const beforeText = (Slate_Editor.string(editor, range) + text.slice(0, -1)) as unknown as keyof typeof SHORTCUTS;
      const type = SHORTCUTS[beforeText] as CustomElement['type'];

      if (!type) {
        return undefined;
      }

      // if (SHORTCUTS_VALUES.includes(type)) {
      //   return undefined;
      // }

      console.log('Slate_Element', range);

      Slate_Transforms.select(editor, range);
      if (!Slate_Range.isCollapsed(range)) {
        Slate_Transforms.delete(editor);
      }

      Slate_Transforms.setNodes(editor, {
        type,
      }, {
        match: node => Slate_Element.isElement(node) && Slate_Editor.isBlock(editor, node),
      });

      console.log('insertText2', { type, beforeText, editor });

      return;
    }

    insertText(text);

    console.log('insertText3', { editor });
  };
}
