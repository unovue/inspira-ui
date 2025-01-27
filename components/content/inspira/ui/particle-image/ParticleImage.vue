<template>
  <img
    ref="imageParticleRef"
    :src="imageSrc"
    :class="cn('hidden w-32 h-32', $props.class)"
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

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import {
  inspiraImageParticles,
  type InspiraImageParticle as ImageParticle,
} from "./inspiraImageParticles";
import { ref, onMounted } from "vue";

type ParticleImageProps = {
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
};

defineProps<ParticleImageProps>();

let particles: ImageParticle;
const imageParticleRef = ref<HTMLImageElement>();

onMounted(() => {
  const { InspiraImageParticle } = inspiraImageParticles();
  particles = new InspiraImageParticle(imageParticleRef.value);
});
</script>
