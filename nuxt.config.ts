export default defineNuxtConfig({
  site: {
    name: "Inspira UI: Craft beautiful web experience with Vue & Nuxt.",
  },

  extends: ["docus"],

  modules: ["@nuxtjs/i18n", "@nuxt/eslint"],
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
    ],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
});
