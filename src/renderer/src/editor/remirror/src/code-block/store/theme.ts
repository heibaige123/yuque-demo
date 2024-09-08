import type { Extension } from '@codemirror/state';
import { atom } from 'jotai';
import {
    amy,
    ayuLight,
    barf,
    bespin,
    birdsOfParadise,
    boysAndGirls,
    clouds,
    cobalt,
    coolGlow,
    dracula,
    espresso,
    noctisLilac,
    rosePineDawn,
    smoothy,
    solarizedLight,
    tomorrow,
} from 'thememirror';

const ThemeConfig: Record<
    string,
    {
        value: string;
        themeExtension: Extension;
    }
> = {
    amy: {
        value: 'amy',
        themeExtension: amy,
    },
    ayuLight: {
        value: 'ayuLight',
        themeExtension: ayuLight,
    },
    barf: {
        value: 'barf',
        themeExtension: barf,
    },
    boysAndGirls: {
        value: 'boysAndGirls',
        themeExtension: boysAndGirls,
    },
    bespin: {
        value: 'bespin',
        themeExtension: bespin,
    },
    cobalt: {
        value: 'cobalt',
        themeExtension: cobalt,
    },
    clouds: {
        value: 'clouds',
        themeExtension: clouds,
    },
    birdsOfParadise: {
        value: 'birdsOfParadise',
        themeExtension: birdsOfParadise,
    },
    coolGlow: {
        value: 'coolGlow',
        themeExtension: coolGlow,
    },
    dracula: {
        value: 'dracula',
        themeExtension: dracula,
    },
    espresso: {
        value: 'espresso',
        themeExtension: espresso,
    },
    noctisLilac: {
        value: 'noctisLilac',
        themeExtension: noctisLilac,
    },
    rosePineDawn: {
        value: 'rosePineDawn',
        themeExtension: rosePineDawn,
    },
    smoothy: {
        value: 'smoothy',
        themeExtension: smoothy,
    },
    solarizedLight: {
        value: 'solarizedLight',
        themeExtension: solarizedLight,
    },
    tomorrow: {
        value: 'tomorrow',
        themeExtension: tomorrow,
    },
};

export const ThemeMenu = Object.keys(ThemeConfig).map((key) => ({
    key,
    ...ThemeConfig[key],
}));

export const themeSelect = atom('dracula');

export const readonlyTheme = atom((get) => {
    const theme = get(themeSelect);
    return ThemeConfig[theme].themeExtension;
});
