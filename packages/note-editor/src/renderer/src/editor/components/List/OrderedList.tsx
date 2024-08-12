import type { RenderElementProps } from 'slate-react';

export function OrderedList({
	attributes,
	children,
}: RenderElementProps) {
	const order = children[0].props.parent.order || '1.';

	console.log('OrderedList', order);

	return (
		<div
			{...attributes}
			className="flex"
		>
			<span
				className="huo-ordered-list-item"
				style={{
					// eslint-disable-next-line ts/ban-ts-comment
					// @ts-expect-error
					'--order-number': `"${order}"`,
				}}
			>
			</span>
			<div>
				{children}
			</div>
		</div>
	);
}
