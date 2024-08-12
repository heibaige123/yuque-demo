import type { RenderElementProps } from 'slate-react';

export function BulletedList({
	attributes,
	children,
}: RenderElementProps): React.JSX.Element {
	return (
		<ul
			{...attributes}
			className="list-disc flex items-center"
		>
			{children}
		</ul>
	);
};
