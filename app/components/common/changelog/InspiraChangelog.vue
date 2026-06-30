<script setup lang="ts">
import type { InspiraChangelogEntry, InspiraChangelogType } from "~/data/inspira-changelog";
import { inspiraChangelog } from "~/data/inspira-changelog";

const { locale, isEnabled } = useDocusI18n();

const typeMeta: Record<
  InspiraChangelogType,
  {
    label: string;
    icon: string;
    chip: string;
    dot: string;
  }
> = {
  release: {
    label: "Release",
    icon: "i-lucide-rocket",
    chip: "bg-primary/10 text-primary ring-primary/20",
    dot: "bg-primary shadow-[0_0_24px_color-mix(in_oklab,var(--ui-primary)_50%,transparent)]",
  },
  added: {
    label: "Added",
    icon: "i-lucide-plus",
    chip: "bg-success/10 text-success ring-success/20",
    dot: "bg-success shadow-[0_0_24px_color-mix(in_oklab,var(--ui-success)_50%,transparent)]",
  },
  updated: {
    label: "Updated",
    icon: "i-lucide-refresh-cw",
    chip: "bg-info/10 text-info ring-info/20",
    dot: "bg-info shadow-[0_0_24px_color-mix(in_oklab,var(--ui-info)_50%,transparent)]",
  },
  fixed: {
    label: "Fixed",
    icon: "i-lucide-wrench",
    chip: "bg-secondary/10 text-secondary ring-secondary/20",
    dot: "bg-secondary shadow-[0_0_24px_color-mix(in_oklab,var(--ui-secondary)_50%,transparent)]",
  },
  removed: {
    label: "Removed",
    icon: "i-lucide-trash-2",
    chip: "bg-error/10 text-error ring-error/20",
    dot: "bg-error shadow-[0_0_24px_color-mix(in_oklab,var(--ui-error)_50%,transparent)]",
  },
  migration: {
    label: "Milestone",
    icon: "i-lucide-git-branch",
    chip: "bg-elevated text-toned ring-default",
    dot: "bg-toned",
  },
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function formatDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}

const changelogGroups = computed(() => {
  let index = 0;
  const groups = new Map<string, { entry: InspiraChangelogEntry; index: number }[]>();

  inspiraChangelog.forEach((entry) => {
    const year = entry.date.slice(0, 4);
    const entries = groups.get(year) ?? [];

    entries.push({ entry, index });
    groups.set(year, entries);
    index += 1;
  });

  return Array.from(groups, ([year, entries]) => ({ year, entries }));
});

const timelineRef = ref<HTMLElement | null>(null);
const entryRefs = ref<HTMLElement[]>([]);
const activeIndex = ref(0);
const progressHeight = ref(0);
let observer: IntersectionObserver | undefined;
let resizeHandler: (() => void) | undefined;

function resolvePath(to: string) {
  if (to.startsWith("http")) {
    return to;
  }

  return isEnabled.value ? `/${locale.value}${to}` : to;
}

function metaFor(entry: InspiraChangelogEntry) {
  return typeMeta[entry.type];
}

function setEntryRef(el: Element | null, index: number) {
  if (el instanceof HTMLElement) {
    entryRefs.value[index] = el;
  }
}

function updateProgress(index = activeIndex.value) {
  const timeline = timelineRef.value;
  const marker = entryRefs.value[index]?.querySelector<HTMLElement>("[data-timeline-marker]");

  if (!timeline || !marker) {
    return;
  }

  const timelineRect = timeline.getBoundingClientRect();
  const markerRect = marker.getBoundingClientRect();

  progressHeight.value = Math.max(0, markerRect.top - timelineRect.top + markerRect.height / 2);
}

onMounted(async () => {
  await nextTick();

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries
        .filter((item) => item.isIntersecting)
        .toSorted((a, b) => {
          const anchor = window.innerHeight * 0.36;

          return (
            Math.abs(a.boundingClientRect.top - anchor) -
            Math.abs(b.boundingClientRect.top - anchor)
          );
        })[0];

      if (!entry) {
        return;
      }

      activeIndex.value = Number((entry.target as HTMLElement).dataset.index ?? 0);
      updateProgress(activeIndex.value);
    },
    {
      rootMargin: "-18% 0px -58% 0px",
      threshold: [0, 0.35, 1],
    },
  );

  entryRefs.value.forEach((entry) => observer?.observe(entry));

  resizeHandler = () => updateProgress();
  window.addEventListener("resize", resizeHandler, { passive: true });
  updateProgress();
});

