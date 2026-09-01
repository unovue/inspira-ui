export function useDocsPageUi() {
  return {
    shell: {
      root: "min-h-[calc(100dvh-var(--ui-header-height)-3rem)] lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-0 lg:border-x lg:border-default/70",
      left: "lg:col-span-1 lg:border-e lg:border-default/70",
      center: "min-w-0 lg:col-span-1",
    },
    page: {
      root: "flex min-h-full flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_15.5rem] lg:gap-0",
      center: "min-w-0 lg:col-span-1 lg:px-10 xl:px-12 2xl:px-14",
      right: "hidden lg:order-last lg:col-span-1 lg:block lg:border-s lg:border-default/70",
    },
    catalogCenterClass: "min-w-0 lg:col-span-1",
    header: {
      root: "mx-auto w-full max-w-[64rem] border-b-0 py-10 sm:py-12",
      container: "space-y-6",
      wrapper: "flex flex-col gap-6 md:flex-row md:items-start md:justify-between",
      headline: "font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-primary uppercase",
      title:
        "max-w-3xl text-[2.375rem] font-semibold leading-[1.05] tracking-[-0.03em] text-highlighted sm:text-5xl",
      description: "max-w-[60ch] text-base leading-[1.65] text-muted sm:text-[1.0625rem]",
      links: "flex flex-wrap items-center gap-px",
    },
    bodyClass: "mx-auto mt-10 w-full max-w-[64rem] space-y-14 pb-20 sm:mt-12",
    catalogBodyClass: "mt-0 w-full max-w-none space-y-0 pb-0",
    badge: {
      base: "rounded-none border border-default/70 bg-elevated/35 px-2.5 py-1 font-mono text-[0.6875rem] font-medium tracking-[0.1em] uppercase",
    },
    headerLinkButton:
      "rounded-none border border-default/70 px-3 transition-[background-color,color] duration-150 hover:bg-elevated/60 motion-reduce:transition-none",
    footerActions:
      "flex items-center gap-px border border-default/70 bg-elevated/25 p-1 text-sm text-muted",
    footerButton: {
      leadingIcon: "size-3.5",
    },
    surround: {
      root: "grid grid-cols-1 gap-px border border-default/70 bg-default sm:grid-cols-2",
      link: "group rounded-none bg-default px-5 py-6 transition-colors duration-200 hover:bg-elevated/55 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50 motion-reduce:transition-none",
      linkLeading:
        "mb-5 inline-flex size-8 items-center justify-center border border-default/70 bg-elevated/40 transition-colors duration-200 group-hover:border-primary/50 group-hover:bg-primary/10 motion-reduce:transition-none",
      linkLeadingIcon:
        "size-3.5 text-muted transition-[color,translate] duration-200 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transition-none",
      linkTitle: "text-[0.9375rem] font-semibold text-highlighted",
      linkDescription: "mt-1.5 line-clamp-2 text-sm leading-[1.6] text-muted",
    },
    toc: {
      root: "mx-0 px-4 sm:mx-0 sm:px-4 lg:top-[calc(var(--ui-header-height)+3rem)] lg:max-h-[calc(100dvh-var(--ui-header-height)-3rem)] lg:bg-transparent",
      container: "border-default/70 flex flex-col border-b py-5 lg:border-b-0 lg:py-6",
      trigger: "font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase",
      list: "space-y-px",
      listWithChildren: "ms-2 border-s border-default/70 ps-2",
      link: "rounded-none border-s border-transparent px-2.5 py-1.5 text-[0.8125rem] transition-[border-color,background-color,color] duration-150 hover:border-default hover:bg-elevated/40 motion-reduce:transition-none",
      indicator: "w-px rounded-none bg-primary",
      bottom: "hidden border-t border-default/70 lg:flex lg:flex-col lg:gap-0",
    },
    rightAside:
      "sticky top-[calc(var(--ui-header-height)+3rem)] hidden max-h-[calc(100dvh-var(--ui-header-height)-3rem)] overflow-y-auto px-4 py-6 lg:block",
  } as const;
}
