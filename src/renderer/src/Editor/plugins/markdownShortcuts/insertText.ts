import { SHORTCUTS } from './shortcuts';
import type { CustomEditor, CustomElement } from '@/types';

type Shortcuts_Key = keyof typeof SHORTCUTS;

function getBeforeText(lastWord: string, text: string, selectText: string) {
	let beforeText: Shortcuts_Key = '';

	switch (lastWord) {
		// 块级代码块
		case '`':
		case ']':
			beforeText = text.slice(0);
			break;
			// 标题、列表、checkbox
		case ' ':
			beforeText = text.slice(0, -1);
			break;
	}

	console.log('beforeText', beforeText);

	return selectText + beforeText;
}

export function insertText(editor: CustomEditor) {
	const { insertText } = editor;

	return (text: string) => {
		const { selection } = editor;
		const lastWord = text.at(-1) as string;
		const includeArr = [' ', '`', ']'];

		if (includeArr.includes(lastWord) && selection && Slate_Range.isCollapsed(selection)) {
			const { anchor } = selection;
			const block = Slate_Editor.above(editor, {
				match: node => Slate_Element.isElement(node) && Slate_Editor.isBlock(editor, node),
			});
			const path = block ? block[1] : [];
			const start = Slate_Editor.start(editor, path);
			const range = { anchor, focus: start };

			const beforeText = getBeforeText(lastWord, text, Slate_Editor.string(editor, range));
			let type = SHORTCUTS[beforeText] as CustomElement['type'];

			// 数值列表
			if (/\d+\.?/.test(beforeText)) {
				type = 'number_list';
			}

			if (type) {
				Slate_Transforms.select(editor, range);
				if (!Slate_Range.isCollapsed(range)) {
					Slate_Transforms.delete(editor);
				}

				Slate_Transforms.setNodes(
					editor,
					{
						type,
						numberOrder: beforeText,
					},
					{
						match: node => Slate_Element.isElement(node) && Slate_Editor.isBlock(editor, node),
					},
				);

				return;
			}
		}

		insertText(text);
	};
}
