import type { RenderLeafProps } from 'slate-react';

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
