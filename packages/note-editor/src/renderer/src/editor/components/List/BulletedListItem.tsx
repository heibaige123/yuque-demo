import type { RenderElementProps } from 'slate-react';

export function BulletedListItem({
	attributes,
	children,
}: RenderElementProps): React.JSX.Element {
	return (
		<li {...attributes}>
			{children}
		</li>
	);
};
