<script setup lang="ts">
interface Props {
  scale?: number;
  speed?: number;
  strength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  scale: 6,
  speed: 1,
  strength: 0.03,
});
</script>

<template>
  <div class="h-[36rem] w-full bg-zinc-950 p-3 sm:p-5">
    <HtmlBlaze
      v-bind="props"
      class="border border-white/15 bg-white text-zinc-950"
    >
      <HtmlEffectDemoSurface
        effect="blaze"
        headline="Heat changes form."
        description="Rising heat, smoke, and sparks distort the lower edge of the captured interface."
      />
    </HtmlBlaze>
  </div>
</template>
