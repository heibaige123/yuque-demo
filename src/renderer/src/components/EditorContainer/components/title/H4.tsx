import React from 'react';
import type { SlateReact_RenderElementProps } from '@lib/slate-react';

export function H4({
  attributes,
  children,
}: SlateReact_RenderElementProps): React.JSX.Element {
  return (
    <h4 {...attributes}>
      {children}
    </h4>
  );
}
