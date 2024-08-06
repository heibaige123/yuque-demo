import { CustomBaseEditor } from '../Base';
import type { CustomText } from '@/types';

export * from './Highlight';

export class HighlightEditor extends CustomBaseEditor {
  static type: keyof CustomText = 'highlight';
}
