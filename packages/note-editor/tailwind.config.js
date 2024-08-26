const shadcnUiConfig = require('@huo-note/shadcn-ui/tailwind.config');
const { toMerged } = require('es-toolkit');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
const config = {
    theme: {
        extend: {},
    },
    plugins: [
        addDynamicIconSelectors(),
    ],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{tsx,ts,js,jsx,css,html}',
        '../shadcn-ui/src/**/*.{tsx,css,ts}',
    ],
    theme: toMerged(shadcnUiConfig.theme, config.theme),
    plugins: toMerged(shadcnUiConfig.plugins, config.plugins),
};
