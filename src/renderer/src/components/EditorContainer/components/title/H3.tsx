import React from 'react';
import type { SlateReact_RenderElementProps } from '@lib/slate-react';

export function H3({
  attributes,
  children,
}: SlateReact_RenderElementProps): React.JSX.Element {
  return (
    <h3 {...attributes}>
      {children}
    </h3>
  );
}
