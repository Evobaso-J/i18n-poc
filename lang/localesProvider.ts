import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";
import SUPPORTED_COUNTRIES from "../cfg/supportedCountries";

const getI18nLocales = (): LocaleObject[] =>
  SUPPORTED_COUNTRIES.flatMap(({ i18nLocale, secondaryLangs }) => {
    return [{ i18nLocale }, ...secondaryLangs].map(({ i18nLocale }) => ({
      code: i18nLocale,
      file: `${i18nLocale}.json`,
    }));
  });

export const locales = getI18nLocales();
