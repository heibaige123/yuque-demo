import type { SlateReact_RenderLeafProps } from '@lib/slate-react';

export function Underline({
  attributes,
  children,
}: SlateReact_RenderLeafProps) {
  return (
    <span
      className="
      after:content-['']
      after:h-[10px]
      after:bg-pink-500
      after:rounded-2xl
      after:absolute
      after:w-full
      after:bottom-0
      after:right-0
      after:left-0

      underline underline-offset-4 relative
    "
      {...attributes}
    >
      {children}
    </span>
  );
}
