// uno.config.ts
import { defineConfig, presetWind, transformerCompileClass, transformerDirectives } from 'unocss';

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
  ],
  presets: [
    presetWind(),
  ],
  shortcuts: {
    'huo-border': 'border-solid border-slate-900/10',
    'huo-center': 'flex justify-center items-center',
    'huo-module-bg': 'bg-white/95',
    'huo-full': 'w-full h-full',
  },
});
