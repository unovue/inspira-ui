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

  ui: {
    content: true,
    mdc: true,
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  css: ["~/assets/css/main.css"],

  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "cn",
        name: "简体中文",
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
      ignore: ["**/index.ts", "**/shaders.ts", "**/types.ts"],
    },
  ],
});
