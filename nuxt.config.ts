// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/clarity.js", mode: "client" }],

  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-gtag",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "motion-v/nuxt",
    "lenis/nuxt",
    "nuxt-llms",
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
      ignore: ["**/index.ts", "**/shaders.ts", "**/types.ts"],
    },
  ],

  ignore: ["components/**/index.ts", "components/**/shaders.ts", "components/**/types.ts"],

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
      meta: [
        {
          name: "google-adsense-account",
          content: process.env.NUXT_ADSENSE_ACCOUNT,
        },
      ],
    },
    baseURL: process.env.NODE_ENV === "development" ? "/" : "/docs/",
  },
  llms: {
    domain: "https://inspira-ui.com/",
    title: "Inspira UI",
    description:
      "Inspira UI is a free and open-source Vue.js component library that provides a collection of beautiful and customizable components for building modern web applications.",
    full: {
      title: "Inspira UI Documentation",
      description: "The complete Inspira UI documentation.",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        language: "en-US",
      },
      {
        code: "zh-cn",
        name: "中文简体",
        language: "zh-CN",
      },
    ],
  },
  fonts: {
    processCSSVariables: true,
    families: [
      {
        name: "Plus Jakarta Sans",
        provider: "google",
        global: true,
        weights: [300, 400, 500, 600, 700],
      },
      {
        name: "Space Grotesk",
        provider: "google",
        global: true,
        weights: [300, 400, 500, 600, 700],
      },
      {
        name: "JetBrains Mono",
        provider: "google",
        global: true,
        weights: [300, 400, 500, 600, 700],
      },
    ],
  },
  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2025-06-10",
});
