import type { Descendant } from 'slate';

interface BaseTitleElement {
	children: Descendant[];
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface ParagraphElement {
	type: 'paragraph';
	children: Descendant[];
}

export interface H1Element extends BaseTitleElement {
	type: 'h1';
}

export interface H2Element extends BaseTitleElement {
	type: 'h2';
}

export interface H3Element extends BaseTitleElement {
	type: 'h3';
}

export interface H4Element extends BaseTitleElement {
	type: 'h4';
}

export interface H5Element extends BaseTitleElement {
	type: 'h5';
}

export interface H6Element extends BaseTitleElement {
	type: 'h6';
}

export interface CodeBlockElement {
	type: 'code_block';
}
export interface CheckboxElement {
	type: 'checkbox';
}

export interface ListElement {
	type: 'list';
}
