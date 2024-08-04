import type { SlateReact_RenderElementProps } from '@lib/slate-react';
import React from 'react';

export function H5({
  attributes,
  children,
}: SlateReact_RenderElementProps): React.JSX.Element {
  return (
    <h5 {...attributes}>
      {children}
    </h5>
  );
}
