<script lang="ts" setup>
import { Motion } from "motion-v";

const { locale } = useDocusI18n();

const componentPath = computed(() => `/${locale.value}/components`);
const installationPath = computed(() => `/${locale.value}/getting-started/installation`);
const preferredMotion = usePreferredReducedMotion();
const reduceMotion = computed(() => preferredMotion.value === "reduce");

const enter = (delay = 0, x = 0, y = 20) => ({
  initial: reduceMotion.value ? false : { opacity: 0, x, y },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: reduceMotion.value
    ? { duration: 0 }
    : { duration: 0.78, delay, ease: [0.16, 1, 0.3, 1] },
});

const collections = ["Backgrounds", "Cards", "Interactions", "Text effects", "Visualizations"];
</script>

<template>
  <section class="border-default/70 relative border-b lg:mt-48 lg:mb-36">
    <div class="grid gap-12 lg:mt-4 lg:grid-cols-12 lg:items-end lg:gap-8">
      <Motion
        as="div"
        class="lg:col-span-9"
        v-bind="enter(0)"
      >
        <h1
          class="text-highlighted max-w-6xl text-5xl leading-[0.92] font-semibold tracking-[-0.06em] text-balance sm:text-7xl lg:text-8xl"
        >
          <div class="pb-4">Inspira UI.</div>
          <span class="text-toned block">Animated components for Vue and Nuxt.</span>
        </h1>
      </Motion>

      <Motion
        as="div"
        class="border-default/70 grid grid-cols-2 border-t pt-6 lg:col-span-3 lg:border-t-0 lg:border-l lg:pt-0 lg:pb-2 lg:pl-8"
        v-bind="enter(0.1, 18, 0)"
      >
        <div class="pr-5">
          <p
            class="text-highlighted text-5xl leading-none font-semibold tracking-[-0.06em] tabular-nums xl:text-6xl"
          >
            140+
          </p>
          <p class="text-muted mt-3 text-xs leading-5">Components</p>
        </div>

        <NuxtLink
          to="https://github.com/unovue/inspira-ui"
          target="_blank"
          rel="noopener noreferrer"
          class="group border-default/70 focus-visible:ring-primary border-l pl-5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          aria-label="Inspira UI on GitHub, 4.9 thousand stars"
        >
          <p
            class="text-highlighted text-5xl leading-none font-semibold tracking-[-0.06em] tabular-nums transition-opacity duration-300 group-hover:opacity-75 motion-reduce:transition-none xl:text-6xl"
          >
            4.9k
          </p>
          <p class="text-muted mt-3 flex items-center gap-1.5 text-xs leading-5">
            <UIcon
              name="i-lucide-star"
              class="size-3.5"
            />
            GitHub stars
          </p>
        </NuxtLink>
      </Motion>
    </div>

    <div class="border-default/70 mt-12 grid border-t lg:mt-16 lg:grid-cols-12">
      <Motion
        as="div"
        class="py-10 lg:col-span-5 lg:py-12 lg:pr-12"
        v-bind="enter(0.18, 0, 16)"
      >
        <p class="text-muted max-w-xl text-base leading-7 text-pretty sm:text-lg sm:leading-8">
          Choose from backgrounds, interactions, text effects, cards, and visualizations. Preview
          the motion, adjust the props, and copy the source.
        </p>

        <div class="mt-8 flex flex-col gap-px sm:flex-row">
          <NuxtLink
            :to="componentPath"
            class="group bg-primary text-inverted focus-visible:ring-primary inline-flex min-h-12 items-center justify-between gap-8 px-5 text-sm font-medium transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] motion-reduce:transition-none sm:min-w-52"
          >
            Browse components
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </NuxtLink>

          <NuxtLink
            :to="installationPath"
            class="group border-default/70 bg-default text-highlighted hover:bg-elevated/50 focus-visible:ring-primary inline-flex min-h-12 items-center justify-between gap-8 border px-5 text-sm font-medium transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] motion-reduce:transition-none sm:min-w-52"
          >
            Installation guide
            <UIcon
              name="i-lucide-book-open"
              class="size-4 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </NuxtLink>
        </div>
      </Motion>

      <Motion
        as="div"
        class="border-default/70 border-t py-10 lg:col-span-6 lg:col-start-7 lg:border-t-0 lg:border-l lg:py-12 lg:pl-12"
        v-bind="enter(0.26, 18, 0)"
      >
        <p class="text-highlighted max-w-lg text-2xl leading-8 font-medium tracking-[-0.03em]">
          From a quiet hover detail to a full WebGL scene.
        </p>
        <ul class="mt-7 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
          <li
            v-for="collection in collections"
            :key="collection"
            class="border-default/70 text-muted border-l pl-3 text-sm leading-5"
          >
            {{ collection }}
          </li>
        </ul>
      </Motion>
    </div>
  </section>
</template>
