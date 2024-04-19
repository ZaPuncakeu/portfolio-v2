import { LocaleInterface } from "./locale";

export interface LocaleLanguagesInterface {
    en: LocaleInterface
    fr: LocaleInterface
}

export interface LanguageHookInterface {
    language: string
    text: LocaleInterface
}