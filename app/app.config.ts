export default defineAppConfig({
  ui: {
    colors: {
      neutral: "zinc",
    },
    header: {
      slots: {
        root: "bg-default/70 border-b border-default/60 backdrop-blur-xl",
      },
    },
    contentSearchButton: {
      slots: {
        base: "transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]",
      },
    },
    contentSearch: {
      slots: {
        modal:
          "h-[min(38rem,calc(100dvh-2rem))] overflow-hidden rounded-none border border-default/70 bg-default/85 shadow-[0_32px_120px_-72px_rgba(0,0,0,0.82)] backdrop-blur-2xl sm:max-w-3xl",
        input: "",
      },
    },
    commandPalette: {
      slots: {
        root: "h-full min-h-0 divide-y-0 overflow-hidden bg-transparent",
        input:
          "border-default/70 border-b bg-elevated/20 px-4 [&_input]:h-14 [&_input]:text-sm [&_input]:placeholder:text-muted",
        close:
          "rounded-none transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-elevated/60 active:scale-95",
        content: "min-h-0 bg-transparent",
        viewport: "divide-default/60 divide-y px-4 pb-4",
        group: "py-2",
        label: "px-3 py-3 text-[0.6875rem] font-semibold tracking-[0.12em] text-toned uppercase",
        item: "rounded-none px-3 py-3 transition-colors duration-200 before:rounded-none before:transition-colors before:duration-200 data-highlighted:not-data-disabled:before:bg-elevated/55",
        itemLeadingIcon: "size-4",
        itemLabel: "text-sm",
        itemLabelBase: "text-highlighted [&>mark]:bg-primary [&>mark]:text-inverted",
        itemDescription: "text-xs text-muted",
      },
    },
    prose: {
      h1: {
        slots: {
          base: "mb-8 text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em]",
        },
      },
      h2: {
        slots: {
          base: "mt-12 mb-4 text-2xl font-semibold tracking-[-0.02em] [&>a>code]:font-semibold",
          leading: "rounded-none",
        },
      },
      h3: {
        slots: {
          base: "mt-9 mb-3 text-xl font-semibold tracking-[-0.015em] [&>a>code]:font-semibold",
          leading: "rounded-none",
        },
      },
      h4: {
        slots: {
          base: "mt-7 mb-2 text-[1.0625rem] font-semibold tracking-[-0.01em]",
        },
      },
      p: {
        base: "my-5 w-full max-w-none text-[0.96875rem] leading-[1.7] text-pretty",
      },
      li: {
        base: "my-1.5 ps-1.5 text-[0.96875rem] leading-[1.7] [&>ul]:my-0",
      },
      pre: {
        slots: {
          root: "group relative my-6",
          header:
            "border-default/70 bg-default relative flex items-center gap-1.5 rounded-none border border-b-0 px-4 py-3",
          filename: "text-default text-sm/6",
          icon: "size-4 shrink-0",
          copy: "absolute top-[9px] right-[9px] transition-opacity duration-150 [&_button]:rounded-none lg:opacity-0 lg:group-hover:opacity-100 motion-reduce:transition-none",
          base: "border-default/70 bg-elevated/35 rounded-none border px-4 py-4 font-mono text-sm/6 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none",
        },
        variants: {
          filename: {
            true: {
              root: "my-6 [&>pre]:my-0 [&>pre]:rounded-none",
            },
          },
        },
      },
      codeGroup: {
        slots: {
          root: "group relative my-6 *:not-first:!static *:not-first:!my-0",
          list: "border-default/70 bg-default relative flex items-center gap-px overflow-x-auto rounded-none border border-b-0 p-1",
          indicator:
            "bg-elevated absolute inset-y-1 left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) rounded-none transition-[translate,width] duration-200 motion-reduce:transition-none",
          trigger:
            "text-default hover:bg-elevated/50 data-[state=active]:text-highlighted relative inline-flex items-center gap-1.5 rounded-none px-2.5 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 motion-reduce:transition-none",
        },
      },
      codeCollapse: {
        slots: {
          footer:
            "bg-default/90 absolute inset-x-px bottom-px flex h-16 items-center justify-center rounded-none backdrop-blur",
          trigger: "group rounded-none",
        },
      },
      table: {
        slots: {
          root: "border-default/70 relative my-6 overflow-x-auto border",
          base: "w-full rounded-none border-separate border-spacing-0",
        },
      },
      callout: {
        slots: {
          base: "my-6 rounded-none px-4 py-3 text-sm/6 last:mb-0",
        },
      },
      card: {
        slots: {
          base: "border-default bg-default relative my-6 block rounded-none border p-4 transition-colors sm:p-6",
        },
      },
      badge: {
        base: "rounded-none",
      },
    },
    pageCard: {
      slots: {
        root: "relative flex rounded-none",
        spotlight: "pointer-events-none absolute inset-0 rounded-none bg-default/90",
      },
    },
    formField: {
      slots: {
        wrapper: "w-full",
        container: "max-w-32 w-full flex items-center justify-end",
      },
    },
    switch: {
      slots: {
        root: "justify-end",
      },
    },
  },

  header: {
    title: "Inspira UI",
    logo: {
      light: "https://cdn.inspira-ui.com/logo.svg",
      dark: "https://cdn.inspira-ui.com/logo-dark.svg",
    },
  },

  socials: {
    discord: "https://discord.gg/Xbh5DwJRc9",
    x: "https://x.com/rahulv_dev",
    bluesky: "http://bsky.app/profile/inspira-ui.com",
  },

  toc: {
    title: "On This Page",
    bottom: {
      title: "Community",
      links: [
        {
          label: "Star on Github",
          icon: "lucide:star",
          to: "https://github.com/unovue/inspira-ui",
          target: "_blank",
        },
        {
          label: "Create Issue",
          icon: "lucide:circle-dot",
          to: "https://github.com/unovue/inspira-ui/issues",
          target: "_blank",
        },
        {
          label: "Join Discord",
          icon: "ri:discord-line",
          to: "https://discord.gg/Xbh5DwJRc9",
          target: "_blank",
        },
        {
          label: "Forum",
          icon: "lucide:newspaper",
          to: "https://github.com/unovue/inspira-ui/discussions",
          target: "_blank",
        },
        {
          label: "Follow on X",
          icon: "prime:twitter",
          to: "https://x.com/rahulv_dev",
          target: "_blank",
        },
        {
          label: "Follow On Bluesky",
          icon: "ri:bluesky-line",
          to: "http://bsky.app/profile/inspira-ui.com",
          target: "_blank",
        },
      ],
    },
  },
});
