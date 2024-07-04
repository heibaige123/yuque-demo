import { resolve } from 'node:path';
import type { UserConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import UnoCSS from 'unocss/vite';
// import devtools from 'solid-devtools/vite';

/**
 * vite-web基础配置
 *    - 使用场景
 *        - 浏览器开发调试solid
 *        - electron渲染进程开发调试solid
 */
export const viteWebBasicConfig: UserConfig = {
  plugins: [
    /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    UnoCSS(),
    solidPlugin(),
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
