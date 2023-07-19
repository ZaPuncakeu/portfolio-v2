import { useSelector } from 'react-redux';

import en from '../../locales/en.json';
import type { RootState } from '../store'


export function useLanguage() {
    const lang:string = useSelector((state: RootState) => state.language.language);
    const languages:any = {
        "en": en
    }

    return {
        language: lang,
        text: languages[lang]
    }
}