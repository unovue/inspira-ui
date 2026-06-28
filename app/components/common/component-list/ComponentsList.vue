<script lang="ts" setup>
import type { DocsEnCollectionItem } from "@nuxt/content";
import InspiraCarbonAds from "../carbon-ads/InspiraCarbonAds.vue";

interface Props {
  routePath?: string;
}

const { routePath = "/components" } = defineProps<Props>();
const { locale } = useDocusI18n();

const selectedCategory = ref("all");
const search = ref("");

const { data: collection } = await useAsyncData("component_collection", () => {
  return queryCollection(`docs_${locale.value}` as any).all() as Promise<DocsEnCollectionItem[]>;
});

const path = computed(() => `/${locale.value}${routePath}`);

const components = computed(() => {
  return (collection.value ?? []).filter((component) => {
    return component.path.startsWith(path.value) && component.path !== path.value;
  });
});

const newCount = computed(() => {
  return components.value.filter((component) => component.badge === "New").length;
});

const updatedCount = computed(() => {
  return components.value.filter((component) => component.badge === "Updated").length;
});

const categoryOptions = computed(() => {
  const counts = new Map<string, number>();

  components.value.forEach((component) => {
    counts.set(component.category, (counts.get(component.category) ?? 0) + 1);
  });

  const categories = [...counts]
    .toSorted(([a], [b]) => a.localeCompare(b))
    .map(([id, count]) => ({ id, label: id, count }));

  return [
    { id: "all", label: "All", count: components.value.length },
    { id: "new", label: "New", count: newCount.value },
    { id: "updated", label: "Updated", count: updatedCount.value },
    ...categories,
  ].filter((category) => category.id === "all" || category.count > 0);
});

const activeCategory = computed(() => {
  return categoryOptions.value.find((category) => category.id === selectedCategory.value);
});

function badgePriority(badge?: string) {
  if (badge === "New") return 0;
  if (badge === "Updated") return 1;
  return 2;
}

const filteredComponents = computed(() => {
  const query = search.value.trim().toLowerCase();

  return components.value
    .filter((component) => {
      if (selectedCategory.value === "new") return component.badge === "New";
      if (selectedCategory.value === "updated") return component.badge === "Updated";
      if (selectedCategory.value !== "all") return component.category === selectedCategory.value;
      return true;
    })
    .filter((component) => {
      if (!query) return true;

      return [
        component.title,
        component.description,
        component.category,
        component.badge,
        ...(component.tags ?? []),
      ]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(query));
    })
    .toSorted(
      (a, b) => badgePriority(a.badge) - badgePriority(b.badge) || a.title.localeCompare(b.title),
    );
});
</script>

