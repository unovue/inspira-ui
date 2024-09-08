// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-gtag", "nuxt-security"],
  security: {
    headers: {
      contentSecurityPolicy: {
        'script-src': ["*", "'unsafe-inline'", "'unsafe-eval'"],
      },
    },
  },

  image: {
    domains: ["images.unsplash.com"],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-06",
});