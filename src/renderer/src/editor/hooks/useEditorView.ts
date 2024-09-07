import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';

import { exampleSetup } from '../setup';
import { DOMParser, Schema } from 'prosemirror-model';
import React from 'react';

type TRef = React.RefObject<HTMLDivElement>;

const mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
    marks: schema.spec.marks,
});

export function useEditorView({ editorRef, contentRef }: { editorRef: TRef; contentRef: TRef }) {
    if (!editorRef.current || !contentRef.current) {
        return null;
    }

    const editorView = new EditorView(editorRef.current, {
        state: EditorState.create({
            doc: DOMParser.fromSchema(mySchema).parse(contentRef.current),
            plugins: exampleSetup(mySchema),
        }),
    });

    return editorView;
}
