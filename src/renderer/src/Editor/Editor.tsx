import type React from 'react';
import type { RenderElementProps } from 'slate-react';
import { withCodeBlockVoid, withMarkdownShortcuts } from './plugins';
import { onContainerDoubleClick, onDOMBeforeInput, onKeyDown } from './editorEvent';
import { Element, renderLeaf } from './elementRender';
import type { CustomElement } from '@/types';

/**
 * 编辑器初始值配置
 */
const initialValue: CustomElement[] = [{
	type: 'paragraph',
	children: [
		{
			text: '',
		},
	],
}];

export function Editor(): React.JSX.Element {
	const renderElement = useCallback(
		(props: RenderElementProps) => <Element {...props} />,
		[],
	);
	const editor = withCodeBlockVoid(
		withMarkdownShortcuts(
			SlateReact_withReact(
				Slate_createEditor(),
			),
		),
	);

	return (
		<div className="huo-full px-20 py-10">
			<div
				className="huo-full shadow-2xl rounded-2xl py-5"
				onDoubleClick={event => onContainerDoubleClick(event, editor)}
			>
				<SlateReact_Slate
					editor={editor}
					initialValue={initialValue}
				>
					<SlateReact_Editable
						onKeyDown={event => onKeyDown(event, editor)}
						onDOMBeforeInput={event => onDOMBeforeInput(event)}
						renderElement={renderElement}
						renderLeaf={renderLeaf}
						className="outline-none px-6"
						autoFocus
						placeholder="写点什么吧..."
					/>

				</SlateReact_Slate>
			</div>
		</div>
	);
}
