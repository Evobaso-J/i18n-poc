import { locales } from "./lang/localesProvider";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/i18n"],
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "it-IT",
    lazy: true,
    locales,
    langDir: "lang/",
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        experimentalDecorators: true,
      },
    },
  },
});
