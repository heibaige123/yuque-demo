import type React from 'react';
import { EditorContainer } from '@/renderer/src/components';

export function Content(): React.JSX.Element {
  return (
    <div className="h-full">
      <div className="flex h-full">
        <EditorContainer />
      </div>
    </div>
  );
}
