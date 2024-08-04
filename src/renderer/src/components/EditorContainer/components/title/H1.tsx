import React from 'react';
import type { SlateReact_RenderElementProps } from '@lib/slate-react';

export function H1({
  attributes,
  children,
}: SlateReact_RenderElementProps): React.JSX.Element {
  return (
    <h1 {...attributes}>
      {children}
    </h1>
  );
}
