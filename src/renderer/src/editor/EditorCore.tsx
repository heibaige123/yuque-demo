import { useEffect, useRef } from 'react';
import { useEditorView } from './hooks/useEditorView';

import 'prosemirror-view/style/prosemirror.css';

export const EditorCore: React.FC = () => {
    const editorRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editorView = useEditorView({
            editorRef,
            contentRef,
        });

        return () => {
            editorView?.destroy();
        };
    }, [editorRef, contentRef]);

    return (
        <>
            <div ref={editorRef}></div>
            <div ref={contentRef}></div>
        </>
    );
};
