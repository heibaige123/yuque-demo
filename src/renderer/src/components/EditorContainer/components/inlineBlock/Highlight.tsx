import type { SlateReact_RenderLeafProps } from '@lib/slate-react';

export function Highlight({
  attributes,
  children,
}: SlateReact_RenderLeafProps) {
  return (
    <span className="bg-amber rounded-2xl" {...attributes}>
      {children}
    </span>
  );
}
