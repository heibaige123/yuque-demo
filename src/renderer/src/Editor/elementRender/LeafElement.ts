import type React from 'react';
import type { RenderLeafProps } from 'slate-react';
import { Bold, Highlight, Italic, Underline } from '../components';

export function renderLeaf(props: RenderLeafProps): React.JSX.Element {
	const { leaf } = props;

	// console.log('leaf', props);

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

	return SlateReact_DefaultLeaf(props);
}
