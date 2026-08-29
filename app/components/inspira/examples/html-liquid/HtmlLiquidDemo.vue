<script setup lang="ts">
interface Props {
  frequency?: number;
  mouseDamping?: number;
  speed?: number;
  strength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  frequency: 18,
  mouseDamping: 0.9,
  speed: 3,
  strength: 0.03,
});
</script>

<template>
  <div class="h-[36rem] w-full bg-zinc-950 p-3 sm:p-5">
    <HtmlLiquid
      v-bind="props"
      class="border border-white/15 bg-white text-zinc-950"
    >
      <HtmlEffectDemoSurface
        effect="liquid"
        description="Move across the page to send a soft ripple through the captured interface."
      />
    </HtmlLiquid>
  </div>
</template>
