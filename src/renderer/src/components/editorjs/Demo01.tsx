import { type Component, onMount } from 'solid-js';
import type { ToolConstructable } from '@editorjs/editorjs';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import editorjsNestedChecklist from '@calumk/editorjs-nested-checklist';

import './demo01.css';

export const Demo01: Component = () => {
  let editorRef: HTMLDivElement;

  onMount(() => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain the Editor
       */
      holder: editorRef,
      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          inlineToolbar: ['link'],
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        nestedchecklist: {
          class: editorjsNestedChecklist,
          inlineToolbar: true,
        },
      },
    });

    editor.isReady.then(() => {
      console.log('1');
    }).catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`);
    });
  });

  return (
    <div ref={editorRef} />
  );
};
