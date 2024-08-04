import { SHORTCUTS } from '../markdown-shortcuts';
import type { CustomEditor } from '@/types';
import { Slate_Editor, Slate_Element, Slate_Node } from '@/lib/slate';
import { SlateReact_ReactEditor } from '@/lib/slate-react';

export function onDOMBeforeInput(event: InputEvent, editor: CustomEditor) {
  return queueMicrotask(() => {
    const pendingDiffs = SlateReact_ReactEditor.androidPendingDiffs(editor);

    const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
      if (!diff.text.endsWith(' ')) {
        return false;
      }

      const { text } = Slate_Node.leaf(editor, path);
      const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1);
      if (!(beforeText in SHORTCUTS)) {
        return false;
      }

      const blockEntry = Slate_Editor.above(editor, {
        at: path,
        match: n => Slate_Element.isElement(n) && Slate_Editor.isBlock(editor, n),
      });
      if (!blockEntry) {
        return false;
      }

      const [, blockPath] = blockEntry;
      return Slate_Editor.isStart(editor, Slate_Editor.start(editor, path), blockPath);
    });

    if (scheduleFlush) {
      SlateReact_ReactEditor.androidScheduleFlush(editor);
    }
  });
}
