import { resolve } from 'node:path';
import type { UserConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { SlateImportMap, SlateReactImportMap } from './auto-import-map';

/**
 * vite-web基础配置
 *    - 使用场景
 *        - 浏览器开发调试react
 *        - electron渲染进程开发调试react
 */
export const viteWebBasicConfig: UserConfig = {
	plugins: [
		UnoCSS(),
		reactPlugin(),
		AutoImport({
			imports: [
				'react',
				{
					slate: SlateImportMap,
				},
				{
					'slate-react': SlateReactImportMap,
				},
			],
			dts: './src/types/auto-imports.d.ts',
			resolvers: [],
			dirs: ['./src/components/ui'],
		}),
	],
	build: {
		target: 'esnext',
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
				},
			},
		},
	},
	resolve: {
		alias: {
			'@renderer': resolve('src/renderer/src'),
			'@': resolve('src'),
		},
	},
};
