import React from 'react';
import { Schema, Node } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { inputRules } from 'prosemirror-inputrules';

const BulletListComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ul className='huo-editor-bullet-list'>{children}</ul>;
};

export const demoSchema = new Schema({
    nodes: {
        doc: { content: 'block+' },
        paragraph: { content: 'inline*', group: 'block' },
        text: { group: 'inline' },
        custom_node: {
            content: 'inline*',
            group: 'block',
            toDOM: () => ['div', { class: 'custom-node' }, 0],
            parseDOM: [{ tag: 'div.custom-node' }],
        },
    },
});
