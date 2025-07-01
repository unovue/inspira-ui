// import { defineI18nConfig } from '@nuxtjs/i18n';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      // Add here all english strings defined in app.config.ts e.g. titles in header.nav or toc.title
      // Default UI strings are already translated out of the box

      shiki: "shiki", // for example: site title
    },
    cn: {
      // Add here all translation

      shiki: "式", // for example: site title
    },
  },
}));
