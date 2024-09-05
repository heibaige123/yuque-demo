import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { Plugin } from 'prosemirror-state';
import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';
import { Schema } from 'prosemirror-model';

import { buildInputRules } from './inputrules';

export function exampleSetup(schema: Schema) {
    let plugins = [buildInputRules(schema), keymap(baseKeymap), dropCursor(), gapCursor()];

    return plugins.concat(
        new Plugin({
            props: {
                attributes: {
                    class: 'huo-editor-container',
                    spellCheck: 'false',
                },
            },
        }),
    );
}
