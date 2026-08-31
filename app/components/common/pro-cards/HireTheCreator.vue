<template>
  <div class="border-default/70 border-b">
    <NuxtLink
      to="https://rahulv.dev/?connect&referrer=inspira-ui"
      target="_blank"
      rel="noreferrer"
      aria-label="Hire the creator for custom Vue and Nuxt work"
      class="group hover:bg-elevated/45 focus-visible:ring-primary flex items-center gap-3 px-2 py-4 transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset motion-reduce:transition-none"
    >
      <div class="relative shrink-0">
        <span
          aria-hidden="true"
          class="ring-default/70 block size-8 rounded-full bg-cover bg-center ring"
          style="background-image: url(&quot;https://github.com/rahul-vashishtha.png&quot;)"
        />
        <span
          class="bg-success ring-default absolute right-0 bottom-0 size-2 rounded-full ring-2"
        />
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-2">
          <span class="text-success text-sm font-semibold tracking-[-0.015em]">Hire me</span>
          <span
            class="text-success font-mono text-[0.5625rem] font-semibold tracking-[0.1em] uppercase"
          >
            Available
          </span>
        </div>
        <p class="text-muted mt-0.5 truncate text-xs leading-5">
          Vue, Nuxt, and creative frontend work.
        </p>
      </div>

      <UIcon
        name="i-lucide-arrow-up-right"
        class="text-muted group-hover:text-highlighted size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
    </NuxtLink>
  </div>
</template>
