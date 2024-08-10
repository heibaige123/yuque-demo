import type { RenderElementProps } from 'slate-react';

export function List({
	attributes,
	children,
}: RenderElementProps): React.JSX.Element {
	return (
		<div
			{...attributes}
			className="flex items-center"
		>
			<ul className="list-disc">
				<li>{children}</li>
			</ul>
		</div>
	);
};
