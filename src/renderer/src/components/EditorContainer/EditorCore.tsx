import React, { useCallback } from 'react';
import { markdownShortcuts } from './markdown-shortcuts';
import { onKeyDown } from './keyDown';
import { Element, renderLeaf } from './elementRender';
import { onDOMBeforeInput } from './editor';
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

export function EditorCore(): React.JSX.Element {
  const renderElement = useCallback((props: SlateReact_RenderElementProps) => <Element {...props} />, []);
  const editor = markdownShortcuts(SlateReact_withReact(Slate_createEditor()));

  return (
    <SlateReact_Slate
      editor={editor}
      initialValue={initialValue}
    >
      <SlateReact_Editable
        onDOMBeforeInput={event => onDOMBeforeInput(event, editor)}
        onKeyDown={event => onKeyDown(event, editor)}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        className="outline-none px-6"
        autoFocus
        placeholder="写点什么吧..."
      />
    </SlateReact_Slate>
  );
}
