<template>
  <div class="border-default/70 border-b">
    <NuxtLink
      to="https://pro.inspira-ui.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Explore Inspira UI Pro templates and sections"
      class="group hover:bg-elevated/45 focus-visible:ring-primary flex items-center gap-3 px-2 py-4 transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset motion-reduce:transition-none"
    >
      <span
        class="border-info/35 bg-info/10 text-info flex size-8 shrink-0 items-center justify-center border font-mono text-[0.5625rem] font-bold tracking-[0.1em] uppercase"
      >
        Pro
      </span>

      <div class="min-w-0 flex-1">
        <div class="text-highlighted text-sm font-semibold tracking-[-0.015em]">Inspira UI Pro</div>
        <p class="text-muted mt-0.5 truncate text-xs leading-5">
          Templates, sections, and page blocks.
        </p>
      </div>

      <UIcon
        name="i-lucide-arrow-up-right"
        class="text-muted group-hover:text-highlighted size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
    </NuxtLink>
  </div>
</template>
