import type { RenderElementProps } from 'slate-react';

export function NumberList({
	attributes,
	children,
}: RenderElementProps) {
	console.log('NumberList', { children, attributes });

	let numberOrder = children[0]?.props?.parent?.numberOrder as string;

	if (numberOrder.endsWith('.')) {
		numberOrder = numberOrder.slice(0, -1);
	}

	return (
		<div {...attributes}>
			<ol>
				<li>{children}</li>
			</ol>
		</div>
	);
}
