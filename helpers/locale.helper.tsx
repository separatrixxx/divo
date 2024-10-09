import { en } from "../locales/en.locale";
import { ru } from "../locales/ru.locale";
import { es } from "../locales/es.locale";


type localeType = typeof en | typeof ru | typeof es;

export function setLocale(locale: string | undefined): localeType {
    switch (locale) {
        case 'ru':
            return ru;
        case 'es':
            return es;
        default:
            return en;
    }
}
