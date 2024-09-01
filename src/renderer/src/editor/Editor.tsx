import { $getRoot, $getSelection, EditorState } from 'lexical';
import { FC, useEffect, useState } from 'react';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { Lexical_Theme_Config } from './config/theme';
import { Placeholder } from './components';
import { InitialConfigType } from '@lexical/react/LexicalComposer';
import { TRANSFORMERS } from '@lexical/markdown';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
    console.error(error);
}

export const Editor: FC = () => {
    const initialConfig: InitialConfigType = {
        namespace: 'MyEditor',
        theme: Lexical_Theme_Config,
        onError,
        nodes: [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode,
        ],
    };

    const [editorState, setEditorState] = useState<EditorState>();

    function onChange(editorState: EditorState) {
        setEditorState(editorState);
    }

    return (
        <div className='huo-full px-20 py-10'>
            <div className='huo-full shadow-2xl rounded-2xl py-5'>
                <LexicalComposer initialConfig={initialConfig}>
                    <RichTextPlugin
                        contentEditable={<ContentEditable className='editor-contenteditable' />}
                        placeholder={<Placeholder />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />

                    <OnChangePlugin onChange={onChange} />

                    <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                </LexicalComposer>
            </div>
        </div>
    );
};
