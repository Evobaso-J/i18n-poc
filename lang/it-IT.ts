const I18N_BASE_URL = "https://i18n.staging.kampaay.com/";
export default defineI18nLocale(async (locale) => {
  try {
    return await (await fetch(`${I18N_BASE_URL}fe-${locale}.json`)).json();
  } catch (e) {
    // in case of fetch error, return an empty bundle and log the error
    console.error(e);
    return {};
  }
});
