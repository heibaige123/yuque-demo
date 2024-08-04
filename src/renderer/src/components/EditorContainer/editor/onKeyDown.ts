import { Slate_Editor, Slate_Element, Slate_Transforms } from '@/lib/slate';
import type { SlateEditor } from '@/types/cutom-union-types';

const CustomEditor = {
  isBoldMarkActive(editor: SlateEditor) {
    const marks = Slate_Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isCodeBlockActive(editor: SlateEditor) {
    const [match] = Slate_Editor.nodes(editor, {
      match: n => Slate_Element.isElement(n) && n.type === 'code',
    });
    return !!match;
  },

  toggleBoldMark(editor: SlateEditor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);

    if (isActive) {
      Slate_Editor.removeMark(editor, 'bold');
    }
    else {
      Slate_Editor.addMark(editor, 'bold', true);
    }
  },

  toggleCodeBlock(editor: SlateEditor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);

    console.log('111');

    Slate_Transforms.setNodes(
      editor,
      {
        type: isActive ? 'paragraph' : 'code',
      },
      {
        match: n => Slate_Element.isElement(n) && Slate_Editor.isBlock(editor, n),
      },
    );
  },

  toggleInlineCodeMark(editor: SlateEditor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);

    // 包裹选中文本为行内代码块
    if (isActive) {
      Slate_Editor.removeMark(editor, 'code');
    }
    else {
      Slate_Editor.addMark(editor, 'code', true);
    }
  },
};

export function keydown(editor: SlateEditor) {
  return (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!event.ctrlKey) {
      return;
    }

    event.preventDefault();

    switch (event.key) {
      case '`': {
        CustomEditor.toggleCodeBlock(editor);
        break;
      }

      case 'b': {
        CustomEditor.toggleBoldMark(editor);
        break;
      }

      case 'e': {
        CustomEditor.toggleInlineCodeMark(editor);
        break;
      }
    }
  };
}
