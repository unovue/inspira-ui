<template>
  <div class="flex flex-col w-full gap-4 flex-wrap py-8">
    <ContentList
      path="components"
      :query="query"
    >
      <template #default="{ list }">
        <ClientOnly>
          <CardSpotlight
            v-for="(item, index) in list"
            class="max-w-[32rem] relative border-zinc-200 dark:bg-zinc-900/50 border dark:border-zinc-800 p-6 max-h-14 h-screen overflow-hidden rounded-2xl flex-row justify-between items-center gap-4 cursor-pointer"
            :gradientColor="gradientColor"
            slot-class="w-full"
          >
            <NuxtLink :to="item._path">
              <div class="flex flex-row w-full items-center justify-center">
                <div class="text-right mr-2">{{ index + 1 }}.</div>
                <div class="font-heading mr-2">{{ item.title }}</div>
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
