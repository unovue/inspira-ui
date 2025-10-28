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
    // Rename the title of the table of contents
    title: "On this page",
    // Add a bottom section to the table of contents
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
