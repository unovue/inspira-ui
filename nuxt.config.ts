// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-06",
  modules: ["@nuxt/image"],
});