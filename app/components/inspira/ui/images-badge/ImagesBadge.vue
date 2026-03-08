<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { motion } from "motion-v";

interface Props {
  text: string;
  images: string[];
  class?: HTMLAttributes["class"];
  /** Optional link URL */
  href?: string;
  /** Link target attribute (e.g., "_blank" for new tab) */
  target?: string;
  /** Folder dimensions { width, height } in pixels */
  folderSize?: { width: number; height: number };
  /** Image dimensions when teased (peeking) { width, height } in pixels */
  teaserImageSize?: { width: number; height: number };
  /** Image dimensions when hovered { width, height } in pixels */
  hoverImageSize?: { width: number; height: number };
  /** How far images translate up on hover in pixels */
  hoverTranslateY?: number;
  /** How far images spread horizontally on hover in pixels */
  hoverSpread?: number;
  /** Rotation angle for fanned images on hover in degrees */
  hoverRotation?: number;
}

const {
  text,
  images,
  href,
  target,
  folderSize = { width: 32, height: 24 },
  teaserImageSize = { width: 20, height: 14 },
  hoverImageSize = { width: 48, height: 32 },
  hoverTranslateY = -35,
  hoverSpread = 20,
  hoverRotation = 15,
  ...props
} = defineProps<Props>();

const isHovered = ref(false);

const displayImages = computed(() => images.slice(0, 3)); // Show up to 3 images in the badge

// Calculate folder tab dimensions proportionally
const tabWidth = computed(() => folderSize.width * 0.375);
const tabHeight = computed(() => folderSize.height * 0.25);
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :target="target"
    :class="
      cn(
        'inline-flex cursor-pointer items-center gap-2 perspective-[1000px] transform-3d',
        props.class,
      )
    "
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Folder Container -->
    <motion.div
      class="relative"
      :style="{
        width: `${folderSize.width}px`,
        height: `${folderSize.height}px`,
        transformStyle: 'preserve-3d',
      }"
    >
      <!-- Folder Back -->
      <div
        class="absolute inset-0 rounded-[4px] bg-linear-to-b from-amber-400 to-amber-500 shadow-sm dark:from-amber-500 dark:to-amber-600"
      >
        <!-- Folder Tab -->
        <div
          class="absolute left-0.5 rounded-t-[2px] bg-linear-to-b from-amber-300 to-amber-400 dark:from-amber-400 dark:to-amber-500"
          :style="{ top: `${-tabHeight * 0.65}px`, width: `${tabWidth}px`, height: `${tabHeight}px` }"
        />
      </div>

      <!-- Images that pop out -->
      <motion.div
        v-for="(image, index) in displayImages"
        :key="index"
        class="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800 dark:shadow-white/10 dark:ring-white/10"
        :animate="{
          x: `calc(-50% + ${isHovered ? (displayImages.length === 1 ? 0 : displayImages.length === 2 ? (index - 0.5) * hoverSpread : (index - 1) * hoverSpread) : 0}px)`,
          y: isHovered
            ? hoverTranslateY - (displayImages.length - 1 - index) * 3
            : -4 - (displayImages.length - 1 - index) * 1,
          rotate: isHovered
            ? displayImages.length === 1
              ? 0
              : displayImages.length === 2
                ? (index - 0.5) * hoverRotation
                : (index - 1) * hoverRotation
            : displayImages.length === 1
              ? 0
              : displayImages.length === 2
                ? (index - 0.5) * 3
                : (index - 1) * 3,
          width: isHovered ? hoverImageSize.width : teaserImageSize.width,
          height: isHovered ? hoverImageSize.height : teaserImageSize.height,
        }"
        :transition="{
          type: 'spring',
          stiffness: 400,
          damping: 25,
          delay: index * 0.03,
        }"
        :style="{ zIndex: 10 + index }"
      >
        <img
          :src="image"
          :alt="`Preview ${index + 1}`"
          class="h-full w-full object-cover"
        />
      </motion.div>

      <!-- Folder Front (flattens on hover) -->
      <motion.div
        class="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-[4px] bg-linear-to-b from-amber-300 to-amber-400 shadow-sm dark:from-amber-400 dark:to-amber-500"
        :animate="{
          rotateX: isHovered ? -45 : -25,
          scaleY: isHovered ? 0.8 : 1,
        }"
        :transition="{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }"
        :style="{
          transformStyle: 'preserve-3d',
          zIndex: 20,
        }"
      >
        <!-- Folder line detail -->
        <div class="absolute top-1 right-1 left-1 h-px bg-amber-200/50 dark:bg-amber-300/50" />
      </motion.div>
    </motion.div>

    <!-- Text -->
    <span class="text-sm font-medium text-neutral-700 dark:text-neutral-200">
      {{ text }}
    </span>
  </component>
</template>
