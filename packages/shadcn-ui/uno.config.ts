// uno.config.ts
import {
	defineConfig,
	presetUno,
	presetWind,
	transformerCompileClass,
	transformerDirectives,
} from 'unocss';
import presetAnimations from 'unocss-preset-animations';
import { presetShadcn } from 'unocss-preset-shadcn';

export default defineConfig({
	cli: {
		entry: [{
			patterns: ['./src/**/*.{tsx,css}'],
			outFile: './dist/style.css',
		}],
	},
	content: {
		filesystem: [
			'/src/**/*.{tsx,css}',
		],
		pipeline: {
			exclude: ['./packages/**/node_modules'],
		},
	},
	transformers: [
		transformerDirectives(),
		transformerCompileClass(),
	],
	presets: [
		presetUno(),
		presetWind(),
		presetAnimations(),
		presetShadcn(),
	],
	shortcuts: {
		'huo-border': 'border-solid border-slate-900/10',
		'huo-center': 'flex justify-center items-center',
		'huo-module-bg': 'bg-white/95',
		'huo-full': 'w-full h-full',
	},
});
