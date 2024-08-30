import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { viteWebBasicConfig } from './config/viteWeb.basic.config';

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
