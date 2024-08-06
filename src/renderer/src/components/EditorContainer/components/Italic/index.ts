import { CustomBaseEditor } from '../Base';
import type { CustomText } from '@/types';

export * from './Italic';

export class ItalicEditor extends CustomBaseEditor {
  static type: keyof CustomText = 'italic';
}
