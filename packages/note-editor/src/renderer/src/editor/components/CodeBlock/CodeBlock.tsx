import type { RenderElementProps } from 'slate-react';
import { CodeEditor } from '@huo-note/code-editor';

export function CodeBlockEditable({ children, attributes }: RenderElementProps) {
    return (
        <div
            {...attributes}
            contentEditable={false}
            data-slate-void
        >
            <div
                className="xxx"
                data-slate-editor
            >
                <CodeEditor />
                <div className="yyyy">{children}</div>
            </div>
        </div>
    );
}
