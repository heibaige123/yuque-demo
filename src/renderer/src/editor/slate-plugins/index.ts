import { deleteBackward } from './deleteBackward';
import { insertText } from './insertText';
import { voidElement } from './void';
import type { CustomEditor } from '@/types';

export function withSlatePlugin(editor: CustomEditor) {
    editor.insertText = insertText(editor);
    editor.deleteBackward = deleteBackward(editor);
    editor.isVoid = voidElement(editor);

    return editor;
}
