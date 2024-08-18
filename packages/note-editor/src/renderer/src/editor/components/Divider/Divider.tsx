import React from 'react';
import type { RenderElementProps } from 'slate-react';

export function Divider({
    attributes,
    children,
}: RenderElementProps): React.JSX.Element {
    return (
        <div
            {...attributes}
            className="flex items-center relative"
            data-no-leaf
            contentEditable={false}
        >
            <div className="h-[2px] bg-blueGray my-2 w-full">
                {children}
            </div>
        </div>
    );
}
