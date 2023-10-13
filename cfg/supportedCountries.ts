import { CountryCode } from "./countries";

type WithId = {
  id: number;
};

/**
 * For convention and compatibility with languages we use ISO 3166-1 alpha-2 codes (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) as country codes
 */
export type SupportedCountryCode = Extract<CountryCode, "IT" | "SE">;
/**
 * the language type is the identifier of the language ISO 639-1 (https://www.w3schools.com/tags/ref_language_codes.asp) that we use to store user preference in the browser
 */
export type LanguageCode = "it" | "sv" | "en";

/**
 * Used for internationalized JS features like formatting dates and such.
 * LanguageCode is a string chosen between the IETF language tag convention, we use it for localizing date formats
 * we can find all entries at this address http://www.lingoes.net/en/translator/langcode.htm
 */
export type LocaleCode = "it-IT" | "sv-SE" | "en-US";

/**
 * Used as the url portion that identifies the language and also as the name of the JSON with the i18n translations for the language.
 *
 * The i18nLocale is a string that combines the languageCode and the countryCode.
 * Defines the language chosen, and the reference country.
 *
 * Only the currently supported combinations are listed here.
 */
export type I18nLocale = "it-IT" | "sv-SE" | "en-IT" | "en-SE";

export type I18nBinding = {
  /**
   * Type documentation: {@link LanguageCode}
   */
  languageCode: LanguageCode;
  /**
   * Type documentation: {@link LocaleCode}
   */
  localeCode: LocaleCode;
  /**
   * Type documentation: {@link I18nLocale}
   */
  i18nLocale: I18nLocale;
  langLabel: string;
};

export type GmapsCfg = {
  // Component restrictions for countries uses an array of ISO 3166-1 Alpha-2 country code:
  // Reference: https://it.wikipedia.org/wiki/ISO_3166-1_alpha-2
  restrictions: { country: SupportedCountryCode[] };
};

export type Country = WithId &
  I18nBinding & {
    code: SupportedCountryCode;
    name: CountryName;
    secondaryLangs: I18nBinding[];
    gmapsCfg: GmapsCfg;
    defaultGeoareaId: number;
  };

export type CountryName = "Italia" | "Sweden";

export const ENG_LANG_CODE: LanguageCode = "en";

const ENGLISH_LANGUAGE: Omit<I18nBinding, "i18nLocale"> = {
  languageCode: ENG_LANG_CODE,
  localeCode: "en-US",
  langLabel: "language.label.english",
};

export const COUNTRY_IT: Country = {
  id: 1,
  name: "Italia",
  code: "IT",
  localeCode: "it-IT",
  languageCode: "it",
  i18nLocale: "it-IT",
  langLabel: "language.label.italian",
  secondaryLangs: [
    {
      ...ENGLISH_LANGUAGE,
      i18nLocale: "en-IT",
    },
  ],
  gmapsCfg: {
    restrictions: {
      country: ["IT"],
    },
  },
  defaultGeoareaId: 1, // This was added to avoid hardcoding the geoareaId directly in the routing middleware
};

export const COUNTRY_SV: Country = {
  id: 2,
  name: "Sweden",
  code: "SE",
  localeCode: "sv-SE",
  languageCode: "sv",
  i18nLocale: "sv-SE",
  langLabel: "language.label.swedish",
  secondaryLangs: [
    {
      ...ENGLISH_LANGUAGE,
      i18nLocale: "en-SE",
    },
  ],
  gmapsCfg: {
    restrictions: {
      country: ["SE"],
    },
  },
  defaultGeoareaId: 2, // This was added to avoid hardcoding the geoareaId directly in the routing middleware
};

// First one is the default
const SUPPORTED_COUNTRIES: Country[] = [COUNTRY_IT];

export const DEFAULT_COUNTRY = COUNTRY_IT;
export const SUPPORTED_LOCALES = SUPPORTED_COUNTRIES.flatMap(
  ({ i18nLocale, secondaryLangs }) => [
    i18nLocale,
    ...secondaryLangs.map(({ i18nLocale }) => i18nLocale),
  ]
);

export default SUPPORTED_COUNTRIES;
