<script setup lang="ts">
interface Props {
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: "",
});
</script>

<template>
  <div
    class="flex justify-end bg-gray-100 p-4 dark:bg-neutral-900"
    :class="[props.class]"
  >
    <slot />
  </div>
</template>
