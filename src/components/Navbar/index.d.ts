import { LocaleInterface } from '../../types/locale';
export interface NavbarPropsInterface {
    text: LocaleInterface
    theme: string
    ids: string[]
    language: string
    setContactOpened: (arg0: boolean) => void 
}