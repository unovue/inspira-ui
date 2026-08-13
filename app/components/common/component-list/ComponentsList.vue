<script lang="ts" setup>
import type { DocsEnCollectionItem } from "@nuxt/content";
import { motion, MotionConfig } from "motion-v";
import InspiraCarbonAds from "../carbon-ads/InspiraCarbonAds.vue";

interface Props {
  routePath?: string;
}

const { routePath = "/components" } = defineProps<Props>();
const { locale } = useDocusI18n();

const selectedCategory = ref("all");
const search = ref("");
const showAd = useMediaQuery("(max-width: 1023px)");
const preferredMotion = usePreferredReducedMotion();
const filterIndicatorId = useId();
const reduceMotion = computed(() => preferredMotion.value === "reduce");
const filterTransition = computed(() =>
  reduceMotion.value
    ? { duration: 0 }
    : {
        type: "spring",
        stiffness: 520,
        damping: 42,
        mass: 0.58,
      },
);

const { data: collection } = await useAsyncData(`component_collection_${locale.value}`, () => {
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
    return "text-inverted";
  }

  if (id === "new") {
    return "border-success/25 bg-success/5 text-success hover:bg-success/10";
  }

  if (id === "updated") {
    return "border-warning/25 bg-warning/5 text-warning hover:bg-warning/10";
  }

  return "border-default/70 bg-elevated/20 text-muted hover:bg-elevated/55 hover:text-highlighted";
}

function filterIndicatorClass(id: string) {
  if (id === "new") {
    return "bg-success";
  }

  if (id === "updated") {
    return "bg-warning";
  }

  return "bg-inverted";
}

function filterCountClass(id: string) {
  if (selectedCategory.value === id) {
    return "border-inverted/25 text-inverted";
  }

  if (id === "new") {
    return "border-success/25 text-success";
  }

  if (id === "updated") {
    return "border-warning/25 text-warning";
  }

  return "border-default/70 text-dimmed";
}

function cardShellClass(component: DocsEnCollectionItem) {
  if (isNew(component)) {
    return "bg-success/[0.025] hover:bg-success/[0.06]";
  }

  if (isUpdated(component)) {
    return "bg-warning/[0.025] hover:bg-warning/[0.06]";
  }

  return "bg-default hover:bg-elevated/45";
}

function badgeClass(badge?: string) {
  if (badge === "New") {
    return "border-success/30 bg-success/8 text-success";
  }

  if (badge === "Updated") {
    return "border-warning/30 bg-warning/8 text-warning";
  }

  return "border-default/70 bg-elevated/40 text-toned";
}

