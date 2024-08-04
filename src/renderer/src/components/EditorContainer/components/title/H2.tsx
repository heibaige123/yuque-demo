import type { SlateReact_RenderElementProps } from '@lib/slate-react';
import React from 'react';

export function H2({
  attributes,
  children,
}: SlateReact_RenderElementProps): React.JSX.Element {
  return (
    <h2 {...attributes}>
      {children}
    </h2>
  );
}
