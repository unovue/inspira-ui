<script setup lang="ts">
interface Props {
  cellSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  cellSize: 8,
});
</script>

<template>
  <div class="h-[36rem] w-full bg-zinc-950 p-3 sm:p-5">
    <HtmlAscii
      v-bind="props"
      class="border border-white/15 bg-white text-zinc-950"
    >
      <HtmlEffectDemoSurface
        effect="ascii"
        headline="Type becomes texture."
        description="The captured interface is rebuilt from luminance-matched bitmap glyphs. Press to view it in monochrome."
      />
    </HtmlAscii>
  </div>
</template>
