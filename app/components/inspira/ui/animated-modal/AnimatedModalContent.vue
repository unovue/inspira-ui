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
    class="flex flex-1 flex-col p-8 md:p-10"
    :class="[props.class]"
  >
    <slot />
  </div>
</template>
