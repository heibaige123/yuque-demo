import { deleteBackward } from './deleteBackward';
import { insertText } from './insertText';
import type { CustomEditor } from '@/types/slate';

export * from './shortcuts';

export function markdownShortcuts(editor: CustomEditor) {
  editor.insertText = insertText(editor);
  editor.deleteBackward = deleteBackward(editor);

  return editor;
}
