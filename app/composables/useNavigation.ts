import type { ContentNavigationItem } from "@nuxt/content";

export function useNavigation(navigation?: Ref<ContentNavigationItem[]>) {
  console.log(navigation?.value);

  const route = useRoute();

  const children = computed(() => {
    const nav = toValue(navigation);

    // Get the current path segments
    const pathSegments = route.path.split("/").filter(Boolean);

    // Need at least locale and section (e.g., ['en', 'getting-started'])
    if (pathSegments.length < 2) {
      return [];
    }

    // Build the top parent path (e.g., '/en/getting-started')
    const topParentPath = `/${pathSegments[0]}/${pathSegments[1]}`;

    // Find the matching top-level navigation item
    const topParent = nav?.find((item) => item.path === topParentPath);

    return topParent?.children || [];
  });

  const isFlatList = computed(() => {
    return children.value.every(
      (child) => !child.children || child.children.length === 0
    );
  });

  const nav = computed(() => {
    if (isFlatList.value) {
      return [
        {
          title: "Overview",
          path: children.value.at(0)?.path || "",
          children: children.value,
        },
      ];
    }

    return children.value;
  });

  return {
    nav,
  };
}
