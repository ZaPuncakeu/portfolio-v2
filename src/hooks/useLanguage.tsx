import { useSelector } from 'react-redux';

import en from '../../locales/en.json';
import fr from '../../locales/fr.json';
import type { RootState } from '../store'
import { LocaleLanguagesInterface } from '../types/language';


export function useLanguage() {
    const lang:string = useSelector((state: RootState) => state.language.language);
    const languages:LocaleLanguagesInterface = {
        "en": en,
        "fr": fr
    }

    return {
        language: lang,
        text: languages[lang]
    }
}