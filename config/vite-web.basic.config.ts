import { resolve } from 'node:path';
import type { UserConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';

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
  ],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@renderer': resolve('src/renderer/src'),
    },
  },
};
