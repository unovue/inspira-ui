<template>
  <section class="mx-auto flex max-w-7xl flex-col items-center justify-center">
    <div class="mb-6 py-12 text-5xl font-semibold">Features</div>
    <span class="flex flex-row flex-wrap items-center justify-center gap-6">
      <ClientOnly>
        <CardSpotlight
          v-for="feature in features"
          :key="feature.title"
          class="relative flex h-screen max-h-64 max-w-96 flex-col items-start justify-start overflow-hidden rounded-2xl border border-zinc-200 px-6 py-8 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50"
          :gradient-color="isDark ? '#262626' : '#E9E9E9'"
        >
          <SmartIcon
            :name="feature.icon || 'lucide:rocket'"
            class="mb-2"
            :size="22"
          />
          <h3 class="relative z-50 mb-4 text-xl font-bold dark:text-white">
            {{ feature.title }}
          </h3>

          <p class="relative z-50 mb-4 text-base font-normal text-zinc-500">
            {{ feature.description }}
          </p>

          <Meteors />
        </CardSpotlight>
      </ClientOnly>
    </span>
  </section>
</template>

<script lang="ts" setup>
const isDark = computed(() => useColorMode().value == "dark");

const features = [
  {
    title: "Vue and Nuxt Native",
    description:
      "Build apps that integrate seamlessly with Vue.js and Nuxt.js, leveraging their full potential for a modern development experience.",
    icon: "lucide:code-2",
  },
  {
    title: "Customizable Components",
    description:
      "Every component is designed to be flexible and adaptable to your design system, allowing complete customization with ease.",
    icon: "lucide:sliders",
  },
  {
    title: "Tailwind CSS Support",
    description:
      "Utility-first styling made easy with built-in Tailwind CSS support, speeding up your development process.",
    icon: "lucide:wind",
  },
  {
    title: "Dark Mode Ready",
    description:
      "Enable beautiful dark mode designs effortlessly, with fully adaptive components that respond to user preferences.",
    icon: "lucide:moon",
  },
  {
    title: "Performant and Lightweight",
    description:
      "Optimized for speed, Inspira UI’s components ensure fast loading times and a smooth user experience across all devices.",
    icon: "lucide:zap",
  },
  {
    title: "Built-in Motion and Animations",
    description:
      "Add life to your UI with smooth transitions powered by motion-v, no need for external animation libraries.",
    icon: "lucide:activity",
  },
];
</script>
