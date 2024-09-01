import path from 'node:path';
import type { PluginOption, UserConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

/**
 * vite-web基础配置
 *    - 使用场景
 *        - 浏览器开发调试react
 *        - electron渲染进程开发调试react
 */
export const viteWebBasicConfig: UserConfig = {
    plugins: [reactPlugin() as PluginOption],
    build: {
        target: 'esnext',
        minify: false,
        // minify: 'terser',
        // terserOptions: {
        //     compress: {
        //         keep_infinity: true,
        //         drop_console: true,
        //         drop_debugger: true,
        //     },
        // },
        rollupOptions: {
            output: {
                manualChunks: {
                    // 'react-vendor': ['react', 'react-dom'],
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '~renderer': path.resolve(__dirname, '../src/renderer/src'),
        },
    },
};
