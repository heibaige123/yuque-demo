import { useAtom } from 'jotai';
import { LanguageMenu, languageSelect } from '../store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~renderer/shadcn-ui';
import { CommonProps } from '../interface';

interface LanguageSelectProps {
    languageChange: CommonProps['languageChange'];
    initLanguage: string;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({ languageChange, initLanguage }) => {
    const [language, setLanguage] = useAtom(languageSelect);

    initLanguage && setLanguage(initLanguage);

    return (
        <Select
            value={language}
            onValueChange={(language) => {
                setLanguage(language);
                languageChange(language);
            }}
        >
            <SelectTrigger className='w-[180px] focus:ring-0 focus:ring-offset-0'>
                <SelectValue placeholder={language} />
            </SelectTrigger>
            <SelectContent>
                {LanguageMenu.map((item) => (
                    <SelectItem
                        key={item.key}
                        value={item.value}
                    >
                        {item.value}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
