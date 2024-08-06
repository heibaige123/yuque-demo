import { SlateReact_ReactEditor } from '@/lib/slate-react';
import type { CustomEditor } from '@/types';

export function onContainerDoubleClick(editor: CustomEditor) {
  return (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    editor.insertNodes({
      type: 'paragraph',
      children: [
        {
          text: '22',
        },
      ],
    });

    SlateReact_ReactEditor.focus(editor);
  };
}
