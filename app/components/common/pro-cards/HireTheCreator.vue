<template>
  <div class="border-default/70 border-t py-5">
    <NuxtLink
      to="https://rahulv.dev/?connect&referrer=inspira-ui"
      target="_blank"
      rel="noreferrer"
      aria-label="Hire the creator for custom Vue and Nuxt work"
      class="group border-default/70 bg-elevated/20 hover:bg-elevated/45 relative block overflow-hidden rounded-none border transition-colors duration-200 motion-reduce:transition-none"
    >
      <div class="relative p-4">
        <div class="flex items-start gap-3">
          <div class="relative shrink-0">
            <span
              aria-hidden="true"
              class="ring-default/70 block size-9 rounded-full bg-cover bg-center ring"
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
              Hire Me
            </div>
          </div>
        </div>

        <p class="text-muted mt-3 text-sm leading-5">
          Components, brand systems, and creative Vue/Nuxt development.
        </p>

        <div class="mt-5 flex items-center justify-between gap-px">
          <div class="flex flex-1 flex-wrap gap-1">
            <span
              class="bg-inverted text-inverted w-full rounded-none px-3 py-2 text-center text-sm font-medium"
            >
              Contact Now
            </span>
          </div>
          <span
            class="bg-inverted text-inverted flex size-9 items-center justify-center rounded-none transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
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
