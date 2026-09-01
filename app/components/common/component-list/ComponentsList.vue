<script lang="ts" setup>
import type { DocsEnCollectionItem } from "@nuxt/content";
import { motion, MotionConfig } from "motion-v";
import InspiraCarbonAds from "../carbon-ads/InspiraCarbonAds.vue";

interface Props {
  routePath?: string;
}

interface CategoryOption {
  id: string;
  label: string;
  count: number;
}

interface ViewerNodeProps {
  config?: string;
}

const { routePath = "/components" } = defineProps<Props>();
const { locale } = useDocusI18n();
const preferredMotion = usePreferredReducedMotion();

const selectedCategory = ref("new");
const selectedPreviewPath = ref("");
const compactPreviewOpen = ref(false);
const search = ref("");
const showAd = useMediaQuery("(max-width: 1023px)");
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
const components = computed(() =>
  (collection.value ?? []).filter(
    (component) => component.path.startsWith(path.value) && component.path !== path.value,
  ),
);

const newCount = computed(
  () => components.value.filter((component) => component.badge === "New").length,
);
const updatedCount = computed(
  () => components.value.filter((component) => component.badge === "Updated").length,
);

const categorySummaries = computed<CategoryOption[]>(() => {
  const counts = new Map<string, number>();

  for (const component of components.value) {
    const category = component.category || "Other";
    counts.set(category, (counts.get(category) ?? 0) + 1);
  }

  return [...counts]
    .toSorted(([a], [b]) => a.localeCompare(b))
    .map(([id, count]) => ({ id, label: id, count }));
});

const categoryOptions = computed<CategoryOption[]>(() =>
  [
    { id: "all", label: "All components", count: components.value.length },
    { id: "new", label: "New", count: newCount.value },
    { id: "updated", label: "Updated", count: updatedCount.value },
    ...categorySummaries.value,
  ].filter((category) => category.id === "all" || category.count > 0),
);

const activeCategory = computed(() =>
  categoryOptions.value.find((category) => category.id === selectedCategory.value),
);

watch(
  categoryOptions,
  (options) => {
    if (!options.some((category) => category.id === selectedCategory.value)) {
      selectedCategory.value = options.find((category) => category.id === "new")?.id ?? "all";
    }
  },
  { immediate: true },
);

function matchesSearch(component: DocsEnCollectionItem, query: string) {
  return [
    component.title,
    component.description,
    component.category,
    component.badge,
    ...(component.tags ?? []),
  ]
    .filter(Boolean)
    .some((value) => value!.toLowerCase().includes(query));
}

function badgePriority(badge?: string) {
  if (badge === "New") return 0;
  if (badge === "Updated") return 1;
  return 2;
}

const filteredComponents = computed(() => {
  const query = search.value.trim().toLowerCase();

  return components.value
    .filter((component) => {
      if (query) return matchesSearch(component, query);
      if (selectedCategory.value === "new") return component.badge === "New";
      if (selectedCategory.value === "updated") return component.badge === "Updated";
      if (selectedCategory.value !== "all") {
        return (component.category || "Other") === selectedCategory.value;
      }
      return true;
    })
    .toSorted(
      (a, b) => badgePriority(a.badge) - badgePriority(b.badge) || a.title.localeCompare(b.title),
    );
});

const selectedComponent = computed(() =>
  components.value.find((component) => component.path === selectedPreviewPath.value),
);

function getConfigName(component?: DocsEnCollectionItem) {
  const body = component?.body as { value?: unknown[] } | undefined;

  for (const node of body?.value ?? []) {
    if (!Array.isArray(node) || node[0] !== "component-viewer") continue;

    const props = node[1];
    if (props && typeof props === "object") {
      return (props as ViewerNodeProps).config;
    }
  }
}

const selectedConfigName = computed(() => getConfigName(selectedComponent.value));

watch(
  filteredComponents,
  (items) => {
    if (!items.some((component) => component.path === selectedPreviewPath.value)) {
      selectedPreviewPath.value = items[0]?.path ?? "";
    }
  },
  { immediate: true },
);