onBeforeUnmount(() => {
  observer?.disconnect();

  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
  }
});
</script>

<template>
  <section class="relative isolate py-4 sm:py-8">
    <div
      ref="timelineRef"
      class="relative mx-auto max-w-5xl"
    >
      <div
        v-for="group in changelogGroups"
        :key="group.year"
        class="relative"
      >
        <div class="grid gap-4 pt-14 pb-3 first:pt-0 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
          <div class="pl-8">
            <p class="text-highlighted text-2xl leading-none font-semibold tracking-tight">
              {{ group.year }}
            </p>
          </div>
          <div class="flex items-center gap-3">
            <div class="bg-border/70 h-px flex-1" />
            <span class="text-muted font-mono text-xs tracking-[0.16em] uppercase">
              {{ group.entries.length }} milestones
            </span>
          </div>
        </div>

        <article
          v-for="{ entry, index } in group.entries"
          :key="`${entry.date}-${entry.title}`"
          :ref="(el) => setEntryRef(el, index)"
          :data-index="index"
          class="group relative grid gap-4 py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8"
        >
          <span
            data-timeline-marker
            aria-hidden="true"
            class="ring-default absolute top-11.5 left-0 z-10 size-2.5 rounded-full ring-4 transition-[opacity,transform,box-shadow] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] max-sm:top-6"
            :class="[
              metaFor(entry).dot,
              activeIndex === index ? 'scale-125 opacity-100' : 'opacity-55',
            ]"
          />
          <time
            :datetime="entry.date"
            class="text-muted pl-8 font-mono text-xs tracking-[0.16em] uppercase sm:pt-6"
          >
            {{ formatDate(entry.date) }}
          </time>

          <div
            class="bg-elevated/35 ring-default/70 relative rounded-[1.75rem] p-1.5 shadow-[0_18px_70px_-54px_rgba(15,23,42,0.6)] ring backdrop-blur-xl transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 dark:shadow-none"
          >
            <div
              class="bg-default/30 ring-default/60 relative overflow-hidden rounded-[calc(1.75rem-0.375rem)] p-5 ring backdrop-blur-xl sm:p-6"
            >
              <div
                aria-hidden="true"
                class="bg-primary/10 absolute -top-20 -right-20 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-300 ease-out group-hover:opacity-100"
              />

              <div class="relative z-10 flex flex-col gap-5">
                <div class="flex flex-wrap items-center gap-3">
                  <span
                    class="inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-xs font-medium ring"
                    :class="metaFor(entry).chip"
                  >
                    <UIcon
                      :name="metaFor(entry).icon"
                      class="size-3.5"
                    />
                    {{ metaFor(entry).label }}
                  </span>
                  <span
                    v-if="entry.commit"
                    class="text-dimmed font-mono text-xs tracking-[0.12em] uppercase"
                  >
                    {{ entry.commit }}
                  </span>
                </div>

                <div>
                  <h2 class="text-highlighted text-xl leading-tight font-semibold sm:text-2xl">
                    {{ entry.title }}
                  </h2>
                  <p class="text-muted mt-3 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
                    {{ entry.description }}
                  </p>
                </div>

                <div
                  v-if="entry.links?.length"
                  class="flex flex-wrap gap-2"
                >
                  <NuxtLink
                    v-for="link in entry.links"
                    :key="link.to"
                    :to="resolvePath(link.to)"
                    class="group/link bg-elevated/70 text-toned ring-default/70 hover:bg-accented/70 hover:text-highlighted inline-flex h-8 items-center gap-2 rounded-full px-3 text-xs font-medium ring transition-colors duration-200"
                  >
                    {{ link.label }}
                    <UIcon
                      name="i-lucide-arrow-up-right"
                      class="size-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
