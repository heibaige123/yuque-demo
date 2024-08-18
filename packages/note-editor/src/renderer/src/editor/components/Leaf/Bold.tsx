import type { RenderLeafProps } from 'slate-react';
import { CustomBaseEditor } from '../Base';
import type { CustomText } from '@/types';

export function Bold({
    attributes,
    children,
}: RenderLeafProps) {
    return (
        <span className="font-extrabold" {...attributes}>
            {children}
        </span>
    );
}

export class BoldEditor extends CustomBaseEditor {
    static type: keyof CustomText = 'bold';
}
