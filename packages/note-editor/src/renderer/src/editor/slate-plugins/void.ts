import { Element } from 'slate';
import type { CustomEditor, CustomElement } from '@/types';

const voidElementTypes: CustomElement['type'][] = ['divider', 'code_block'];

export function voidElement(editor: CustomEditor) {
    const { isVoid } = editor;

    return (element: CustomElement) => {
        console.log('voidElement', element);

        const elementIsVoid = Element.isElement(element) && voidElementTypes.includes(element.type);

        if (elementIsVoid) {
            return true;
        }

        return isVoid(element);
    };
}
