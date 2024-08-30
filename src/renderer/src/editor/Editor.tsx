import type React from 'react';
import { Editable, type RenderElementProps, Slate, withReact } from 'slate-react';
import { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { withSlatePlugin } from './slate-plugins';
import { onDOMBeforeInput, onKeyDown } from './editorEvent';
import { Element, RenderLeaf } from './node-render';
import type { CustomElement } from '@/types';

/**
 * 编辑器初始值配置
 */
const initialValue: CustomElement[] = [{
    type: 'paragraph',
    children: [
        {
            text: '',
        },
    ],
}, {
    type: 'code_block',
    language: 'typescript',
    children: [
        {
            text: '',
        },
    ],
}];

export function Editor(): React.JSX.Element {
    const renderElement = useCallback(
        (props: RenderElementProps) => <Element {...props} />,
        [],
    );
    const editor = useMemo(
        () => withSlatePlugin(
            withHistory(
                withReact(
                    createEditor(),
                ),
            ),
        ),
        [],
    );

    return (
        <div className="huo-full px-20 py-10">
            <div
                className="huo-full shadow-2xl rounded-2xl py-5"
            >
                <Slate
                    editor={editor}
                    initialValue={initialValue}
                >
                    <Editable
                        onKeyDown={event => onKeyDown(event, editor)}
                        onDOMBeforeInput={event => onDOMBeforeInput(event)}
                        renderElement={renderElement}
                        renderLeaf={RenderLeaf}
                        className="outline-none px-6"
                        autoFocus
                        placeholder="写点什么吧..."
                        disableDefaultStyles={false}
                    />

                </Slate>
            </div>
        </div>
    );
}
