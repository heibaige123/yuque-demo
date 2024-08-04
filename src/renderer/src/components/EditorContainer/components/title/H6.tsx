import type { SlateReact_RenderElementProps } from '@lib/slate-react';
import React from 'react';

export function H6({
  attributes,
  children,
}: SlateReact_RenderElementProps): React.JSX.Element {
  return (
    <h6 {...attributes}>
      {children}
    </h6>
  );
}
