// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/clarity.js", mode: "client" }],

  modules: ["@nuxt/image", "nuxt-gtag", "@vueuse/motion/nuxt", "@nuxt/eslint"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    public: {
      NUXT_CLARITY_ID: process.env.NUXT_CLARITY_ID,
      NUXT_ADSENSE_ACCOUNT: process.env.NUXT_ADSENSE_ACCOUNT,
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  app: {
    head: {
      script: [
        {
          src: "https://cdn.carbonads.com/carbon.js?serve=CW7DEK37&placement=inspira-uicom&format=responsive",
          async: true,
          id: "_carbonads_js",
        },
      ],
      meta: [
        {
          name: "google-adsense-account",
          content: process.env.NUXT_ADSENSE_ACCOUNT,
        },
      ],
    },
  },

  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-06",
});
