import type { CustomElement } from '@/types';

export const SHORTCUTS: {
	[key: string]: CustomElement['type'];
} = {
	'#': 'h1',
	'##': 'h2',
	'###': 'h3',
	'####': 'h4',
	'#####': 'h5',
	'######': 'h6',
	'```': 'code_block',
};

export const SHORTCUTS_VALUES = Object.values(SHORTCUTS);
