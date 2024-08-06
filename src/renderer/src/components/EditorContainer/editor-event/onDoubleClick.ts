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

	SlateReact_ReactEditor.focus(editor);
}
