<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { motion, MotionConfig } from "motion-v";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

const { nav } = useNavigation(navigation);

const route = useRoute();
const navContainer = ref<HTMLElement | null>(null);
const hoveredKey = ref<string | null>(null);
const trailingSlashRe = /\/$/;
const indicatorId = useId();

type NavItem = ContentNavigationItem & {
  "data-nav-path"?: string;
  children?: NavItem[];
  badge?: string | number | Record<string, unknown>;
  trailingIcon?: string;
};

interface NavGroup {
  key: string;
  title: string;
  items: NavItem[];
}

function addDataNavPath(items: ContentNavigationItem[] = []): NavItem[] {
  return items.map((item) => ({
    ...item,
    "data-nav-path": item.path,
    children: item.children ? addDataNavPath(item.children) : item.children,
  }));
}

function normalizePath(path?: string | null) {
  if (!path) return "";
  return path.length > 1 ? path.replace(trailingSlashRe, "") : path;
}

function itemKey(item?: NavItem | null) {
  return normalizePath(item?.path) || item?.title || "item";
}

function isCurrent(item: NavItem) {
  return normalizePath(item.path) === normalizePath(route.path);
}

function _countLeaves(items: NavItem[] = []): number {
  return items.reduce((total, item) => {
    if (item.children?.length) {
      return total + _countLeaves(item.children);
    }

    return total + 1;
  }, 0);
}

function toGroups(items: NavItem[]): NavGroup[] {
  const looseItems: NavItem[] = [];
  const groups: NavGroup[] = [];

  for (const item of items) {
    if (item.children?.length) {
      groups.push({
        key: itemKey(item),
        title: item.title,
        items: item.children,
      });
      continue;
    }

    looseItems.push(item);
  }

  if (looseItems.length) {
    groups.unshift({
      key: "root",
      title: "",
      items: looseItems,
    });
  }

  return groups;
}

const navWithData = computed(() => addDataNavPath(nav.value));
const navGroups = computed(() => toGroups(navWithData.value));

async function scrollActiveLinkIntoView() {
  await nextTick();

  const escapedPath =
    typeof CSS !== "undefined" && CSS.escape ? CSS.escape(route.path) : route.path;
  const activeItem = navContainer.value?.querySelector<HTMLElement>(
    `[data-nav-path="${escapedPath}"], [data-nav-path="${escapedPath}/"]`,
  );

  if (!activeItem) {
    return;
  }

  const scrollParent = getScrollParent(activeItem);
  if (!scrollParent) {
    activeItem.scrollIntoView({ block: "center", inline: "nearest" });
    return;
  }

  const parentRect = scrollParent.getBoundingClientRect();
  const itemRect = activeItem.getBoundingClientRect();
  const itemOffsetTop = itemRect.top - parentRect.top;
  const itemCenterOffset = itemOffsetTop + itemRect.height / 2;
  const desiredCenter = Math.max(scrollParent.clientHeight * 0.42, 160);
  const targetScrollTop = scrollParent.scrollTop + (itemCenterOffset - desiredCenter);
  const maxScrollTop = scrollParent.scrollHeight - scrollParent.clientHeight;
  const clampedScrollTop = Math.min(Math.max(0, targetScrollTop), Math.max(0, maxScrollTop));

  scrollParent.scrollTo({ top: clampedScrollTop, behavior: "auto" });
}

