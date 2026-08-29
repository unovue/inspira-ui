<script lang="ts" setup>
import type { DocsEnCollectionItem } from "@nuxt/content";

const props = defineProps<{
  class?: string;
  inline?: boolean;
}>();

const { locale, isEnabled } = useDocusI18n();
const collectionName = computed(() => (isEnabled.value ? `docs_${locale.value}` : "docs"));
const componentPath = computed(() => `/${locale.value}/components`);
const changelogPath = computed(() => `/${locale.value}/changelogs`);

const { data: collection } = await useAsyncData(`new_component_collection_${locale.value}`, () => {
  return queryCollection(collectionName.value as any).all() as Promise<DocsEnCollectionItem[]>;
});

const releaseGroups = computed(() => {
  const components = (collection.value ?? []).filter(
    (component) =>
      component.path.startsWith(componentPath.value) && component.path !== componentPath.value,
  );

  return [
    {
      label: "New releases",
      status: "new",
      components: components.filter((component) => component.badge?.toLowerCase() === "new"),
    },
    {
      label: "Updated",
      status: "updated",
      components: components.filter((component) => component.badge?.toLowerCase() === "updated"),
    },
  ].filter((group) => group.components.length);
});
</script>

<template>
  <div
    v-if="releaseGroups.length"
    class="z-20"
    :class="[props.inline ? 'relative' : 'absolute inset-x-0 top-0 mt-16', props.class]"
  >
    <div class="border-default/70 bg-default/88 border-y backdrop-blur-xl">
      <UContainer class="flex h-12 items-stretch overflow-hidden px-0 sm:px-6 lg:px-8">
        <UMarquee
          :overlay="false"
          :repeat="4"
          pause-on-hover
          class="min-w-0 flex-1 [--duration:25s] [--gap:--spacing(0)]"
          :ui="{ content: 'w-auto! justify-start motion-reduce:animate-none' }"
        >
          <div
            v-for="group in releaseGroups"
            :key="group.status"
            class="border-default/70 mx-16 flex h-12 shrink-0 items-stretch border-l"
          >
            <div
              class="border-default/70 flex shrink-0 items-center gap-2 border-r px-5 text-xs font-medium"
              :class="group.status === 'new' ? 'text-success' : 'text-warning'"
            >
              <span
                class="size-1.5"
                :class="group.status === 'new' ? 'bg-success' : 'bg-warning'"
              />
              {{ group.label }}
            </div>

            <NuxtLink
              v-for="component in group.components"
              :key="component.path"
              :to="component.path"
              class="group border-default/70 text-muted hover:bg-elevated/45 hover:text-highlighted focus-visible:ring-primary flex h-12 shrink-0 items-center gap-3 border-r px-6 text-sm transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset motion-reduce:transition-none"
            >
              {{ component.title }}
              <UIcon
                name="i-lucide-arrow-right"
                class="size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </NuxtLink>
          </div>
        </UMarquee>

        <NuxtLink
          :to="changelogPath"
          class="border-default/70 bg-default/90 text-toned hover:text-highlighted focus-visible:ring-primary relative z-10 hidden shrink-0 items-center border-l pl-5 text-xs transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset sm:flex"
        >
          Changelog
        </NuxtLink>
      </UContainer>
    </div>
  </div>
</template>
