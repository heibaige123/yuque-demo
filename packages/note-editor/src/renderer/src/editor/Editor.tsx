import type React from 'react';
import { Editable, type RenderElementProps, Slate, withReact } from 'slate-react';
import { useCallback } from 'react';
import { createEditor } from 'slate';
import { withMarkdownShortcuts, withNoLeaf } from './plugins';
import { onClick, onDOMBeforeInput, onKeyDown } from './editorEvent';
import { Element, RenderLeaf } from './elementRender';
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
	const editor = withNoLeaf(
		withMarkdownShortcuts(
			withReact(
				createEditor(),
			),
		),
	);

	// const decorate = useCallback(([node, path]) => {
	// 	// console.log({
	// 	// 	node,
	// 	// 	path,
	// 	// });

	// 	return [];
	// }, []);

	return (
		<div className="huo-full px-20 py-10">
			<div
				className="huo-full shadow-2xl rounded-2xl py-5"
				onClick={event => onClick(event, editor)}
			>
				<Slate
					editor={editor}
					initialValue={initialValue}
				>
					<Editable
						// decorate={decorate}
						onKeyDown={event => onKeyDown(event, editor)}
						onDOMBeforeInput={event => onDOMBeforeInput(event)}
						renderElement={renderElement}
						renderLeaf={RenderLeaf}
						className="outline-none px-6"
						autoFocus
						placeholder="写点什么吧..."
						disableDefaultStyles={false}
					/>

				</Slate>
			</div>
		</div>
	);
}