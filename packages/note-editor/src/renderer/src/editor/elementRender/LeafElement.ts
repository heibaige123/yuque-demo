import type React from 'react';
import { DefaultLeaf, type RenderLeafProps } from 'slate-react';
import { Bold, Highlight, Italic, Underline } from '../components';

export function RenderLeaf(props: RenderLeafProps): React.JSX.Element {
	// const editor = useSlate();
	const { leaf } = props;

	if (leaf.bold) {
		return Bold(props);
	}
	else if (leaf.italic) {
		return Italic(props);
	}
	else if (leaf.underline) {
		return Underline(props);
	}
	else if (leaf.highlight) {
		return Highlight(props);
	}

	// console.log('DefaultLeaf', props, props.children.props.parent, props.children.props.type);

	// if (props.children?.props?.type === 'divider') {
	// 	return NoLeaf();
	// }

	// if (editor.selection) {
	// 	const parent = Editor.parent(editor, editor.selection);

	// 	const parentNode = ReactEditor.toDOMNode(editor, parent[0]);

	// 	console.log('DefaultLeaf', {
	// 		editor,
	// 		props,
	// 		Selection: editor.selection,
	// 		parent,
	// 		parentNode,
	// 		leaf: parentNode?.getAttribute('data-no-leaf'),
	// 		nodeName: parentNode?.nodeName,
	// 		parentNodez: parentNode.dataset.noLeaf
	// 		,
	// 	});

	// 	if (parentNode?.nodeName === 'DIV' && parentNode?.getAttribute('no-leaf')) {
	// 		console.log('NoLeaf');

	// 		return NoLeaf();
	// 	}
	// }

	// console.log(1);

	return DefaultLeaf(props);
}
