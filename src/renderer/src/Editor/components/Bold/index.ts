import { CustomBaseEditor } from '../Base';
import type { CustomText } from '@/types';

export * from './Bold';

export class BoldEditor extends CustomBaseEditor {
	static type: keyof CustomText = 'bold';
}
