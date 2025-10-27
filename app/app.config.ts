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
});
