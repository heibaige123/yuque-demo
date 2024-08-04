import type { SlateReact_RenderLeafProps } from '@lib/slate-react';

export function Bold({
  attributes,
  children,
}: SlateReact_RenderLeafProps) {
  return (
    <span className="font-bold" {...attributes}>
      {children}
    </span>
  );
}
