import { Slate_Editor } from '@/lib/slate';
import type { CustomText, OmitKeyUnion } from '@/types';

export class CustomBaseEditor {
  static type: keyof CustomText;

  static toggleMark(editor: Slate_Editor) {
    const isActive = this.isMarkActive(editor);

    if (isActive) {
      Slate_Editor.removeMark(editor, this.type);
    }
    else {
      Slate_Editor.addMark(editor, this.type, true);
    }
  }

  static isMarkActive(editor: Slate_Editor) {
    if (!this.type) {
      throw new Error('type is not defined');
    }
    const marks = Slate_Editor.marks(editor);
    return !!marks?.[this.type as unknown as OmitKeyUnion<CustomText, 'text'>];
  }
}
