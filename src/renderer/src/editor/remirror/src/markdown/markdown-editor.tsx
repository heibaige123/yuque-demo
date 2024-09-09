import '@remirror/styles/all.css';

import React, { FC, PropsWithChildren, useCallback } from 'react';
import { ExtensionPriority } from 'remirror';
import {
    BlockquoteExtension,
    BoldExtension,
    BulletListExtension,
    CodeExtension,
    HardBreakExtension,
    HeadingExtension,
    ItalicExtension,
    LinkExtension,
    ListItemExtension,
    MarkdownExtension,
    OrderedListExtension,
    PlaceholderExtension,
    StrikeExtension,
    TableExtension,
    TrailingNodeExtension,
} from 'remirror/extensions';
import { EditorComponent, Remirror, ThemeProvider, useRemirror } from '@remirror/react';
import { AllStyledComponent } from '@remirror/styles/emotion';
import css from 'refractor/lang/css.js';
import javascript from 'refractor/lang/javascript.js';
import json from 'refractor/lang/json.js';
import markdown from 'refractor/lang/markdown.js';
import typescript from 'refractor/lang/typescript.js';
import jsx from 'refractor/lang/jsx.js';

import { HuoCodeBlockExtension } from '../code-block/code-block-extension';
import { ReactEditorProps } from './types';

export interface MarkdownEditorProps extends Partial<Omit<ReactEditorProps, 'stringHandler'>> {}

export const BaseMarkdownEditor: FC<PropsWithChildren<MarkdownEditorProps>> = ({
    placeholder,
    children,
    theme,
    ...rest
}) => {
    const extensions = useCallback(
        () => [
            new LinkExtension({ autoLink: true }),
            new PlaceholderExtension({ placeholder }),
            new BoldExtension({}),
            new StrikeExtension(),
            new ItalicExtension(),
            new HeadingExtension({}),
            new BlockquoteExtension(),
            new BulletListExtension({ enableSpine: true }),
            new OrderedListExtension(),
            new ListItemExtension({
                priority: ExtensionPriority.High,
                enableCollapsible: true,
            }),
            new CodeExtension(),
            new HuoCodeBlockExtension({
                // supportedLanguages: [css, javascript, json, markdown, typescript, jsx],
            }),
            new TrailingNodeExtension({}),
            new TableExtension({}),
            new MarkdownExtension({ copyAsMarkdown: false }),
            /**
             * `HardBreakExtension` allows us to create a newline inside paragraphs.
             * e.g. in a list item
             */
            new HardBreakExtension(),
        ],
        [placeholder],
    );

    const { manager } = useRemirror({
        extensions,
        stringHandler: 'markdown',
    });

    return (
        <AllStyledComponent>
            <ThemeProvider theme={theme}>
                <Remirror
                    manager={manager}
                    autoFocus
                    {...rest}
                >
                    <EditorComponent />
                    {children}
                </Remirror>
            </ThemeProvider>
        </AllStyledComponent>
    );
};
