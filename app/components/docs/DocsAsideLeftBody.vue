<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

const { nav } = useNavigation(navigation);

const route = useRoute();
const navContainer = ref<HTMLElement | null>(null);

type NavItemWithData = ContentNavigationItem & {
  "data-nav-path"?: string;
  children?: NavItemWithData[];
};

function addDataNavPath(items: ContentNavigationItem[] = []): NavItemWithData[] {
  return items.map((item) => ({
    ...item,
    "data-nav-path": item.path,
    children: item.children ? addDataNavPath(item.children) : item.children,
  }));
}

const navWithData = computed(() => addDataNavPath(nav.value));

async function scrollActiveLinkIntoView() {
  await nextTick();

  const escapedPath = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(route.path) : route.path;
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

  // Prefer centering; if the container is too small, bias towards the upper half.
  const desiredCenter = Math.max(scrollParent.clientHeight / 2, scrollParent.clientHeight * 0.35);
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
    const canScrollY = (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") &&
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
  <div ref="navContainer">
    <UContentNavigation
      highlight
      :navigation="navWithData"
    />
  </div>
</template>
