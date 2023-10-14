const I18N_BASE_URL = "https://i18n.staging.kampaay.com/";
// export default defineI18nLocale(async (locale) => {
//   try {
//     return await (await fetch(`${I18N_BASE_URL}fe-${locale}.json`)).json();
//   } catch (e) {
//     console.error(e);
//     return {};
//   }
// });

export const localesFetcher = async (locale: string) => {
  try {
    return await (await fetch(`${I18N_BASE_URL}fe-${locale}.json`)).json();
  } catch (e) {
    console.error(e);
    return {};
  }
};
