<template>
  <NuxtLink
    :to="to"
    :target="target"
    :class="[
      'bg-muted inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium',
      props.class,
    ]"
  >
    <template v-if="icon">
      <SmartIcon
        :name="icon"
        :size="16"
      />
      <UiSeparator
        class="mx-2 h-4"
        orientation="vertical"
      />
    </template>
    <span class="sm:hidden">{{ title }}</span>
    <span class="hidden sm:inline">
      {{ title }}
    </span>
    <Icon
      v-if="showRightIcon"
      name="lucide:arrow-right"
      class="ml-1 size-4"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to?: string;
  // eslint-disable-next-line no-undef
  target?: Target;
  icon?: string;
  title: string;
  showRightIcon?: boolean;
  class?: string;
}>();
defineSlots();
</script>
