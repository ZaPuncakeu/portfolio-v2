import { useSelector } from 'react-redux';

import en from '../../locales/en.json';
import fr from '../../locales/fr.json';
import type { RootState } from '../store'


export function useLanguage() {
    const lang:string = useSelector((state: RootState) => state.language.language);
    const languages:any = {
        "en": en,
        "fr": fr
    }

    return {
        language: lang,
        text: languages[lang]
    }
}