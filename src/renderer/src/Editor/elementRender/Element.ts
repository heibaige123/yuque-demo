import type { RenderElementProps } from 'slate-react';
import { CodeBlockEditable, List, MarkdownCheckbox, Title } from '../components';

export function Element(props: RenderElementProps): React.JSX.Element {
	switch (props.element.type) {
		case 'h1':
		case 'h2':
		case 'h3':
		case 'h4':
		case 'h5':
		case 'h6':
			return Title(props);
		case 'code_block':
			return CodeBlockEditable(props);
		case 'checkbox':
			return MarkdownCheckbox(props);
		case 'list':
			return List(props);
		default:
			return SlateReact_DefaultElement(props);
	}
}
