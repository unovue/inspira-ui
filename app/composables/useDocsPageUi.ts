export function useDocsPageUi() {
  return {
    header: {
      root: "border-b border-default/70 py-10 sm:py-12",
      container: "space-y-5",
      wrapper: "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
      headline:
        "text-[0.68rem] font-medium tracking-[0.22em] text-toned uppercase",
      title:
        "max-w-3xl text-4xl font-semibold tracking-tight text-highlighted sm:text-5xl",
      description: "max-w-2xl text-base leading-7 text-muted sm:text-lg",
      links: "flex flex-wrap items-center gap-2",
    },
    bodyClass: "mt-10 space-y-14 pb-28",
    badge: {
      base:
        "rounded-full px-2.5 py-1 text-[0.68rem] font-medium tracking-[0.14em] uppercase",
    },
    headerLinkButton:
      "rounded-full px-3 transition-[background-color,color,transform] duration-150 active:scale-[0.98]",
    footerActions:
      "flex items-center gap-1 rounded-full border border-default/70 bg-elevated/45 p-1 text-sm text-muted backdrop-blur",
    footerButton: {
      leadingIcon: "size-3.5",
    },
    surround: {
      root: "grid grid-cols-1 gap-3 sm:grid-cols-2",
      link:
        "group rounded-2xl border border-default/70 bg-elevated/45 px-5 py-5 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-elevated/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50",
      linkLeading:
        "mb-4 inline-flex size-9 items-center justify-center rounded-full bg-default/70 ring ring-default/70 transition-colors group-hover:bg-inverted",
      linkLeadingIcon:
        "size-4 text-muted transition-[color,translate] group-hover:text-inverted",
      linkTitle: "text-sm font-medium text-highlighted",
      linkDescription: "mt-1 line-clamp-2 text-sm text-muted",
    },
    toc: {
      root: "bg-transparent lg:bg-transparent",
      trigger: "text-sm font-medium",
      list: "space-y-0.5",
      listWithChildren: "ms-3 border-s border-muted/70 ps-3",
      link:
        "rounded-full px-2.5 py-1.5 text-[0.8125rem] transition-[background-color,color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]",
      indicator: "bg-inverted/60",
      bottom: "hidden lg:flex lg:flex-col gap-4",
    },
  } as const;
}
