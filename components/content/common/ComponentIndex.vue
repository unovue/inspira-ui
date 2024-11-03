<template>
  <div class="flex w-full flex-col flex-wrap gap-4 py-8">
    <ContentList
      path="components"
      :query="query"
    >
      <template #default="{ list }">
        <ClientOnly>
          <CardSpotlight
            v-for="(item, index) in list"
            :key="`componentIndex_${index}`"
            class="relative h-screen max-h-14 max-w-lg cursor-pointer flex-row items-center justify-between gap-4 overflow-hidden rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
            :gradient-color="gradientColor"
            slot-class="w-full"
          >
            <NuxtLink :to="item._path">
              <div class="flex w-full flex-row items-center justify-center">
                <div class="mr-2 text-right">{{ index + 1 }}.</div>
                <div class="mr-2 font-heading">{{ item.title }}</div>
                <Badge
                  v-for="badge in item.navBadges"
                  :key="`${badge}_${item.title}_${index}`"
                  :type="badge.type"
                >
                  {{ badge.value }}
                </Badge>
                <span class="flex flex-1"></span>
                <span> View → </span>
              </div>
            </NuxtLink>
          </CardSpotlight>
        </ClientOnly>
      </template>
      <template #not-found>
        <p>No components found.</p>
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";

const isDark = computed(() => useColorMode().value == "dark");
const gradientColor = computed(() => (isDark.value ? "#363636" : "#C9C9C9"));

const query: QueryBuilderParams = {
  path: "/components",
  where: [
    {
      _extension: "md",
      title: {
        $ne: "Component Index",
      },
    },
  ],
};
</script>
