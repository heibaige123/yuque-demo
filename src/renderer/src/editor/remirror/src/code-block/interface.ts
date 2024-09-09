export interface CommonProps {
    languageChange: (language: string) => void;
    themeChange: (theme: string) => void;

    initLanguage: string;
}
