import { CustomBaseEditor } from '../Base';
import type { CustomText } from '@/types';

export * from './Underline';

export class UnderlineEditor extends CustomBaseEditor {
  static type: keyof CustomText = 'underline';
}
