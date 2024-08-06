import React, { useCallback } from 'react';
import { withCodeBlockVoid, withMarkdownShortcuts } from './plugins';
import { onContainerDoubleClick, onDOMBeforeInput, onKeyDown } from './editor-event';
import { Element, renderLeaf } from './elementRender';
import {
  SlateReact_Editable,
  type SlateReact_RenderElementProps,
  SlateReact_Slate,
  SlateReact_withReact,
} from '@/lib/slate-react';
import { Slate_createEditor } from '@/lib/slate';
import type { CustomElement } from '@/types/slate';

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
}];

export function EditorContainer(): React.JSX.Element {
  const renderElement = useCallback(
    (props: SlateReact_RenderElementProps) => <Element {...props} />,
    [],
  );
  const editor = withCodeBlockVoid(
    withMarkdownShortcuts(
      SlateReact_withReact(
        Slate_createEditor(),
      ),
    ),
  );

  return (
    <div className="huo-full px-20 py-10">
      <div
        className="huo-full shadow-2xl rounded-2xl py-5"
        onDoubleClick={onContainerDoubleClick(editor)}
      >
        <SlateReact_Slate
          editor={editor}
          initialValue={initialValue}
        >
          <SlateReact_Editable
            onKeyDown={event => onKeyDown(event, editor)}
            onDOMBeforeInput={event => onDOMBeforeInput(event, editor)}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            className="outline-none px-6"
            autoFocus
            placeholder="写点什么吧..."
          />

        </SlateReact_Slate>
      </div>
    </div>
  );
}
