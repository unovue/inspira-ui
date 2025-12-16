<script lang="ts" setup>
import type { DocsEnCollectionItem } from "@nuxt/content";

interface Props {
  routePath?: string;
}

const { routePath = "/components" } = defineProps<Props>();
const { locale } = useDocusI18n();

const { data: components } = await useAsyncData("tools", () => {
  return queryCollection(`docs_${locale.value}` as any).all() as Promise<DocsEnCollectionItem[]>;
});

const path = `/${locale.value}${routePath}`;

components.value = components.value?.filter((c) => c.path.startsWith(path) && c.path !== path);

const selectedCategory = ref<string>("all");

// Compute unique categories
const categories = computed(() => {
  if (!components.value) return ["all", "new", "updated"];

  const uniqueCategories = new Set(components.value.map((component) => component.category));
  return ["all", "new", "updated", ...Array.from(uniqueCategories)];
});

// Filter tools by selected category
const filteredComponents = computed(() => {
  if (!components.value) return [];

  let filtered = components.value;

  if (selectedCategory.value === "new") {
    filtered = filtered.filter((component) => component.badge === "New");
  } else if (selectedCategory.value === "updated") {
    filtered = filtered.filter((component) => component.badge === "Updated");
  } else if (selectedCategory.value !== "all") {
    filtered = filtered.filter((component) => component.category === selectedCategory.value);
  }

  // ✅ Sort alphabetically by title
  return filtered.slice().sort((a, b) => a.title.localeCompare(b.title));
});

function getCategoryColor(category: string) {
  if (category.toLowerCase() === "new") {
    return "success";
  }

  if (category.toLowerCase() === "updated") {
    return "warning";
  }

  return "neutral";
}
</script>

<template>
  <div class="relative flex w-full flex-col items-center justify-center gap-8 p-8 max-lg:p-6">
    <!-- Category Filter -->
    <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
      <UButton
        v-for="category in categories"
        :key="category"
        :label="category"
        :active="selectedCategory === category"
        active-variant="solid"
        active-color="primary"
        variant="subtle"
        :color="getCategoryColor(category)"
        class="rounded-full px-4 py-3 lowercase"
        size="lg"
        :ui="{
          base: [
            selectedCategory !== category && 'bg-current/2',
            selectedCategory === category &&
              selectedCategory.toLowerCase() === 'new' &&
              'bg-success hover:bg-success/80',
            selectedCategory === category &&
              selectedCategory.toLowerCase() === 'updated' &&
              'bg-warning hover:bg-warning/80',
            'backdrop-blur-sm',
          ],
        }"
        @click="selectedCategory = category"
      />
    </div>

    <div
      v-if="filteredComponents.length"
      class="text-muted mt-4 w-full text-right"
    >
      <span class="text-default text-lg font-bold">{{ filteredComponents.length }}</span> components
      in
      <span class="text-default text-lg font-bold lowercase">{{ selectedCategory }}</span> category.
    </div>

    <div
      v-else
      class="text-default mt-16 flex w-full flex-col gap-1 text-center text-lg"
    >
      <span class="text-xl font-medium">Oops!</span>
      <span>
        No component available in <span class="font-semibold">{{ selectedCategory }}</span> category
        as of now.
      </span>
    </div>

    <div class="mt-2 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 md:gap-6">
      <UPageCard
        v-for="component in filteredComponents"
        :key="component.id"
        :title="component.title"
        :description="component.description"
        class="bg-default/15 hover:bg-default/25 relative h-44 w-full cursor-pointer hover:active:scale-[98%] md:h-56"
        :ui="{
          title: 'text-lg',
          description: ' text-ellipsis line-clamp-2',
        }"
        :to="component.path"
      >
        <UBadge
          v-if="component.badge"
          class="absolute top-6 right-6"
          variant="subtle"
          :color="component.badge === 'New' ? 'success' : 'warning'"
          :label="component.badge"
        />
        <div class="flex flex-wrap items-center gap-2">
          <UBadge
            v-for="tag in component.tags"
            :key="component.id + tag"
            :label="tag"
            variant="soft"
            class="font-normal"
          />
        </div>
      </UPageCard>
    </div>
  </div>
</template>