<template>
  <section class="relative w-full py-4 sm:py-6">
    <div
      class="pointer-events-none absolute -top-12 left-1/2 h-56 w-screen -translate-x-1/2 bg-radial from-[#d9c49b]/16 via-transparent to-transparent blur-3xl dark:from-[#d6b16a]/8"
    />

    <div class="relative space-y-5">
      <div
        class="rounded-4xl bg-[#d5dfe6] p-1.5 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.5)] ring-1 ring-[#b9c7d0] dark:bg-white/[0.035] dark:shadow-none dark:ring-white/10"
      >
        <div
          class="grid gap-4 rounded-[calc(2rem-0.375rem)] bg-white p-4 ring-1 ring-[#c4d0d8] lg:grid-cols-[minmax(0,1fr)_18rem] dark:bg-[#090a0d]/90 dark:ring-white/10"
        >
          <div class="min-w-0 space-y-4">
            <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div class="flex items-center gap-3">
                <p
                  class="font-mono text-xs tracking-[0.18em] text-[#947545] uppercase dark:text-[#d6b16a]"
                >
                  {{ filteredComponents.length }} / {{ components.length }}
                </p>
                <p class="text-sm font-medium text-[#5d6670] dark:text-[#c4c8d0]">
                  {{ activeCategory?.label ?? "All" }}
                </p>
              </div>

              <label
                for="component-search"
                class="sr-only"
              >
                Search components
              </label>
              <div
                class="flex h-11 w-full items-center gap-2 rounded-full bg-[#f7fafb] px-3 ring-1 ring-[#c7d3db] transition-shadow duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus-within:shadow-[0_0_0_4px_rgba(148,117,69,0.12)] md:max-w-sm dark:bg-white/[0.045] dark:ring-white/10 dark:focus-within:shadow-[0_0_0_4px_rgba(214,177,106,0.12)]"
              >
                <UIcon
                  name="tabler:search"
                  class="size-4 shrink-0 text-[#947545] dark:text-[#d6b16a]"
                />
                <UInput
                  id="component-search"
                  v-model="search"
                  type="search"
                  autocomplete="off"
                  aria-label="Search components"
                  placeholder="Search"
                  variant="none"
                  class="min-w-0 flex-1"
                  :ui="{
                    base: 'h-full px-0 py-0 text-sm text-[#111315] placeholder:text-[#6b737d] dark:text-[#f5f1e8] dark:placeholder:text-[#9da3ad]',
                  }"
                />
                <button
                  v-if="search"
                  type="button"
                  aria-label="Clear search"
                  class="grid size-7 place-items-center rounded-full bg-[#e6edf1] text-[#111315] transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.94] dark:bg-white/10 dark:text-[#f5f1e8]"
                  @click="search = ''"
                >
                  <UIcon
                    name="tabler:x"
                    class="size-4"
                  />
                </button>
              </div>
            </div>

            <div class="px-1 pt-2 pb-4 text-4xl font-medium">Browse the components</div>

            <div class="flex flex-wrap gap-2.5">
              <button
                v-for="category in categoryOptions"
                :key="category.id"
                type="button"
                class="group inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium transition-[background-color,transform,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]"
                :class="
                  selectedCategory === category.id
                    ? 'bg-[#111315] text-white dark:bg-[#f5f1e8] dark:text-[#050506]'
                    : 'bg-[#f7fafb] text-[#5d6670] ring-1 ring-[#d8e1e7] hover:text-[#111315] dark:bg-white/4.5 dark:text-[#c4c8d0] dark:ring-white/10 dark:hover:text-[#f5f1e8]'
                "
                :aria-pressed="selectedCategory === category.id"
                @click="selectedCategory = category.id"
              >
                <span>{{ category.label }}</span>
                <span
                  class="rounded-full px-2 py-0.5 font-mono text-[0.65rem]"
                  :class="
                    selectedCategory === category.id
                      ? 'bg-white/12 dark:bg-black/10'
                      : 'bg-[#e6edf1] dark:bg-white/8'
                  "
                >
                  {{ category.count }}
                </span>
              </button>
            </div>
          </div>

          <aside
            aria-label="Sponsored"
            class="relative flex min-h-24 items-center justify-center rounded-[1.5rem] bg-[#f7fafb] p-3 ring-1 ring-[#d8e1e7] dark:bg-white/[0.035] dark:ring-white/10"
          >
            <span
              class="absolute top-3 left-3 rounded-full bg-white px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.16em] text-[#947545] uppercase ring-1 ring-[#d8e1e7] dark:bg-[#111216] dark:text-[#d6b16a] dark:ring-white/10"
            >
              Sponsor
            </span>
            <InspiraCarbonAds class="max-w-full overflow-hidden pt-5" />
          </aside>
        </div>
      </div>

      <div
        v-if="!filteredComponents.length"
        class="rounded-4xl bg-[#d5dfe6] p-1.5 ring-1 ring-[#b9c7d0] dark:bg-white/[0.035] dark:ring-white/10"
      >
        <div
          class="grid place-items-center rounded-[calc(2rem-0.375rem)] bg-white px-6 py-14 text-center ring-1 ring-[#c4d0d8] dark:bg-[#090a0d]/90 dark:ring-white/10"
        >
          <p class="text-2xl font-semibold tracking-[-0.04em]">No match found.</p>
          <p class="mt-3 max-w-md text-sm leading-6 text-[#5d6670] dark:text-[#c4c8d0]">
            Try another category or search term.
          </p>
        </div>
      </div>

      <div
        v-else
        class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        <NuxtLink
          v-for="component in filteredComponents"
          :key="component.path"
          :to="component.path"
          class="group rounded-[1.5rem] bg-[#d5dfe6] p-1.5 ring-1 ring-[#b9c7d0] backdrop-blur-lg transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 active:scale-[0.99] dark:bg-white/4.5 dark:ring-white/10"
        >
          <article
            class="relative flex h-[stretch] min-h-48 overflow-hidden rounded-[calc(1.5rem-1px)] bg-white/80 p-4 ring-1 ring-[#d4dee5] backdrop-blur-lg transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-[#fbfcfd] dark:bg-[#101116] dark:ring-white/10 dark:group-hover:bg-[#13151b]"
          >
            <div
              class="pointer-events-none absolute -top-16 -right-16 size-36 rounded-full bg-[#d9c49b]/12 opacity-0 blur-3xl transition-opacity duration-200 group-hover:opacity-100 dark:bg-[#d6b16a]/8"
            />

            <div class="relative flex w-full flex-col">
              <div class="flex items-start justify-between gap-3">
                <span
                  class="inline-flex items-center rounded-full bg-[#f7fafb] px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.16em] text-[#947545] uppercase ring-1 ring-[#d8e1e7] dark:bg-white/5.5 dark:text-[#d6b16a] dark:ring-white/10"
                >
                  {{ component.category }}
                </span>
                <span
                  v-if="component.badge"
                  class="rounded-full px-2.5 py-1 text-xs font-medium"
                  :class="
                    component.badge === 'New'
                      ? 'bg-[#111315] text-white dark:bg-[#f5f1e8] dark:text-[#050506]'
                      : 'bg-[#9ed99b]/28 text-[#45944c] dark:bg-[#6cd66a]/12 dark:text-[#6ad673]'
                  "
                >
                  {{ component.badge }}
                </span>
              </div>

              <h3
                class="mt-5 text-lg leading-6 font-semibold tracking-[-0.025em] text-[#111315] dark:text-[#f5f1e8]"
              >
                {{ component.title }}
              </h3>
              <p class="mt-2 line-clamp-3 text-sm leading-6 text-[#4f5964] dark:text-[#c4c8d0]">
                {{ component.description }}
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="tag in component.tags?.slice(0, 3)"
                  :key="component.path + tag"
                  class="rounded-full bg-[#f7fafb] px-2 py-0.5 text-xs text-[#5d6670] ring-1 ring-[#d8e1e7] dark:bg-white/[0.055] dark:text-[#b7bcc6] dark:ring-white/10"
                >
                  {{ tag }}
                </span>
                <span
                  v-if="component.tags && component.tags.length > 3"
                  class="rounded-full bg-[#f7fafb] px-2 py-0.5 text-xs text-[#5d6670] ring-1 ring-[#d8e1e7] dark:bg-white/[0.055] dark:text-[#b7bcc6] dark:ring-white/10"
                >
                  +{{ component.tags.length - 3 }}
                </span>
              </div>

              <div class="mt-auto flex items-center justify-end pt-6">
                <span
                  class="grid size-8 place-items-center rounded-full bg-[#e6edf1] text-[#111315] ring-1 ring-[#c7d3db] transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 dark:bg-white/[0.075] dark:text-[#f5f1e8] dark:ring-white/10"
                >
                  <UIcon
                    name="tabler:arrow-up-right"
                    class="size-4"
                  />
                </span>
              </div>
            </div>
          </article>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