const isCategoryOverview = computed(() => selectedCategory.value === "all" && !search.value.trim());
const listHeading = computed(() => {
  if (search.value.trim()) return "Search results";
  if (selectedCategory.value === "new") return "Recently added";
  if (selectedCategory.value === "updated") return "Recently updated";
  return activeCategory.value?.label ?? "Components";
});

function selectCategory(id: string) {
  compactPreviewOpen.value = false;
  search.value = "";
  selectedCategory.value = id;
  selectedPreviewPath.value = filteredComponents.value[0]?.path ?? "";
}

function updateSearch(event: Event) {
  compactPreviewOpen.value = false;
  search.value = (event.target as HTMLInputElement).value;
}

function openPreview(component: DocsEnCollectionItem) {
  selectedPreviewPath.value = component.path;
  compactPreviewOpen.value = true;
}

function closePreview() {
  compactPreviewOpen.value = false;
}

function clearSearch() {
  compactPreviewOpen.value = false;
  search.value = "";
}

function filterButtonClass(id: string) {
  if (selectedCategory.value === id && !search.value.trim()) return "text-highlighted";
  if (id === "new") return "text-success hover:text-success";
  if (id === "updated") return "text-warning hover:text-warning";
  return "text-muted hover:text-highlighted";
}

function filterIndicatorClass(id: string) {
  if (id === "new") return "border-success/50 bg-success/8";
  if (id === "updated") return "border-warning/50 bg-warning/8";
  return "border-highlighted/50 bg-elevated/70";
}

function badgeClass(badge?: string) {
  return badge === "New" ? "text-success" : "text-warning";
}

function statusDotClass(component: DocsEnCollectionItem) {
  if (component.badge === "New") return "bg-success";
  if (component.badge === "Updated") return "bg-warning";
  return "bg-muted/55";
}
</script>

