import type { RenderElementProps } from 'slate-react';
import { Checkbox } from '~renderer/shadcn-ui';

export function MarkdownCheckbox({
    attributes,
    children,
}: RenderElementProps): React.JSX.Element {
    return (
        <div
            {...attributes}
            className="flex items-center"
        >
            <Checkbox className="mr-1" />
            <div>{children}</div>
        </div>
    );
};
