import type React from 'react';
import { BoldEditor, HighlightEditor, ItalicEditor, UnderlineEditor } from '../components';
import type { CustomEditor } from '@/types';

const HotKeyMap = [
	{
		key: 'b',
		customEditor: BoldEditor,
	},
	{
		key: 'i',
		customEditor: ItalicEditor,
	},
	{
		key: 'h',
		customEditor: HighlightEditor,
	},
	{
		key: 'u',
		customEditor: UnderlineEditor,
	},
];

export function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>, editor: CustomEditor) {
	if (!event.metaKey) {
		return;
	}

	event.preventDefault();

	console.log('onKeyDown', event);

	const key = event.key.toLocaleLowerCase();
	const hotMap = HotKeyMap.find(item => item.key === key);

	if (hotMap) {
		hotMap.customEditor.toggleMark(editor);
		// Slate_Editor.addMark(editor, hotMap.customEditor.type, true);
	}
}
