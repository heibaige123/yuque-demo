import { Editor } from 'slate';
import type { CustomText, OmitKeyUnion } from '@/types';

export class CustomBaseEditor {
    static type: keyof CustomText;

    static toggleMark(editor: Editor) {
        const isActive = this.isMarkActive(editor);

        if (isActive) {
            Editor.removeMark(editor, this.type);
        }
        else {
            Editor.addMark(editor, this.type, true);
        }
    }

    static isMarkActive(editor: Editor) {
        if (!this.type) {
            throw new Error('type is not defined');
        }
        const marks = Editor.marks(editor);
        return !!marks?.[this.type as unknown as OmitKeyUnion<CustomText, 'text'>];
    }
}