<template>
  <MotionConfig :transition="filterTransition">
    <section
      class="flex w-full flex-col xl:h-[calc(100dvh-var(--ui-header-height)-3rem)] xl:overflow-hidden"
    >
      <header
        class="border-default/70 flex shrink-0 flex-col gap-6 border-b px-5 py-7 sm:px-7 lg:flex-row lg:items-end lg:justify-between lg:px-8 xl:px-9"
      >
        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-3">
            <h1
              class="text-highlighted text-3xl leading-none font-semibold tracking-[-0.04em] sm:text-4xl"
            >
              Browse components
            </h1>
            <span
              class="border-default/70 text-muted border px-2 py-1 font-mono text-[0.65rem] tabular-nums"
            >
              {{ components.length }}
            </span>
          </div>
          <p class="text-muted mt-3 max-w-2xl text-sm leading-6">
            Open the documentation directly, or preview a component before you continue.
          </p>
        </div>

        <div class="w-full shrink-0 lg:w-80 xl:w-88">
          <label
            for="component-search"
            class="sr-only"
          >
            Search components
          </label>
          <div
            class="border-default/70 bg-default focus-within:border-primary/50 flex h-11 items-center gap-2 border px-3 transition-colors duration-150 motion-reduce:transition-none"
          >
            <UIcon
              name="tabler:search"
              class="text-toned size-4 shrink-0"
            />
            <input
              id="component-search"
              :value="search"
              type="search"
              autocomplete="off"
              aria-label="Search components"
              placeholder="Search all components"
              class="text-highlighted placeholder:text-muted h-full min-w-0 flex-1 bg-transparent p-0 text-sm outline-none"
              @input="updateSearch"
            >
            <button
              v-if="search"
              type="button"
              aria-label="Clear search"
              class="text-muted hover:text-highlighted grid size-8 shrink-0 place-items-center transition-colors duration-150 motion-reduce:transition-none"
              @click="clearSearch"
            >
              <UIcon
                name="tabler:x"
                class="size-4"
              />
            </button>
          </div>
        </div>
      </header>

      <ClientOnly v-if="showAd">
        <aside
          aria-label="Sponsored"
          class="border-default/70 bg-elevated/15 relative flex min-h-28 shrink-0 items-center justify-center border-b px-4 py-5 pt-9"
        >
          <span
            class="text-toned absolute top-3 left-5 font-mono text-[0.6rem] tracking-[0.16em] uppercase"
          >
            Sponsor
          </span>
          <InspiraCarbonAds class="max-w-full overflow-hidden" />
        </aside>
      </ClientOnly>

      <div
        class="min-h-0 flex-1 xl:grid xl:grid-cols-[13.5rem_20rem_minmax(0,1fr)] xl:overflow-hidden 2xl:grid-cols-[14.5rem_22rem_minmax(0,1fr)]"
      >
        <nav
          aria-label="Component categories"
          class="border-default/70 min-w-0 border-b xl:h-full xl:min-h-0 xl:overflow-y-auto xl:border-e xl:border-b-0"
        >
          <div
            class="flex overflow-x-auto [scrollbar-width:none] xl:block xl:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            <button
              v-for="category in categoryOptions"
              :key="category.id"
              type="button"
              class="border-default/60 relative isolate flex h-12 min-w-fit shrink-0 items-center justify-between gap-5 overflow-hidden border-e px-4 text-left text-sm font-medium transition-colors duration-150 last:border-e-0 motion-reduce:transition-none xl:w-full xl:border-e-0 xl:border-b xl:px-5 xl:last:border-b-0"
              :class="filterButtonClass(category.id)"
              :aria-pressed="selectedCategory === category.id && !search.trim()"
              @click="selectCategory(category.id)"
            >
              <motion.span
                v-if="selectedCategory === category.id && !search.trim()"
                :layout-id="`${filterIndicatorId}-filter`"
                class="pointer-events-none absolute inset-0 border-s-2"
                :class="filterIndicatorClass(category.id)"
                :transition="filterTransition"
              />
              <span class="relative whitespace-nowrap">{{ category.label }}</span>
              <span class="text-dimmed relative font-mono text-[0.65rem] tabular-nums">
                {{ category.count }}
              </span>
            </button>
          </div>
        </nav>

        <section
          aria-label="Component index"
          class="border-default/70 min-h-0 min-w-0 flex-col xl:flex xl:h-full xl:border-e"
          :class="compactPreviewOpen ? 'hidden xl:flex' : 'flex'"
        >
          <header
            class="border-default/70 flex h-15 shrink-0 items-center justify-between gap-4 border-b px-5"
          >
            <h2 class="text-highlighted truncate text-base font-semibold">
              {{ listHeading }}
            </h2>
            <span class="text-dimmed shrink-0 font-mono text-[0.65rem] tabular-nums">
              {{ isCategoryOverview ? categorySummaries.length : filteredComponents.length }}
            </span>
          </header>

          <div class="min-h-0 flex-1 overflow-y-auto">
            <div
              v-if="isCategoryOverview"
              class="border-default/60 grid grid-cols-1 border-s"
            >
              <button
                v-for="category in categorySummaries"
                :key="category.id"
                type="button"
                class="group/category border-default/60 focus-visible:outline-primary/50 hover:bg-elevated/30 flex h-15 items-center gap-3 border-e border-b px-5 text-left transition-colors duration-150 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] motion-reduce:transition-none"
                @click="selectCategory(category.id)"
              >
                <span class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium">
                  {{ category.label }}
                </span>
                <span class="text-dimmed font-mono text-[0.65rem] tabular-nums">
                  {{ category.count }}
                </span>
                <UIcon
                  name="tabler:arrow-right"
                  class="text-dimmed group-hover/category:text-highlighted size-4 shrink-0 transition-[color,transform] duration-150 group-hover/category:translate-x-0.5 motion-reduce:transition-none"
                />
              </button>
            </div>

            <div
              v-else-if="filteredComponents.length"
              class="border-default/60 grid grid-cols-1 border-s"
            >
              <div
                v-for="component in filteredComponents"
                :key="component.path"
                class="border-default/60 grid h-15 min-w-0 grid-cols-[minmax(0,1fr)_3.75rem] border-e border-b transition-colors duration-150 motion-reduce:transition-none"
                :class="component.path === selectedPreviewPath ? 'bg-elevated/30' : ''"
              >
                <NuxtLink
                  :to="component.path"
                  class="group/docs focus-visible:outline-primary/50 hover:bg-elevated/30 flex min-w-0 items-center gap-3 px-5 transition-colors duration-150 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] motion-reduce:transition-none"
                >
                  <span
                    class="size-1.5 shrink-0 rounded-full"
                    :class="statusDotClass(component)"
                  />
                  <h3 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium">
                    {{ component.title }}
                  </h3>
                  <span
                    v-if="component.badge"
                    class="shrink-0 font-mono text-[0.58rem] font-semibold tracking-[0.06em] uppercase"
                    :class="badgeClass(component.badge)"
                  >
                    {{ component.badge }}
                  </span>
                  <UIcon
                    name="tabler:arrow-up-right"
                    class="text-dimmed group-hover/docs:text-highlighted size-4 shrink-0 transition-[color,transform] duration-150 group-hover/docs:translate-x-0.5 group-hover/docs:-translate-y-0.5 motion-reduce:transition-none"
                  />
                </NuxtLink>
                <button
                  type="button"
                  :aria-label="`Preview ${component.title}`"
                  :aria-pressed="component.path === selectedPreviewPath"
                  :title="`Preview ${component.title}`"
                  class="border-default/60 hover:bg-elevated/50 focus-visible:outline-primary/50 grid place-items-center border-s transition-colors duration-150 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] motion-reduce:transition-none"
                  :class="
                    component.path === selectedPreviewPath
                      ? 'text-highlighted'
                      : 'text-muted hover:text-highlighted'
                  "
                  @click="openPreview(component)"
                >
                  <UIcon
                    name="tabler:player-play"
                    class="size-4"
                  />
                </button>
              </div>
            </div>

            <div
              v-else
              class="text-muted grid min-h-72 place-items-center px-6 text-center text-sm"
            >
              <div>
                <p class="text-highlighted font-medium">No components found</p>
                <p class="mt-1">Try another category or search term.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Component preview"
          class="border-default/70 min-h-0 min-w-0 flex-col border-t xl:flex xl:h-full xl:border-t-0"
          :class="compactPreviewOpen ? 'flex' : 'hidden xl:flex'"
        >
          <template v-if="selectedComponent">
            <header
              class="border-default/70 flex min-h-15 shrink-0 items-center gap-3 border-b px-4 sm:px-6"
            >
              <button
                type="button"
                aria-label="Back to components"
                title="Back to components"
                class="text-muted hover:bg-elevated/50 hover:text-highlighted focus-visible:outline-primary/50 grid size-10 shrink-0 place-items-center transition-colors duration-150 focus-visible:outline-2 motion-reduce:transition-none xl:hidden"
                @click="closePreview"
              >
                <UIcon
                  name="tabler:arrow-left"
                  class="size-5"
                />
              </button>
              <h2 class="text-highlighted min-w-0 flex-1 truncate text-base font-semibold">
                {{ selectedComponent.title }}
              </h2>
              <UButton
                :to="selectedComponent.path"
                color="neutral"
                variant="solid"
                size="md"
                icon="tabler:book-2"
                trailing-icon="tabler:arrow-up-right"
                class="h-10 shrink-0 rounded-none px-4 font-semibold"
              >
                Open docs
              </UButton>
            </header>

            <div class="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
              <ClientOnly>
                <component
                  :is="selectedConfigName"
                  v-if="selectedConfigName"
                  :key="selectedComponent.path"
                />
                <div
                  v-else
                  class="border-default/70 text-muted grid min-h-88 place-items-center border px-6 text-center text-sm"
                >
                  Preview unavailable. Open the documentation to inspect this component.
                </div>
                <template #fallback>
                  <div
                    class="border-default/70 text-muted grid min-h-88 place-items-center border text-sm"
                  >
                    Loading preview
                  </div>
                </template>
              </ClientOnly>
            </div>
          </template>
        </section>
      </div>
    </section>
  </MotionConfig>
</template>
