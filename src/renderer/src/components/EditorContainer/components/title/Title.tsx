import React from 'react';
import type { SlateReact_RenderElementProps } from '@lib/slate-react';

export function Title({
  attributes,
  children,
  element,
}: SlateReact_RenderElementProps): React.JSX.Element {
  const {
    type,
  } = element;

  switch (type) {
    case 'h2':
      return <h2 {...attributes}>{children}</h2>;
    case 'h3':
      return <h3 {...attributes}>{children}</h3>;
    case 'h4':
      return <h4 {...attributes}>{children}</h4>;
    case 'h5':
      return <h5 {...attributes}>{children}</h5>;
    case 'h6':
      return <h6 {...attributes}>{children}</h6>;
    default:
      return <h1 {...attributes}>{children}</h1>;
  }
}
