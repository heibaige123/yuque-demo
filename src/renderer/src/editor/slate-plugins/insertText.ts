import { Editor, Element, Range, Transforms } from 'slate';
import { SHORTCUTS } from './shortcuts';
import type { BulletedListElement, CustomEditor, CustomElement } from '@/types';

function getBeforeText(lastWord: string, text: string, selectText: string) {
    switch (lastWord) {
        // 块级代码块
        case '`':
        case ']':
            return selectText + text.slice(0);
            // 标题、无序列表、checkbox
        case ' ':
            return selectText + text.slice(0, -1);
        case '-':
            if (selectText.length < 2) {
                return '';
            }

            // 分割线
            return selectText + text.slice(0, -2);
    }

    return '';
}

function transformsNode({
    editor,
    range,
    type,
    beforeText,
}: {
    editor: CustomEditor;
    range: Range;
    type: CustomElement['type'];
    beforeText: string;
}) {
    Transforms.select(editor, range);
    if (!Range.isCollapsed(range)) {
        Transforms.delete(editor);
    }

    Transforms.setNodes(
        editor,
        {
            type,
            order: beforeText,
        },
        {
            match: node => Element.isElement(node) && Editor.isBlock(editor, node),
        },
    );

    console.log({
        type,
        range,
    });

    switch (type) {
        case 'bulleted_list_item': {
            const bulletedList: BulletedListElement = {
                type: 'bulleted_list',
                children: [],
            };
            Transforms.wrapNodes(editor, bulletedList, {
                match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'bulleted_list_item',
            });
            break;
        }
    }
}

export function insertText(editor: CustomEditor) {
    const { insertText } = editor;

    return (text: string) => {
        const { selection } = editor;
        const lastWord = text.at(-1) as string;
        const includeArr = [' ', '`', ']', '-'];

        if (includeArr.includes(lastWord) && selection && Range.isCollapsed(selection)) {
            const { anchor } = selection;
            const block = Editor.above(editor, {
                match: node => Element.isElement(node) && Editor.isBlock(editor, node),
            });

            const path = block ? block[1] : [];
            const start = Editor.start(editor, path);
            const range = { anchor, focus: start };

            const beforeText = getBeforeText(lastWord, text, Editor.string(editor, range));
            let type = SHORTCUTS[beforeText] as CustomElement['type'];

            // 数值列表
            if (/\d+\.?/.test(beforeText)) {
                type = 'ordered_list';
            }

            if (type) {
                transformsNode({
                    editor,
                    range,
                    type,
                    beforeText,
                });
                return;
            }
        }

        insertText(text);
    };
}
