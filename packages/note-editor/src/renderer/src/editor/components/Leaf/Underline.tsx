import type { RenderLeafProps } from 'slate-react';
import { CustomBaseEditor } from '../Base';
import type { CustomText } from '@/types';

export function Underline({
    attributes,
    children,
}: RenderLeafProps) {
    return (
        <span
            className="
        after:content-['']
        after:h-[10px]
        after:bg-pink-500
        after:rounded-2xl
        after:absolute
        after:w-full
        after:bottom-0
        after:right-0
        after:left-0
        underline underline-offset-4 relative
      "
            {...attributes}
        >
            {children}
        </span>
    );
}

export class UnderlineEditor extends CustomBaseEditor {
    static type: keyof CustomText = 'underline';
}
