<script setup lang="ts">
const color = defineModel<string>();

const chip = computed(() => ({ backgroundColor: color.value }));
const label = computed(() => color.value || "Choose color");
</script>

<template>
  <UPopover
    :ui="{
      content:
        'rounded-2xl bg-default/95 p-1 shadow-[0_20px_80px_-36px_rgba(15,23,42,0.58)] ring-default/80 backdrop-blur-xl',
    }"
  >
    <UButton
      :label="label"
      color="neutral"
      variant="subtle"
      class="h-9 max-w-full justify-start rounded-full px-2.5 font-mono text-xs uppercase tabular-nums"
    >
      <template #leading>
        <span
          :style="chip"
          class="ring-default/80 size-4 rounded-full ring"
        />
      </template>
    </UButton>

    <template #content>
      <UColorPicker
        v-model="color"
        class="p-2"
      />
    </template>
  </UPopover>
</template>
