import { ReactEditor } from 'slate-react';
import type { CustomEditor } from '@/types';

export function onContainerDoubleClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    editor: CustomEditor,
) {
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

    ReactEditor.focus(editor);
}
