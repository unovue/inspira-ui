<script lang="ts" setup>
const { locale } = useDocusI18n();

const links = [
  {
    label: "Learn",
    title: "Learn how Inspira UI works.",
    description: "Review requirements, project structure, theming, and the copy-paste workflow.",
    to: `/${locale.value}/getting-started`,
  },
  {
    label: "Install",
    title: "Set up your project.",
    description: "Install dependencies and add the theme variables required by the components.",
    to: `/${locale.value}/getting-started/installation`,
  },
  {
    label: "Browse",
    title: "Browse the components.",
    description: "Open a component page to preview behavior, read API details, and copy source.",
    to: `/${locale.value}/components`,
  },
];
</script>

<template>
  <section
    id="quickLinks"
    class="relative mt-8 py-14 sm:py-20"
  >
    <div class="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
      <div>
        <p class="font-mono text-xs tracking-[0.22em] text-[#947545] uppercase dark:text-[#d6b16a]">
          Start here
        </p>
        <h2
          class="mt-5 max-w-xl text-4xl leading-[0.96] font-semibold tracking-normal text-balance sm:text-5xl"
        >
          From setup to first component.
        </h2>
        <p class="mt-5 max-w-lg text-base leading-7 text-[#5d6670] dark:text-[#a7abb4]">
          Use these links if you are new to Inspira UI. Setup, installation, and component browsing
          stay separate so the docs remain easy to scan.
        </p>
      </div>

      <div
        class="rounded-[3rem] bg-[#d5dfe6] p-2 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.62)] ring-1 ring-[#b9c7d0] dark:bg-white/[0.035] dark:shadow-none dark:ring-white/10"
      >
        <div
          class="divide-y divide-[#d8e1e7] overflow-hidden rounded-[calc(3rem-0.5rem)] bg-white ring-1 ring-[#c4d0d8] dark:divide-white/10 dark:bg-[#07080b]/80 dark:ring-white/10"
        >
          <NuxtLink
            v-for="(link, index) in links"
            :key="link.to"
            :to="link.to"
            class="group grid gap-5 p-6 transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#edf3f6] sm:grid-cols-[6rem_1fr_auto] sm:items-center dark:hover:bg-white/[0.035]"
          >
            <div
              class="font-mono text-xs tracking-[0.18em] text-[#947545] uppercase dark:text-[#d6b16a]"
            >
              0{{ index + 1 }} / {{ link.label }}
            </div>
            <div>
              <h3 class="text-xl font-semibold tracking-normal">
                {{ link.title }}
              </h3>
              <p class="mt-2 max-w-2xl text-sm leading-6 text-[#5d6670] dark:text-[#a7abb4]">
                {{ link.description }}
              </p>
            </div>
            <span
              class="grid size-10 place-items-center rounded-full bg-[#e6edf1] text-[#111315] ring-1 ring-[#c7d3db] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1 dark:bg-white/[0.06] dark:text-[#f5f1e8] dark:ring-white/10"
            >
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4"
              />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
