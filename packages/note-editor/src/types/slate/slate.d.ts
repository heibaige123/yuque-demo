import type { BaseEditor } from 'slate';
import type { ReactEditor } from 'slate-react';
import type {
	BulletedListElement,
	BulletedListItemElement,
	CheckboxElement,
	CodeBlockElement,
	DividerElement,
	H1Element,
	H2Element,
	H3Element,
	H4Element,
	H5Element,
	H6Element,
	OrderedListElement,
	ParagraphElement,
} from './custom-element-types';

interface EmptyText {
	text: string;
}

export type CustomEditor = BaseEditor & ReactEditor;
export type CustomElement =
	| ParagraphElement
	| H1Element
	| H2Element
	| H3Element
	| H4Element
	| H5Element
	| H6Element
	| CodeBlockElement
	| BulletedListElement
	| OrderedListElement
	| BulletedListItemElement
	| DividerElement
	| CheckboxElement;

export type CustomText = {
	bold?: boolean;
	highlight?: boolean;
	italic?: boolean;
	underline?: boolean;
	code?: boolean;

	text: string;
} & EmptyText;

declare module 'slate' {
	interface CustomTypes {
		Editor: CustomEditor;
		Element: CustomElement;
		Text: CustomText;
	}
}
