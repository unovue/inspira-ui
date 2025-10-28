export default defineAppConfig({
  ui: {
    colors: {
      neutral: "zinc",
    },
    header: {
      slots: {
        root: "bg-default/15",
      },
    },
    contentSearch: {
      slots: {
        modal: "bg-default/25 backdrop-blur-xl",
      },
    },
  },
  toc: {
    title: "On this page",
    bottom: {
      title: "Community",
      links: [
        {
          icon: "i-lucide-book-open",
          label: "Nuxt UI docs",
          to: "https://ui.nuxt.com/getting-started/installation/nuxt",
          target: "_blank",
        },
      ],
    },
  },
});
