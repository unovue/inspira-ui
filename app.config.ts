import { useI18n } from "vue-i18n";

// const { t } = useI18n();
import { $t } from "./i18n/locales";

export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "Inspira UI",
      description: "Build beautiful websites using Vue & Nuxt.",
      ogImage: "https://cdn.inspira-ui.com/og-image-v2.1.png",
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
        light: "https://cdn.inspira-ui.com/logo.svg",
        dark: "https://cdn.inspira-ui.com/logo-dark.svg",
      },
      nav: [
        {
          title: $t("nav.Docs"),
          links: [
            {
              title: $t("nav.GettingStarted"),
              to: "/getting-started/introduction",
              description: $t("nav.GettingStartedDescription"),
            },
            {
              title: $t("nav.Installation"),
              to: "/getting-started/installation",
              description: $t("nav.InstallationDescription"),
            },
            {
              title: $t("nav.Components"),
              to: "/components",
              description: $t("nav.ComponentsDescription"),
              target: "_self",
            },
            {
              title: "Inspira UI v1",
              to: "https://v1.inspira-ui.com",
              description: $t("nav.V1DocsDescription"),
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
          title: $t("nav.Community"),
          links: [
            {
              title: "GitHub",
              to: "https://github.com/unovue/inspira-ui",
              description: $t("nav.GitHubDescription"),
              target: "_blank",
            },
            {
              title: "Discord",
              to: "https://discord.gg/Xbh5DwJRc9",
              description: $t("nav.DiscordDescription"),
              target: "_blank",
            },
            {
              title: $t("nav.Forum"),
              to: "https://github.com/unovue/inspira-ui/discussions",
              target: "_blank",
              description: $t("nav.ForumDiscord"),
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
      levelStyle: "aside",
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
      title: $t("toc.title"),
      enableInHomepage: false,
      carbonAds: {
        enable: true,
        code: "CW7DEK37",
        placement: "inspira-uicom",
      },
      links: [
        {
          title: $t("toc.StarOnGitHub"),
          icon: "lucide:star",
          to: "https://github.com/unovue/inspira-ui",
          target: "_blank",
        },
        {
          title: $t("toc.CreateIssues"),
          icon: "lucide:circle-dot",
          to: "https://github.com/unovue/inspira-ui/issues",
          target: "_blank",
        },
        {
          title: $t("toc.JoinDiscord"),
          icon: "ri:discord-line",
          to: "https://discord.gg/Xbh5DwJRc9",
          target: "_blank",
        },
        {
          title: $t("toc.Forum"),
          icon: "lucide:newspaper",
          to: "https://github.com/unovue/inspira-ui/discussions",
          target: "_blank",
        },
        {
          title: $t("toc.FollowOnX"),
          icon: "prime:twitter",
          to: "https://x.com/rahulv_dev",
          target: "_blank",
        },
        {
          title: $t("toc.FollowOnBluesky"),
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
