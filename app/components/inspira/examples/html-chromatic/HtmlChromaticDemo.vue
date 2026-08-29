<script setup lang="ts">
interface Props {
  mouseDamping?: number;
  strength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  mouseDamping: 0.9,
  strength: 0.03,
});
</script>

<template>
  <div class="h-[36rem] w-full bg-zinc-950 p-3 sm:p-5">
    <HtmlChromatic
      v-bind="props"
      class="border border-white/15 bg-white text-zinc-950"
    >
      <HtmlEffectDemoSurface
        effect="chromatic"
        description="Move across the page to separate its red and blue channels from the center."
      />
    </HtmlChromatic>
  </div>
</template>
