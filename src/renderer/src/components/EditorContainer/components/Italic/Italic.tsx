import type { RenderLeafProps } from 'slate-react';

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
