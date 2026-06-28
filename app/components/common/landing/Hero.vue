<script lang="ts" setup>
const { locale } = useDocusI18n();
const colorMode = useColorMode();

const componentPath = computed(() => `/${locale.value}/components`);
const installationPath = computed(() => `/${locale.value}/getting-started/installation`);

const isMounted = ref(false);
const isDarkPreview = computed(() => isMounted.value && colorMode.value === "dark");

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <section class="relative overflow-hidden py-20 sm:py-28 lg:py-32">
    <div class="grid gap-16 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
      <div class="max-w-3xl">
        <p class="font-mono text-xs tracking-[0.22em] text-[#947545] uppercase dark:text-[#d6b16a]">
          Inspira UI for Vue and Nuxt
        </p>

        <h1
          class="mt-8 max-w-4xl text-5xl leading-tight font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl"
        >
          Animated UI components for Vue and Nuxt.
        </h1>

        <p class="mt-7 max-w-xl text-lg leading-8 text-[#5d6670] dark:text-[#a7abb4]">
          Explore reusable components with live previews, props, API docs, install notes, and source
          code. The homepage stays lightweight; detailed demos live on component pages.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            :to="componentPath"
            class="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#111315] px-5 text-sm font-medium text-white transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] dark:bg-[#f5f1e8] dark:text-[#050506]"
          >
            Browse components
            <span
              class="grid size-7 place-items-center rounded-full bg-white/10 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 dark:bg-black/10"
            >
              <UIcon
                name="i-lucide-arrow-right"
                class="size-3.5"
              />
            </span>
          </NuxtLink>

          <NuxtLink
            :to="installationPath"
            class="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white/75 px-5 text-sm font-medium text-[#111315] ring-1 ring-[#dfe5e8] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] dark:bg-white/[0.05] dark:text-[#f5f1e8] dark:ring-white/10"
          >
            Installation guide
            <span
              class="grid size-7 place-items-center rounded-full bg-[#111315]/5 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 dark:bg-white/10"
            >
              <UIcon
                name="i-lucide-book-open"
                class="size-3.5"
              />
            </span>
          </NuxtLink>
        </div>

        <p
          class="mt-8 font-mono text-xs tracking-[0.16em] text-[#6b737d] uppercase dark:text-[#a7abb4]"
        >
          120+ components / live previews / source included
        </p>
      </div>

      <div class="relative">
        <p
          aria-hidden="true"
          class="pointer-events-none absolute -top-16 right-0 hidden text-[10rem] leading-none font-semibold tracking-normal text-[#121313]/5 uppercase lg:block dark:text-white/[0.035]"
        >
          UI
        </p>

        <div class="hero-beam relative rounded-[3rem] p-px">
          <div
            class="hero-preview-card relative overflow-hidden rounded-[calc(3rem-1px)] border p-6 sm:p-8"
            :class="
              isDarkPreview
                ? 'border-white/10 bg-[#050506] text-[#f5f1e8] shadow-none'
                : 'border-[#aebdc7] bg-white/[0.96] text-[#111315] shadow-[0_30px_90px_-42px_rgba(15,23,42,0.55)]'
            "
          >
            <div
              aria-hidden="true"
              class="hero-preview-line absolute inset-x-8 top-10 h-px bg-linear-to-r from-transparent to-transparent"
              :class="isDarkPreview ? 'via-[#d6b16a]/40' : 'via-[#947545]/45'"
            />
            <div
              aria-hidden="true"
              class="hero-preview-glow absolute right-8 bottom-8 size-52 rounded-full blur-3xl"
              :class="isDarkPreview ? 'bg-[#d6b16a]/10' : 'bg-[#d9c49b]/28'"
            />

            <div class="relative z-10 flex min-h-112 flex-col justify-between">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="hero-preview-eyebrow font-mono text-[11px] tracking-[0.2em] uppercase">
                    Component docs
                  </p>
                  <p
                    class="mt-2 text-sm"
                    :class="isDarkPreview ? 'text-[#a7abb4]' : 'text-[#5d6670]'"
                  >
                    Preview, props, API, installation, source.
                  </p>
                </div>
                <p
                  class="font-mono text-[11px]"
                  :class="isDarkPreview ? 'text-[#a7abb4]' : 'text-[#5d6670]'"
                >
                  Vue / Nuxt
                </p>
              </div>

              <div class="max-w-xl py-16">
                <p
                  class="font-mono text-xs tracking-[0.2em] uppercase"
                  :class="isDarkPreview ? 'text-[#a7abb4]' : 'text-[#5d6670]'"
                >
                  Component preview
                </p>
                <h2 class="mt-4 text-5xl leading-[0.92] font-semibold tracking-normal sm:text-6xl">
                  Test it before you copy it.
                </h2>
              </div>

              <div
                class="hero-preview-rule flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between"
                :class="isDarkPreview ? 'border-white/10' : 'border-[#d3dee5]'"
              >
                <p
                  class="max-w-sm text-sm leading-6"
                  :class="isDarkPreview ? 'text-[#a7abb4]' : 'text-[#5d6670]'"
                >
                  Each component page includes a live preview, API details, install steps, credits,
                  and source code.
                </p>
                <NuxtLink
                  :to="componentPath"
                  class="hero-preview-cta inline-flex h-10 min-w-fit items-center justify-center rounded-full border px-4 text-sm font-medium whitespace-nowrap transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]"
                  :class="
                    isDarkPreview
                      ? 'border-white/10 bg-white/8 text-[#f5f1e8]'
                      : 'border-black/10 bg-[#111315] text-white'
                  "
                >
                  Browse components
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-beam::before {
  position: absolute;
  inset: 0;
  content: "";
  border-radius: inherit;
  padding: 1px;
  background: conic-gradient(
    from 180deg,
    transparent,
    rgba(214, 177, 106, 0.25),
    rgba(142, 168, 255, 0.18),
    transparent 42%
  );
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  opacity: 0.8;
}

.hero-preview-eyebrow {
  color: #947545;
}

:global(.dark) .hero-preview-eyebrow {
  color: #d6b16a;
}

@media (prefers-reduced-motion: no-preference) {
  .hero-beam::before {
    animation: hero-beam-spin 16s linear infinite;
  }
}

@keyframes hero-beam-spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
