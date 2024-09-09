import { atom } from 'jotai';

const ThemeConfig: Record<
    string,
    {
        value: string;
    }
> = {
    amy: {
        value: 'amy',
    },
    ayuLight: {
        value: 'ayuLight',
    },
    barf: {
        value: 'barf',
    },
    boysAndGirls: {
        value: 'boysAndGirls',
    },
    bespin: {
        value: 'bespin',
    },
    cobalt: {
        value: 'cobalt',
    },
    clouds: {
        value: 'clouds',
    },
    birdsOfParadise: {
        value: 'birdsOfParadise',
    },
    coolGlow: {
        value: 'coolGlow',
    },
    dracula: {
        value: 'dracula',
    },
    espresso: {
        value: 'espresso',
    },
    noctisLilac: {
        value: 'noctisLilac',
    },
    rosePineDawn: {
        value: 'rosePineDawn',
    },
    smoothy: {
        value: 'smoothy',
    },
    solarizedLight: {
        value: 'solarizedLight',
    },
    tomorrow: {
        value: 'tomorrow',
    },
};

export const ThemeMenu = Object.keys(ThemeConfig).map((key) => ({
    key,
    ...ThemeConfig[key],
}));

export const themeSelect = atom('dracula');
