import type { RenderElementProps } from 'slate-react';
import { CodeEditor } from '@/code-editor';

export function CodeBlockEditable({ children, attributes }: RenderElementProps) {
    return (
        <div
            {...attributes}
            contentEditable={false}
            data-slate-void
        >
            <div className="hidden">{children}</div>
            <div data-slate-editor>
                <CodeEditor />
            </div>
        </div>
    );
}
