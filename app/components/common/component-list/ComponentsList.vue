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
const showAd = useMediaQuery("(max-width: 1023px)");

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

function isNew(component: DocsEnCollectionItem) {
  return component.badge === "New";
}

function isUpdated(component: DocsEnCollectionItem) {
  return component.badge === "Updated";
}

function filterButtonClass(id: string) {
  if (selectedCategory.value === id) {
    return "bg-inverted text-inverted shadow-sm";
  }

  if (id === "new") {
    return "bg-success/5 text-highlighted ring-success/10 ring hover:bg-success/10";
  }

  if (id === "updated") {
    return "bg-info/5 text-highlighted ring-info/10 ring hover:bg-info/10";
  }

  return "bg-elevated/45 text-muted ring-default/70 hover:text-highlighted ring";
}

function filterCountClass(id: string) {
  if (selectedCategory.value === id) {
    return "bg-default/20";
  }

  if (id === "new") {
    return "bg-success/10 text-highlighted";
  }

  if (id === "updated") {
    return "bg-info/10 text-highlighted";
  }

  return "bg-default/60";
}

function cardShellClass(component: DocsEnCollectionItem) {
  if (isNew(component)) {
    return "bg-success/5 ring-success/10 hover:bg-success/5";
  }

  if (isUpdated(component)) {
    return "bg-info/5 ring-info/10 hover:bg-info/5";
  }

  return "bg-elevated/45 ring-default/70";
}

function cardGlowClass(component: DocsEnCollectionItem) {
  if (isNew(component)) {
    return "bg-success/10 opacity-0 group-hover:opacity-100";
  }

  if (isUpdated(component)) {
    return "bg-info/10 opacity-0 group-hover:opacity-100";
  }

  return "bg-primary/20 opacity-0 group-hover:opacity-100";
}

