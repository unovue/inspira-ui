// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ["@nuxt/image", "nuxt-gtag", "@vueuse/motion/nuxt"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-06",
});