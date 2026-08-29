<script setup lang="ts">
const appConfig = useAppConfig();
const { localePath } = useDocusI18n();

const year = new Date().getFullYear();

const documentationLinks = computed(() => [
  { label: "Getting Started", to: localePath("/getting-started") },
  { label: "Components", to: localePath("/components") },
  { label: "Changelog", to: localePath("/changelogs") },
]);

const ecosystemLinks = [
  { label: "Inspira UI Pro", to: "https://pro.inspira-ui.com" },
  { label: "Akaza UI", to: "https://akaza-ui.com" },
  { label: "Instruo", to: "https://instruo.org" },
];

const socialLinks = computed(() =>
  [
    ...Object.entries(appConfig.socials || {}).map(([key, url]) => ({
      icon: `i-simple-icons-${key}`,
      to: url as string,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `${key} social link`,
    })),
    appConfig.github?.url && {
      icon: "i-simple-icons-github",
      to: appConfig.github.url,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "GitHub repository",
    },
  ].filter(Boolean),
);
</script>

<template>
  <footer class="border-default/70 bg-default border-t">
    <UContainer>
      <div class="grid gap-12 py-12 sm:py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div class="lg:col-span-5">
          <NuxtLink
            :to="localePath('/')"
            class="focus-visible:ring-primary inline-flex min-h-11 items-center gap-3 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="Inspira UI home"
          >
            <AppHeaderLogo class="h-6 w-auto shrink-0" />
            <span class="text-highlighted text-base font-semibold tracking-[-0.02em]">
              Inspira UI
            </span>
          </NuxtLink>
          <p class="text-muted mt-4 max-w-sm text-sm leading-6 text-pretty">
            Open-source animated components for expressive Vue and Nuxt interfaces.
          </p>
        </div>

        <nav
          class="grid grid-cols-2 gap-8 sm:max-w-xl lg:col-span-5 lg:col-start-7"
          aria-label="Footer navigation"
        >
          <div>
            <h2 class="text-highlighted text-sm font-medium">Documentation</h2>
            <ul class="border-default/70 mt-4 border-t">
              <li
                v-for="link in documentationLinks"
                :key="link.label"
                class="border-default/70 border-b"
              >
                <NuxtLink
                  :to="link.to"
                  class="group text-muted hover:text-highlighted focus-visible:ring-primary flex min-h-11 items-center justify-between gap-3 text-sm transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset motion-reduce:transition-none"
                >
                  {{ link.label }}
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 motion-reduce:transition-none"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-highlighted text-sm font-medium">Ecosystem</h2>
            <ul class="border-default/70 mt-4 border-t">
              <li
                v-for="link in ecosystemLinks"
                :key="link.label"
                class="border-default/70 border-b"
              >
                <NuxtLink
                  :to="link.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group text-muted hover:text-highlighted focus-visible:ring-primary flex min-h-11 items-center justify-between gap-3 text-sm transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset motion-reduce:transition-none"
                >
                  {{ link.label }}
                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        class="border-default/70 text-dimmed flex flex-col gap-4 border-t py-5 text-xs sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span>Copyright © {{ year }}</span>
          <span>Open source. Community built. Vue first.</span>
        </div>

        <div class="flex items-center gap-px">
          <UButton
            v-for="(link, index) in socialLinks"
            :key="index"
            v-bind="link"
            color="neutral"
            variant="ghost"
            size="sm"
            class="hover:bg-elevated/60 rounded-none transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.94] motion-reduce:transition-none"
            :ui="{ leadingIcon: 'size-4' }"
          />
          <ClientOnly>
            <UColorModeButton
              color="neutral"
              variant="ghost"
              size="sm"
              class="hover:bg-elevated/60 rounded-none transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.94] motion-reduce:transition-none"
            />
            <template #fallback>
              <div class="bg-elevated/40 size-8" />
            </template>
          </ClientOnly>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
