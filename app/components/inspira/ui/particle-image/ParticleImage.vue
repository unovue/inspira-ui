<script lang="ts" setup>
import type { InspiraImageParticle as ImageParticle } from "./inspiraImageParticles";
import { onMounted, ref } from "vue";
import { inspiraImageParticles } from "./inspiraImageParticles";

interface ParticleImageProps {
  imageSrc: string;
  class?: string;
  canvasWidth?: string;
  canvasHeight?: string;
  gravity?: string;
  particleSize?: string;
  particleGap?: string;
  mouseForce?: string;
  renderer?: "default" | "webgl";
  color?: string;
  colorArr?: number[];
  initPosition?: "random" | "top" | "left" | "bottom" | "right" | "misplaced" | "none";
  initDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  fadePosition?: "explode" | "top" | "left" | "bottom" | "right" | "random" | "none";
  fadeDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  noise?: number;
  responsiveWidth?: boolean;
}

defineProps<ParticleImageProps>();

let _particles: ImageParticle;
const imageParticleRef = ref<HTMLImageElement>();

onMounted(() => {
  const { InspiraImageParticle } = inspiraImageParticles();
  _particles = new InspiraImageParticle(imageParticleRef.value);
});
</script>

<template>
  <img
    ref="imageParticleRef"
    :src="imageSrc"
    class="hidden h-32 w-32"
    :class="[$props.class]"
    :data-particle-gap="particleGap"
    :data-width="canvasWidth"
    :data-height="canvasHeight"
    :data-gravity="gravity"
    :data-particle-size="particleSize"
    :data-mouse-force="mouseForce"
    :data-renderer="renderer"
    :data-color="color"
    :data-color-arr="colorArr"
    :data-init-position="initPosition"
    :data-init-direction="initDirection"
    :data-fade-position="fadePosition"
    :data-fade-direction="fadeDirection"
    :data-noise="noise"
    :data-responsive-width="responsiveWidth"
  />
</template>
