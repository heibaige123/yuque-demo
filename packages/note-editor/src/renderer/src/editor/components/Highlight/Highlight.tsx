import React from 'react';
import type { RenderLeafProps } from 'slate-react';

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
