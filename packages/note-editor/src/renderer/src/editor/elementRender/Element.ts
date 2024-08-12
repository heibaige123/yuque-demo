import { DefaultElement, type RenderElementProps } from 'slate-react';
import {
	BulletedList,
	BulletedListItem,
	CodeBlockEditable,
	Divider,
	MarkdownCheckbox,
	OrderedList,
	Title,
} from '../components';

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
		case 'bulleted_list_item':
			return BulletedListItem(props);
		case 'bulleted_list':
			return BulletedList(props);
		case 'ordered_list':
			return OrderedList(props);
		case 'divider':
			return Divider(props);
		default:
			return DefaultElement(props);
	}
}
