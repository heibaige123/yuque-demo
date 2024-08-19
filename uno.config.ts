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
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
    content: {
        filesystem: [
            './packages/note-editor/src/renderer/**/*.tsx',
            './packages/shadcn-ui/src/**/*.tsx',
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
        presetIcons(),
    ],
    shortcuts: {
        'huo-border': 'border-solid border-slate-900/10',
        'huo-center': 'flex justify-center items-center',
        'huo-module-bg': 'bg-white/95',
        'huo-full': 'w-full h-full',
    },
});
