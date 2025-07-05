<template>
  <UiScrollArea
    orientation="vertical"
    class="relative h-full overflow-hidden py-6 pr-6 text-sm md:pr-4"
    type="hover"
  >
    <LayoutHeaderNavMobile
      v-if="isMobile"
      class="mb-5 border-b pb-2"
    />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul
      v-if="config.aside.useLevel && config.aside.levelStyle === 'aside'"
      class="flex flex-col gap-1 border-b pb-4"
    >
      <li
        v-for="link in navigation"
        :key="link.id"
      >
        <NuxtLinkLocale
          :to="link.redirect ?? link._path"
          class="text-foreground/80 hover:bg-muted hover:text-primary flex h-8 items-center gap-2 rounded-md p-2 text-sm"
          :class="[
            path.startsWith(link._path) &&
              link._path !== '/' &&
              'bg-muted !text-primary font-medium',

            link._path === '/' && path === '/' && 'bg-muted !text-primary font-medium',
          ]"
        >
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
            class="self-center"
            :size="16"
          />
          {{ link.title }}

          <span
            v-for="(badge, i) in link.navBadges"
            :key="i"
          >
            <Badge
              :variant="badge.variant"
              :type="badge.type"
              :size="badge.size ?? 'sm'"
            >
              {{ badge.value }}
            </Badge>
          </span>
        </NuxtLinkLocale>
      </li>
    </ul>
    <LayoutAsideTree
      :links="tree"
      :level="0"
      :class="[config.aside.useLevel && config.aside.levelStyle === 'aside' ? 'pt-4' : 'pt-1']"
    />
  </UiScrollArea>
</template>

<script setup lang="ts">
defineProps<{ isMobile: boolean }>();

const { navDirFromPath } = useContentHelpers();
const config = useConfig();
const { locale, defaultLocale, navigation } = useI18nDocs();

const tree = computed(() => {
  const route = useRoute();
  const path = route.path.split("/");
  if (config.value.aside.useLevel) {
    const leveledPath = path.splice(0, locale.value === defaultLocale ? 2 : 3).join("/");

    const dir = navDirFromPath(leveledPath, navigation.value);
    return dir ?? [];
  }

  return navigation.value;
});

const path = computed(() => useRoute().path);
</script>
