import React from 'react';
import type { SlateReact_RenderLeafProps } from '@/lib/slate-react';

export function Highlight({
  attributes,
  children,
}: SlateReact_RenderLeafProps): React.JSX.Element {
  return (
    <span className="bg-emerald rounded-2xl" {...attributes}>
      {children}
    </span>
  );
}
