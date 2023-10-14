import { localesFetcher } from "../utils/localesFetcher";

export default defineI18nLocale(async (locale) => await localesFetcher(locale));