function getScrollParent(element: HTMLElement): HTMLElement | null {
  let current: HTMLElement | null = element.parentElement;
  while (current) {
    const style = getComputedStyle(current);
    const overflowY = style.overflowY;
    const canScrollY =
      (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") &&
      current.scrollHeight > current.clientHeight;
    if (canScrollY) {
      return current;
    }
    current = current.parentElement;
  }

  return null;
}

onMounted(scrollActiveLinkIntoView);

watch(() => route.path, scrollActiveLinkIntoView);
watch(navWithData, scrollActiveLinkIntoView, { deep: true });
</script>

<template>
  <MotionConfig
    :transition="{
      type: 'spring',
      stiffness: 560,
      damping: 42,
      mass: 0.62,
    }"
  >
    <nav
      ref="navContainer"
      class="-mx-1 pb-8"
      aria-label="Documentation"
      @mouseleave="hoveredKey = null"
    >
      <div class="space-y-6">
        <section
          v-for="group in navGroups"
          :key="group.key"
          class="min-w-0"
        >
          <div
            v-if="group.title"
            class="mb-1 flex items-center justify-between gap-3 px-2"
          >
            <p class="text-toned text-md truncate font-bold uppercase">
              {{ group.title }}
            </p>
          </div>

          <div class="space-y-0.5">
            <template
              v-for="link in group.items"
              :key="link.path || link.title"
            >
              <ULink
                v-if="!link.children?.length"
                :to="link.path"
                :target="link.target as string"
                class="group/link relative isolate flex min-h-8 items-center gap-2.5 overflow-hidden rounded-xl px-2.5 py-1.5 text-[0.88rem] leading-6 tracking-[-0.012em] transition-[color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.985]"
                :class="isCurrent(link) ? 'text-highlighted' : 'text-muted hover:text-highlighted'"
                :aria-current="isCurrent(link) ? 'page' : undefined"
                :data-current="isCurrent(link) ? true : undefined"
                :data-nav-path="link['data-nav-path']"
                @mouseenter="hoveredKey = itemKey(link)"
                @focus="hoveredKey = itemKey(link)"
                @blur="hoveredKey = null"
              >
                <motion.span
                  v-if="isCurrent(link)"
                  :layout-id="`${indicatorId}-active`"
                  class="bg-elevated/90 ring-default pointer-events-none absolute inset-0 rounded-xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] ring"
                  :transition="{ type: 'spring', stiffness: 560, damping: 42, mass: 0.62 }"
                />

                <motion.span
                  v-else-if="hoveredKey === itemKey(link)"
                  :layout-id="`${indicatorId}-hover`"
                  class="bg-elevated/45 ring-default/40 pointer-events-none absolute inset-0 rounded-xl ring"
                  :initial="{ opacity: 0, scale: 0.985 }"
                  :animate="{ opacity: 1, scale: 1 }"
                  :transition="{ type: 'spring', stiffness: 560, damping: 38, mass: 0.62 }"
                />

                <span
                  class="relative size-1.5 shrink-0 rounded-sm transition-[background-color,box-shadow] duration-200"
                  :class="isCurrent(link) ? 'bg-primary' : ''"
                />

                <span
                  class="relative min-w-0 truncate font-medium"
                  :class="isCurrent(link) ? 'font-semibold tracking-[-0.015em]' : undefined"
                >
                  {{ link.title }}
                  <UIcon
                    v-if="link.target === '_blank'"
                    name="i-lucide-external-link"
                    class="text-dimmed ml-1 inline-block size-3 align-top"
                  />
                </span>

                <span
                  v-if="link.badge || link.badge === 0 || link.trailingIcon"
                  class="relative ms-auto inline-flex items-center gap-1.5"
                >
                  <UBadge
                    v-if="link.badge || link.badge === 0"
                    color="neutral"
                    variant="outline"
                    size="sm"
                    v-bind="
                      typeof link.badge === 'string' || typeof link.badge === 'number'
                        ? { label: link.badge }
                        : link.badge
                    "
                  />
                  <UIcon
                    v-if="link.trailingIcon"
                    :name="link.trailingIcon"
                    class="text-muted group-hover/link:text-toned size-4 shrink-0"
                  />
                </span>
              </ULink>

              <div
                v-else
                class="mt-4"
              >
                <p
                  class="text-dimmed mb-1.5 px-2 text-[0.62rem] font-semibold tracking-[0.2em] uppercase"
                >
                  {{ link.title }}
                </p>
                <div class="space-y-0.5">
                  <ULink
                    v-for="child in link.children"
                    :key="child.path || child.title"
                    :to="child.path"
                    :target="child.target as string"
                    class="group/link relative isolate flex min-h-8 items-center gap-2.5 overflow-hidden rounded-xl px-2.5 py-1.5 text-[0.88rem] leading-6 tracking-[-0.012em] transition-[color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.985]"
                    :class="
                      isCurrent(child) ? 'text-highlighted' : 'text-muted hover:text-highlighted'
                    "
                    :aria-current="isCurrent(child) ? 'page' : undefined"
                    :data-current="isCurrent(child) ? true : undefined"
                    :data-nav-path="child['data-nav-path']"
                    @mouseenter="hoveredKey = itemKey(child)"
                    @focus="hoveredKey = itemKey(child)"
                    @blur="hoveredKey = null"
                  >
                    <motion.span
                      v-if="isCurrent(child)"
                      :layout-id="`${indicatorId}-active`"
                      class="bg-elevated/90 ring-default pointer-events-none absolute inset-0 rounded-xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] ring"
                      :transition="{ type: 'spring', stiffness: 560, damping: 42, mass: 0.62 }"
                    />

                    <motion.span
                      v-else-if="hoveredKey === itemKey(child)"
                      :layout-id="`${indicatorId}-hover`"
                      class="bg-elevated/45 ring-default/40 pointer-events-none absolute inset-0 rounded-xl ring"
                      :initial="{ opacity: 0, scale: 0.985 }"
                      :animate="{ opacity: 1, scale: 1 }"
                      :transition="{ type: 'spring', stiffness: 560, damping: 38, mass: 0.62 }"
                    />

                    <span
                      class="relative size-1.5 shrink-0 rounded-full transition-[background-color,box-shadow] duration-200"
                      :class="
                        isCurrent(child)
                          ? 'bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--ui-primary)_18%,transparent),0_0_18px_color-mix(in_oklab,var(--ui-primary)_72%,transparent)]'
                          : 'bg-muted/80 group-hover/link:bg-toned'
                      "
                    />
                    <span
                      class="relative min-w-0 truncate font-medium"
                      :class="isCurrent(child) ? 'font-semibold tracking-[-0.015em]' : undefined"
                    >
                      {{ child.title }}
                    </span>
                  </ULink>
                </div>
              </div>
            </template>
          </div>
        </section>
      </div>
    </nav>
  </MotionConfig>
</template>
