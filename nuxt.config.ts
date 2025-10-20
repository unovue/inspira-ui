export default defineNuxtConfig({
  extends: ["docus"],
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@vueuse/nuxt",
  ],

  css: ["~/assets/css/main.css"],

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

  components: [
    {
      path: "~/components/",
      global: true,
      pathPrefix: false,
    },
  ],
});
