export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "Inspira UI",
      description: "Build beautiful websites using Vue & Nuxt.",
      ogImage: "https://inspira-ui.com/docs/og-image.png",
    },
    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.75,
    },
    banner: {
      enable: true,
      showClose: false,
      content: "For Tailwind CSS v3 docs, [**click here**](https://v1.inspira-ui.com).",
      to: "https://v1.inspira-ui.com",
      target: "_blank",
      border: true,
    },
    header: {
      title: "Inspira UI",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/docs/logo.svg",
        dark: "/docs/logo-dark.svg",
      },
      nav: [
        {
          title: "Docs",
          links: [
            {
              title: "Getting Started",
              to: "/getting-started/introduction",
              description: "Introduction to Inspira UI and its core concepts.",
            },
            {
              title: "Installation",
              to: "/getting-started/installation",
              description: "Follow the step-by-step guide to install Inspira UI in your project.",
            },
            {
              title: "Components",
              to: "/components",
              description: "Explore all available components and their usage.",
              target: "_self",
            },
            {
              title: "Inspira UI v1",
              to: "https://v1.inspira-ui.com",
              description: "Docs for using Inspira UI with Tailwind CSS v3.",
              target: "_blank",
            },
          ],
        },
        {
          title: "Credits",
          links: [
            {
              title: "Aceternity UI",
              to: "https://ui.aceternity.com/",
              description:
                "For providing the inspiration and permission to adapt the original designs.",
              target: "_blank",
            },
            {
              title: "Magic UI",
              to: "https://magicui.design/",
              description: "For providing the inspiration for designs.",
              target: "_blank",
            },
            {
              title: "shadcn-vue",
              to: "https://www.shadcn-vue.com/",
              description: "For the Vue port of shadcn-ui and contributions to some components",
              target: "_blank",
            },
            {
              title: "shadcn-docs-nuxt",
              to: "https://github.com/ZTL-UwU/shadcn-docs-nuxt",
              description: "For the beautifully crafted Nuxt documentation site.",
              target: "_blank",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              title: "GitHub",
              to: "https://github.com/unovue/inspira-ui",
              description: "Source code for Inspira UI.",
              target: "_blank",
            },
            {
              title: "Discord",
              to: "https://discord.gg/Xbh5DwJRc9",
              description: "Connect with community on Discord",
              target: "_blank",
            },
            {
              title: "Forum",
              to: "https://github.com/unovue/inspira-ui/discussions",
              target: "_blank",
              description: "Join the forum",
            },
          ],
        },
      ],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/unovue/inspira-ui",
          target: "_blank",
        },
        {
          icon: "prime:twitter",
          to: "https://x.com/rahulv_dev",
          target: "_blank",
        },
        {
          icon: "ri:discord-line",
          to: "https://discord.gg/Xbh5DwJRc9",
          target: "_blank",
        },
        {
          icon: "ri:bluesky-line",
          to: "http://bsky.app/profile/inspira-ui.com",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
      folderStyle: "tree",
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      padded: true,
      codeCopyToast: true,
    },
    footer: {
      credits: "Copyright © 2024 - 2025",
      links: [
        {
          icon: "lucide:globe",
          to: "https://rahulv.dev",
          title: "Maintained by rahulv.dev",
          target: "_blank",
        },
        {
          icon: "lucide:github",
          title: "Github",
          to: "https://github.com/unovue/inspira-ui",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      enableInHomepage: true,
      carbonAds: {
        enable: true,
        code: "CW7DEK37",
        placement: "inspira-uicom",
      },
      links: [
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "https://github.com/unovue/inspira-ui",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "https://github.com/unovue/inspira-ui/issues",
          target: "_blank",
        },
        {
          title: "Join Discord",
          icon: "ri:discord-line",
          to: "https://discord.gg/Xbh5DwJRc9",
          target: "_blank",
        },
        {
          title: "Forum",
          icon: "lucide:newspaper",
          to: "https://github.com/unovue/inspira-ui/discussions",
          target: "_blank",
        },
        {
          title: "Follow on X",
          icon: "prime:twitter",
          to: "https://x.com/rahulv_dev",
          target: "_blank",
        },
        {
          title: "Follow on Bluesky",
          icon: "ri:bluesky-line",
          to: "http://bsky.app/profile/inspira-ui.com",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
    },
  },
});
