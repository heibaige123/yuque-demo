import type { SlateReact_RenderLeafProps } from '@lib/slate-react';

export function Italic({
  attributes,
  children,
}: SlateReact_RenderLeafProps) {
  return (
    <span className="font-italic" {...attributes}>
      {children}
    </span>
  );
}
