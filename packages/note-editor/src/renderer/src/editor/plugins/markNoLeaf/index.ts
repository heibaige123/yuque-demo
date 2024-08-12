import { Element } from 'slate';
import type { CustomEditor } from '@/types';

export function withNoLeaf(editor: CustomEditor) {
	const { isVoid } = editor;

	editor.isVoid = (element) => {
		const elementIsVoid = Element.isElement(element) && element.type === 'divider';

		if (elementIsVoid) {
			return true;
		}

		return isVoid(element);
	};

	return editor;
}
