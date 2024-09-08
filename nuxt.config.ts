import viteWasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

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

  vite: {
    plugins: [viteWasm(), topLevelAwait()]
  },

  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-06",
});