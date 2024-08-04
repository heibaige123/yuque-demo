import type React from 'react';
import { H1, H2, H3, H4, H5, H6 } from '../components/title';
import { SlateReact_DefaultElement, type SlateReact_RenderElementProps } from '@/lib/slate-react';

export function Element(props: SlateReact_RenderElementProps): React.JSX.Element {
  switch (props.element.type) {
    case 'h1':
      return H1(props);
    case 'h2':
      return H2(props);
    case 'h3':
      return H3(props);
    case 'h4':
      return H4(props);
    case 'h5':
      return H5(props);
    case 'h6':
      return H6(props);
    default:
      return SlateReact_DefaultElement(props);
  }
}