function badgeClass(badge?: string) {
  if (badge === "New") {
    return "bg-success/10 text-highlighted ring-success/15";
  }

  if (badge === "Updated") {
    return "bg-info/10 text-highlighted ring-info/15";
  }

  return "bg-elevated/70 text-toned ring-default/70";
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

const componentSections = computed(() => {
  if (selectedCategory.value !== "all") {
    return [
      {
        id: selectedCategory.value,
        label: activeCategory.value?.label ?? selectedCategory.value,
        count: filteredComponents.value.length,
        grouped: false,
        newCount: filteredComponents.value.filter(isNew).length,
        updatedCount: filteredComponents.value.filter(isUpdated).length,
        items: filteredComponents.value,
      },
    ];
  }

  const groups = new Map<string, DocsEnCollectionItem[]>();

  filteredComponents.value.forEach((component) => {
    groups.set(component.category, [...(groups.get(component.category) ?? []), component]);
  });

  return [...groups]
    .toSorted(([a], [b]) => a.localeCompare(b))
    .map(([id, items]) => ({
      id,
      label: id,
      count: items.length,
      grouped: true,
      newCount: items.filter(isNew).length,
      updatedCount: items.filter(isUpdated).length,
      items,
    }));
});
</script>

<template>
  <section class="relative w-full py-4 sm:py-6">
    <div class="relative space-y-8">
      <div
        class="bg-elevated/45 ring-default/70 rounded-4xl p-1.5 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.5)] ring backdrop-blur-xl dark:shadow-none"
      >
        <div
          class="bg-default/60 ring-default/70 grid gap-4 rounded-[calc(2rem-0.375rem)] p-8 ring backdrop-blur-lg max-md:p-4"
        >
          <div class="min-w-0 space-y-4">
            <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div class="flex items-center gap-3">
                <p class="text-toned font-mono text-xs tracking-[0.18em] uppercase">
                  {{ filteredComponents.length }} / {{ components.length }}
                </p>
                <p class="text-muted text-sm font-medium">
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
                class="bg-elevated/45 ring-default/70 flex h-11 w-full items-center gap-2 rounded-full px-3 ring transition-shadow duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--ui-primary)_16%,transparent)] md:max-w-sm"
              >
                <UIcon
                  name="tabler:search"
                  class="text-toned size-4 shrink-0"
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
                    base: 'h-full px-0 py-0 text-sm text-highlighted placeholder:text-muted',
                  }"
                />
                <button
                  v-if="search"
                  type="button"
                  aria-label="Clear search"
                  class="bg-elevated/70 text-highlighted grid size-7 place-items-center rounded-full transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.94]"
                  @click="search = ''"
                >
                  <UIcon
                    name="tabler:x"
                    class="size-4"
                  />
                </button>
              </div>
            </div>

            <div class="space-y-2 px-1 pb-4 max-md:pt-2">
              <div class="text-highlighted text-4xl font-medium tracking-[-0.04em]">
                Browse the components
              </div>
              <div class="text-muted">
                Open a component page to preview behavior, read API details, and copy source.
              </div>
            </div>

            <div class="flex flex-wrap gap-2.5 space-y-1">
              <button
                v-for="category in categoryOptions"
                :key="category.id"
                type="button"
                class="group inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium transition-[background-color,transform,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]"
                :class="filterButtonClass(category.id)"
                :aria-pressed="selectedCategory === category.id"
                @click="selectedCategory = category.id"
              >
                <span>{{ category.label }}</span>
                <span
                  class="rounded-full px-2 py-0.5 font-mono text-[0.65rem]"
                  :class="filterCountClass(category.id)"
                >
                  {{ category.count }}
                </span>
              </button>
            </div>

            <aside
              v-if="showAd"
              aria-label="Sponsored"
              class="bg-elevated/45 ring-default/70 relative flex min-h-24 items-center justify-center rounded-[1.5rem] p-3 ring"
            >
              <span
                class="bg-default/80 text-toned ring-default/70 absolute top-3 left-3 rounded-full px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.16em] uppercase ring"
              >
                Sponsor
              </span>
              <InspiraCarbonAds class="max-w-full overflow-hidden pt-5" />
            </aside>
          </div>
        </div>
      </div>

      <div
        v-if="!filteredComponents.length"
        class="bg-elevated/45 ring-default/70 rounded-4xl p-1.5 ring"
      >
        <div
          class="bg-default/70 ring-default/70 grid place-items-center rounded-[calc(2rem-0.375rem)] px-6 py-14 text-center ring"
        >
          <p class="text-highlighted text-2xl font-semibold tracking-[-0.04em]">No match found.</p>
          <p class="text-muted mt-3 max-w-md text-sm leading-6">
            Try another category or search term.
          </p>
        </div>
      </div>

      <div
        v-else
        class="space-y-20"
      >
        <section
          v-for="section in componentSections"
          :key="section.id"
          class="space-y-6"
        >
          <div
            v-if="section.grouped"
            class="flex flex-col gap-3 px-1 pt-2 md:flex-row md:items-center"
          >
            <div class="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
              <span class="bg-primary ring-primary/20 size-1.5 rounded-full ring-4" />
              <h2
                class="text-highlighted font-mono text-base font-medium tracking-[0.28em] uppercase"
              >
                {{ section.label }}
              </h2>
              <span
                class="bg-elevated/45 text-muted ring-default/70 rounded-full px-2.5 py-1 font-mono text-[0.65rem] ring"
              >
                {{ section.count }} components
              </span>
            </div>

            <div class="flex flex-wrap gap-2 md:order-last">
              <span
                v-if="section.newCount"
                class="bg-success/10 text-highlighted ring-success/15 rounded-full px-2.5 py-1 text-xs font-medium ring"
              >
                {{ section.newCount }} new
              </span>
              <span
                v-if="section.updatedCount"
                class="bg-info/10 text-highlighted ring-info/15 rounded-full px-2.5 py-1 text-xs font-medium ring"
              >
                {{ section.updatedCount }} updated
              </span>
            </div>

            <div class="flex items-center gap-2 md:flex-1">
              <span class="bg-primary/50 block h-px w-10 shrink-0" />
              <span class="bg-default/20 h-px min-w-6 flex-1" />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <NuxtLink
              v-for="component in section.items"
              :key="component.path"
              :to="component.path"
              class="group focus-visible:ring-primary/40 rounded-[1.5rem] p-1.5 ring backdrop-blur-lg transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none"
              :class="cardShellClass(component)"
            >
              <article
                class="bg-default/50 ring-default/70 group-hover:bg-default/60 relative flex h-[stretch] min-h-48 overflow-hidden rounded-[calc(1.5rem-1px)] p-4 ring backdrop-blur-lg transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                <div
                  class="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full blur-3xl transition-opacity duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  :class="cardGlowClass(component)"
                />

                <div class="relative flex w-full flex-col">
                  <div class="flex items-start justify-between gap-3">
                    <span
                      class="bg-elevated/45 text-toned ring-default/70 inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.16em] uppercase ring"
                    >
                      {{ component.category }}
                    </span>
                    <span
                      v-if="component.badge"
                      class="rounded-full px-2.5 py-1 text-xs font-medium ring"
                      :class="badgeClass(component.badge)"
                    >
                      {{ component.badge }}
                    </span>
                  </div>

                  <h3
                    class="text-highlighted mt-5 text-lg leading-6 font-semibold tracking-[-0.025em]"
                  >
                    {{ component.title }}
                  </h3>
                  <p class="text-muted mt-2 line-clamp-3 text-sm leading-6">
                    {{ component.description }}
                  </p>

                  <div class="mt-5 flex flex-wrap gap-2">
                    <span
                      v-for="tag in component.tags?.slice(0, 3)"
                      :key="component.path + tag"
                      class="bg-elevated/45 text-muted ring-default/70 rounded-full px-2 py-0.5 text-xs ring"
                    >
                      {{ tag }}
                    </span>
                    <span
                      v-if="component.tags && component.tags.length > 3"
                      class="bg-elevated/45 text-muted ring-default/70 rounded-full px-2 py-0.5 text-xs ring"
                    >
                      +{{ component.tags.length - 3 }}
                    </span>
                  </div>

                  <div class="mt-auto flex items-center justify-end pt-6">
                    <span
                      class="bg-elevated/70 text-highlighted ring-default/70 grid size-8 place-items-center rounded-full ring transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5"
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
        </section>
      </div>
    </div>
  </section>
</template>
