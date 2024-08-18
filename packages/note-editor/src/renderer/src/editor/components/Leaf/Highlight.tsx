import type React from 'react';
import type { RenderLeafProps } from 'slate-react';
import { CustomBaseEditor } from '../Base';
import type { CustomText } from '@/types';

export function Highlight({
    attributes,
    children,
}: RenderLeafProps): React.JSX.Element {
    return (
        <span className="bg-emerald rounded-2xl" {...attributes}>
            {children}
        </span>
    );
}

export class HighlightEditor extends CustomBaseEditor {
    static type: keyof CustomText = 'highlight';
}
