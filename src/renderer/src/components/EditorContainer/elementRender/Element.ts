import { CodeBlockEditable, Title } from '../components';
import { SlateReact_DefaultElement, type SlateReact_RenderElementProps } from '@/lib/slate-react';

export function Element(props: SlateReact_RenderElementProps): React.JSX.Element {
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
    default:
      return SlateReact_DefaultElement(props);
  }
}
