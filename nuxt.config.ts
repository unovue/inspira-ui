export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxt/eslint"],
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "fr",
        name: "Français",
      },
    ],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
});
