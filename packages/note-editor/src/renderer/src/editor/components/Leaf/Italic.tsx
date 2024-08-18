import type { RenderLeafProps } from 'slate-react';
import { CustomBaseEditor } from '../Base';
import type { CustomText } from '@/types';

export function Italic({
    attributes,
    children,
}: RenderLeafProps) {
    return (
        <span className="font-italic" {...attributes}>
            {children}
        </span>
    );
}

export class ItalicEditor extends CustomBaseEditor {
    static type: keyof CustomText = 'italic';
}
