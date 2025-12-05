<script setup lang="ts">
defineProps({
  class: String,
});
</script>

<template>
  <div
    class="grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50"
    :class="[$props.class]"
  >
    <slot />
  </div>
</template>
