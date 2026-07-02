<template>
  <div class="grid gap-3">
    <NuxtLink
      to="https://rahulv.dev/?connect&referrer=inspira-ui"
      target="_blank"
      rel="noreferrer"
      aria-label="Hire the creator for custom Vue and Nuxt work"
      class="group bg-elevated/35 ring-default/70 hover:bg-elevated/55 border-accent-foreground/25 relative overflow-hidden rounded-[1.5rem] border-2 border-solid p-1 ring transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98] dark:border-none"
    >
      <div class="relative rounded-[calc(1.5rem-0.25rem)] p-3.5">
        <div class="flex items-start gap-3">
          <div class="relative shrink-0">
            <span
              aria-hidden="true"
              class="ring-default/70 block size-10 rounded-full bg-cover bg-center ring"
              style="background-image: url(&quot;https://github.com/rahul-vashishtha.png&quot;)"
            />
            <span
              class="bg-success ring-default absolute right-0 bottom-0 size-2.5 rounded-full ring-2"
            />
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2">
              <span class="bg-success size-1.5 rounded-full" />
              <span class="text-success text-[10px] font-semibold tracking-[0.12em] uppercase">
                Available
              </span>
            </div>
            <div class="text-highlighted mt-1 text-sm leading-5 font-semibold tracking-[-0.02em]">
              Need custom solution?
            </div>
          </div>
        </div>

        <p class="text-muted mt-2 text-justify text-sm leading-5">
          Components, brand systems, and creative Vue/Nuxt development.
        </p>

        <div class="mt-4 flex items-center justify-between gap-2">
          <div class="flex flex-1 flex-wrap gap-1">
            <span
              class="bg-inverted text-inverted ring-default/60 w-full rounded-full px-3 py-2 text-center text-sm font-medium ring"
            >
              Contact Now
            </span>
          </div>
          <span
            class="bg-inverted text-inverted flex size-8.5 items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-45"
          >
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-3.5"
            />
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
