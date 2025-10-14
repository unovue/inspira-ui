<script setup lang="ts">
const appConfig = useAppConfig();
const site = useSiteConfig();

const { localePath, isEnabled, locales } = useDocusI18n();

const links = computed(() =>
  appConfig.github && appConfig.github.url
    ? [
        {
          icon: "i-simple-icons-github",
          to: appConfig.github.url,
          target: "_blank",
          "aria-label": "GitHub",
        },
      ]
    : []
);
</script>

<template>
  <UHeader
    :ui="{ center: 'flex-1' }"
    :to="localePath('/')"
    :title="appConfig.header?.title || site.name"
    mode="drawer"
  >
    <AppHeaderCenter />

    <template #title>
      <AppHeaderLogo class="h-6 w-auto shrink-0" />
    </template>

    <template #right>
      <AppHeaderCTA />

      <template v-if="isEnabled && locales.length > 1">
        <ClientOnly>
          <LanguageSelect />

          <template #fallback>
            <div
              class="h-8 w-8 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-md"
            />
          </template>
        </ClientOnly>

        <USeparator orientation="vertical" class="h-8" />
      </template>

      <UContentSearchButton class="lg:hidden" />

      <ClientOnly>
        <UColorModeButton />

        <template #fallback>
          <div
            class="h-8 w-8 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-md"
          />
        </template>
      </ClientOnly>

      <template v-if="links?.length">
        <UButton
          v-for="(link, index) of links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #toggle="{ open, toggle }">
      <IconMenuToggle :open="open" class="lg:hidden" @click="toggle" />
    </template>

    <template #body>
      <AppHeaderBody />
    </template>
  </UHeader>
</template>
