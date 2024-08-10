import type { RenderElementProps } from 'slate-react';

export function CodeBlockEditable({
	attributes,
	children,
}: RenderElementProps): React.JSX.Element {
	return (
		<div
			{...attributes}
			className="bg-gray-800 text-white rounded-md p-1"
			contentEditable={false}
		>
			<div>
				<div
					contentEditable
					suppressContentEditableWarning
					data-code-editor
					className="outline-none p-3"
				>
					www
				</div>
			</div>
			<div className="hidden">{children}</div>
		</div>
	);
};
