import type { RenderElementProps, RenderLeafProps } from 'slate-react';
import { DefaultElement } from 'slate-react';
import {
    Bold,
    BulletedList,
    BulletedListItem,
    CodeBlockEditable,
    DefaultLeaf,
    Divider,
    Highlight,
    Italic,
    MarkdownCheckbox,
    OrderedList,
    Title,
    Underline,
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

export function RenderLeaf(props: RenderLeafProps): React.JSX.Element {
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

    return DefaultLeaf(props);
}
