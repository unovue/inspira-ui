<template>
  <div class="grid gap-3">
    <NuxtLink
      to="https://pro.inspira-ui.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Explore Inspira UI Pro templates and sections"
      class="group relative overflow-hidden rounded-[1.75rem] bg-linear-to-br from-[#22d3ee]/85 via-[#1d4ed8]/70 to-[#020617] p-px shadow-[0_26px_100px_-58px_rgba(34,211,238,0.72)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <span
        class="pointer-events-none absolute -top-16 -right-14 size-44 rounded-full bg-[#22d3ee]/38 opacity-50 blur-3xl transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-90"
      />
      <span
        class="pointer-events-none absolute -bottom-24 left-4 size-44 rounded-full bg-[#1d4ed8]/30 blur-3xl"
      />

      <div
        class="relative overflow-hidden rounded-[calc(1.75rem-1px)] bg-[#030712] p-4 ring-1 ring-cyan-100/12"
      >
        <span
          class="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-[#22d3ee]/80 via-white/25 to-transparent"
        />

        <div class="flex items-center justify-between gap-3">
          <div
            class="rounded-md bg-[#22d3ee] px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.14em] text-[#021019] uppercase shadow-[0_10px_30px_-16px_rgba(34,211,238,0.9)]"
          >
            Pro
          </div>
        </div>

        <div class="mt-4 text-[1.35rem] leading-7 font-semibold tracking-[-0.045em] text-white">
          Get Inspira UI Pro
        </div>
        <p class="mt-2 text-sm leading-6 text-cyan-50/70">
          Save time and ship fast with ready-to-use Vue/Nuxt templates, sections, and page blocks.
        </p>

        <div
          v-if="false"
          class="mt-4 grid grid-cols-3 gap-1.5"
        >
          <span
            class="rounded-xl bg-white/6 px-2 py-2 text-center text-[0.65rem] font-medium text-white/72 ring-1 ring-white/10"
          >
            Templates
          </span>
          <span
            class="rounded-xl bg-white/6 px-2 py-2 text-center text-[0.65rem] font-medium text-white/72 ring-1 ring-white/10"
          >
            Sections
          </span>
          <span
            class="rounded-xl bg-white/6 px-2 py-2 text-center text-[0.65rem] font-medium text-white/72 ring-1 ring-white/10"
          >
            Blocks
          </span>
        </div>

        <div
          class="mt-4 flex h-10 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-[#04101f] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6),0_18px_48px_-28px_rgba(34,211,238,0.8)]"
        >
          <span>Explore Pro</span>
          <span
            class="flex size-6 items-center justify-center rounded-full bg-[#22d3ee]/18 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px"
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
