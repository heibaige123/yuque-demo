import type { SlateReact_RenderLeafProps } from '@lib/slate-react';

export function Underline({
  attributes,
  children,
}: SlateReact_RenderLeafProps) {
  return (
    <span className="underline-offset-4" {...attributes}>
      {children}
    </span>
  );
}
