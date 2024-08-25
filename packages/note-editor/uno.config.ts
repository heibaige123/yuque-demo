// uno.config.ts
import type {
    Preset,
} from 'unocss';
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
        pipeline: {
            include: [
                // the default
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                // include js/ts files
                'src/**/*.{js,ts,tsx,jsx}',
            ],
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
        presetIcons() as Preset,
    ],
    shortcuts: {
        'huo-border': 'border-solid border-slate-900/10',
        'huo-center': 'flex justify-center items-center',
        'huo-module-bg': 'bg-white/95',
        'huo-full': 'w-full h-full',
    },
});
