export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "inspira-ui",
      description: "Build beautiful websites using Vue.",
    },
    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.75,
    },
    header: {
      title: "inspira ui",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg",
      },
      nav: [],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/rahulv-official/inspira-ui",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: "Copyright © 2024",
      links: [
        {
          to: "https://rahulv.dev",
          title: "Maintained by rahulv.dev",
          target: "_blank",
        },
        {
          icon: "lucide:github",
          title: "Github",
          to: "https://github.com/rahulv-official/inspira-ui",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "https://github.com/rahulv-official/inspira-ui",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "https://github.com/rahulv-official/inspira-ui/issues",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
