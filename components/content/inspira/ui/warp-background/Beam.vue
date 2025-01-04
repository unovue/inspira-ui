<template>
  <div
    v-motion
    :style="{
      '--x': `${props.x}`,
      '--width': `${props.width}`,
      '--aspect-ratio': `${ar}`,
      '--background': `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
    }"
    class="absolute left-[var(--x)] top-0 [aspect-ratio:1/var(--aspect-ratio)] [background:var(--background)] [width:var(--width)]"
    :initial="{ y: '600px', x: '-50%' }"
    :enter="{
      y: '-100%',
      x: '-50%',
      transition: {
        duration: props.duration * 1000,
        delay: props.delay * 4000,
        repeat: Infinity,
        ease: 'linear',
      },
    }"
  />
</template>

<script setup lang="ts">
interface BeamProps {
  width: string | number;
  x: string | number;
  delay: number;
  duration: number;
}

const props = defineProps<BeamProps>();

const hue = Math.floor(Math.random() * 360);
const ar = Math.floor(Math.random() * 10) + 1;
</script>
