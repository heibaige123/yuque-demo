import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { viteWebBasicConfig } from './config/vite-web.basic.config';

export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin(),
    ],
  },
  preload: {
    plugins: [
      externalizeDepsPlugin(),
    ],
  },
  renderer: viteWebBasicConfig,
});