function categoryPillClass(component: DocsEnCollectionItem) {
  if (isNew(component)) {
    return "border-success/25 bg-success/5 text-success";
  }

  if (isUpdated(component)) {
    return "border-warning/25 bg-warning/5 text-warning";
  }

  return "border-default/70 bg-elevated/30 text-toned";
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
  <MotionConfig :transition="filterTransition">
    <section class="relative w-full py-6 sm:py-10">
      <div class="relative space-y-14">
        <div class="border-default/70 bg-elevated/15 border">
          <div class="grid gap-8 p-5 sm:p-7 xl:grid-cols-[minmax(0,1fr)_22rem]">
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-3">
                <span
                  class="text-toned font-mono text-[0.65rem] tracking-[0.2em] uppercase tabular-nums"
                >
                  {{ filteredComponents.length }}
                  {{ filteredComponents.length === 1 ? "component" : "components" }}
                </span>
                <span class="bg-default/40 h-px w-8" />
                <span class="text-muted text-sm font-medium">
                  {{ activeCategory?.label ?? "All" }}
                </span>
              </div>

              <h2
                class="text-highlighted mt-5 text-4xl leading-none font-medium tracking-[-0.05em] sm:text-5xl"
              >
                Browse components
              </h2>
              <p class="text-muted mt-3 max-w-2xl text-sm leading-6">
                Find a component, inspect the preview and API, then copy the source.
              </p>
            </div>

            <div class="space-y-3">
              <label
                for="component-search"
                class="sr-only"
              >
                Search components
              </label>
              <div
                class="border-default/70 bg-default/70 focus-within:border-primary/50 flex h-11 w-full items-center gap-2 border px-3 transition-colors duration-200 motion-reduce:transition-none"
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
                  placeholder="Search components"
                  variant="none"
                  class="min-w-0 flex-1"
                  :ui="{
                    base: 'h-full rounded-none px-0 py-0 text-sm text-highlighted placeholder:text-muted',
                  }"
                />
                <button
                  v-if="search"
                  type="button"
                  aria-label="Clear search"
                  class="border-default/70 text-muted hover:bg-elevated/60 hover:text-highlighted -my-px -me-px grid size-11 shrink-0 place-items-center border transition-colors duration-150 motion-reduce:transition-none"
                  @click="search = ''"
                >
                  <UIcon
                    name="tabler:x"
                    class="size-4"
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            class="border-default/70 flex flex-wrap gap-1.5 overflow-x-auto border-t p-5 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:px-7 [&::-webkit-scrollbar]:hidden"
          >
            <button
              v-for="category in categoryOptions"
              :key="category.id"
              type="button"
              class="relative isolate inline-flex h-9 min-w-fit items-center gap-2 overflow-hidden rounded-none border px-3 text-sm font-medium transition-colors duration-200 motion-reduce:transition-none"
              :class="filterButtonClass(category.id)"
              :aria-pressed="selectedCategory === category.id"
              @click="selectedCategory = category.id"
            >
              <motion.span
                v-if="selectedCategory === category.id"
                :layout-id="`${filterIndicatorId}-filter`"
                class="pointer-events-none absolute inset-0"
                :class="filterIndicatorClass(category.id)"
                :transition="filterTransition"
              />
              <span class="relative">{{ category.label }}</span>
              <span
                class="relative border-s ps-2 font-mono text-[0.65rem] tabular-nums"
                :class="filterCountClass(category.id)"
              >
                {{ category.count }}
              </span>
            </button>
          </div>

          <aside
            v-if="showAd"
            aria-label="Sponsored"
            class="border-default/70 bg-elevated/20 relative flex min-h-24 items-center justify-center border-t p-4 pt-9"
          >
            <span
              class="text-toned absolute top-3 left-5 font-mono text-[0.6rem] tracking-[0.16em] uppercase"
            >
              Sponsor
            </span>
            <InspiraCarbonAds class="max-w-full overflow-hidden" />
          </aside>
        </div>

        <div
          v-if="!filteredComponents.length"
          class="border-default/70 bg-elevated/15 grid place-items-center border px-6 py-16 text-center"
        >
          <p class="text-highlighted text-2xl font-medium tracking-[-0.04em]">
            No components found.
          </p>
          <p class="text-muted mt-3 max-w-md text-sm leading-6">
            Try another category or search term.
          </p>
        </div>

        <div
          v-else
          class="space-y-12"
        >
          <section
            v-for="section in componentSections"
            :key="section.id"
            class="space-y-4"
          >
            <header
              v-if="section.grouped"
              class="border-default/70 flex flex-col gap-3 pb-3 md:flex-row md:items-end"
            >
              <div class="flex min-w-0 items-baseline gap-3">
                <h2 class="text-highlighted truncate text-lg font-semibold tracking-[-0.02em]">
                  {{ section.label }}
                </h2>
                <span class="text-dimmed font-mono text-[0.65rem] tabular-nums">{{
                  section.count
                }}</span>
              </div>

              <div class="flex flex-wrap gap-1.5 md:ms-auto">
                <span
                  v-if="section.newCount"
                  class="border-success/25 bg-success/5 text-success rounded-none border px-2 py-1 font-mono text-[0.6rem] font-medium tracking-[0.08em] uppercase"
                >
                  {{ section.newCount }} new
                </span>
                <span
                  v-if="section.updatedCount"
                  class="border-warning/25 bg-warning/5 text-warning rounded-none border px-2 py-1 font-mono text-[0.6rem] font-medium tracking-[0.08em] uppercase"
                >
                  {{ section.updatedCount }} updated
                </span>
              </div>
            </header>

            <div
              class="border-default/70 bg-border/70 grid grid-cols-1 gap-px border md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            >
              <NuxtLink
                v-for="component in section.items"
                :key="component.path"
                :to="component.path"
                class="group/card focus-visible:ring-primary/40 relative isolate min-h-56 overflow-hidden rounded-none p-5 transition-colors duration-200 focus-visible:z-10 focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none"
                :class="cardShellClass(component)"
              >
                <span
                  v-if="component.badge"
                  class="absolute inset-x-0 top-0 h-px"
                  :class="isNew(component) ? 'bg-success/70' : 'bg-warning/70'"
                />
                <article class="relative flex h-full w-full flex-col">
                  <div class="flex items-start justify-between gap-3">
                    <span
                      class="inline-flex items-center rounded-none border px-2 py-1 font-mono text-[0.58rem] tracking-[0.16em] uppercase"
                      :class="categoryPillClass(component)"
                    >
                      {{ component.category }}
                    </span>
                    <span
                      v-if="component.badge"
                      class="rounded-none border px-2 py-1 font-mono text-[0.58rem] font-semibold tracking-widest uppercase"
                      :class="badgeClass(component.badge)"
                    >
                      {{ component.badge }}
                    </span>
                  </div>

                  <h3
                    class="text-highlighted mt-5 text-lg leading-6 font-semibold tracking-[-0.03em]"
                  >
                    {{ component.title }}
                  </h3>
                  <p class="text-muted mt-2 line-clamp-3 text-sm leading-6">
                    {{ component.description }}
                  </p>

                  <div class="mt-5 flex flex-wrap gap-1.5">
                    <span
                      v-for="tag in component.tags?.slice(0, 3)"
                      :key="component.path + tag"
                      class="border-default/60 bg-elevated/30 text-muted rounded-none border px-1.5 py-0.5 text-[0.68rem]"
                    >
                      {{ tag }}
                    </span>
                    <span
                      v-if="component.tags && component.tags.length > 3"
                      class="border-default/60 bg-elevated/30 text-muted rounded-none border px-1.5 py-0.5 text-[0.68rem]"
                    >
                      +{{ component.tags.length - 3 }}
                    </span>
                  </div>

                  <div class="mt-auto flex items-center justify-end pt-7">
                    <span
                      class="border-default/70 bg-elevated/45 text-highlighted grid size-8 place-items-center rounded-none border transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 motion-reduce:transition-none"
                    >
                      <UIcon
                        name="tabler:arrow-up-right"
                        class="size-4"
                      />
                    </span>
                  </div>
                </article>
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </section>
  </MotionConfig>
</template>
