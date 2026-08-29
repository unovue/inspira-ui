<script setup lang="ts">
interface Props {
  mouseDamping?: number;
  mouseEnabled?: boolean;
  strength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  mouseDamping: 0.9,
  mouseEnabled: false,
  strength: 1.25,
});
</script>

<template>
  <div class="h-[36rem] w-full bg-zinc-950 p-3 sm:p-5">
    <HtmlDrag
      v-bind="props"
      class="border border-white/15 bg-white text-zinc-950"
    >
      <HtmlEffectDemoSurface
        effect="drag"
        headline="Bend the page."
        :description="
          props.mouseEnabled
            ? 'Scroll or press and drag to bend the captured interface.'
            : 'Scroll over the surface to bend it. The HTML remains selectable.'
        "
      />
    </HtmlDrag>
  </div>
</template>
