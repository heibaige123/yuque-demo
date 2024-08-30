import type { RenderLeafProps } from 'slate-react';

export function DefaultLeaf({ attributes, children, leaf }: RenderLeafProps): React.JSX.Element {
    const { text, code, ...rest } = leaf;

    return (
        <span
            {...attributes}
            className={Object.keys(rest).join(' ')}
        >
            {children}
        </span>
    );
}
