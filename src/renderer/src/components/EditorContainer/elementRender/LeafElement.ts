import type React from 'react';
import { Bold, Highlight, Italic, Underline } from '../components';
import type { SlateReact_RenderLeafProps } from '@/lib/slate-react';
import { SlateReact_DefaultLeaf } from '@/lib/slate-react';

export function renderLeaf(props: SlateReact_RenderLeafProps): React.JSX.Element {
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
