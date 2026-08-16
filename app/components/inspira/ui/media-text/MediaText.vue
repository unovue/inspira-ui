<script setup lang="ts">
import type { UseInViewOptions } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { Motion, useInView } from "motion-v";
import { computed, ref } from "vue";

export type MediaTextMediaType = "image" | "video";
export type MediaTextTrigger = "hover" | "ref" | "inView";

interface MediaTextVariants {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
}

interface Props {
  firstText: string;
  secondText: string;
  mediaUrl: string;
  mediaType: MediaTextMediaType;
  mediaContainerClass?: HTMLAttributes["class"];
  fallbackUrl?: string;
  as?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  alt?: string;
  triggerType?: MediaTextTrigger;
  useInViewOptions?: UseInViewOptions;
  animationVariants?: MediaTextVariants;
  class?: HTMLAttributes["class"];
  leftTextClass?: HTMLAttributes["class"];
  rightTextClass?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  as: "p",
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  triggerType: "hover",
  useInViewOptions: () => ({ once: true, amount: 0.5 }),
  animationVariants: () => ({
    initial: { width: 0, opacity: 1 },
    animate: {
      width: "auto",
      opacity: 1,
      transition: { duration: 0.4, type: "spring", bounce: 0 },
    },
  }),
});

const componentRef = ref<HTMLElement | null>(null);
const isHovered = ref(false);
const isAnimating = ref(false);
const isInView = useInView(componentRef, props.useInViewOptions);

const shouldAnimate = computed(() => {
  if (props.triggerType === "hover") return isHovered.value;
  if (props.triggerType === "inView") return isInView.value;
  return isAnimating.value;
});

function animate() {
  isAnimating.value = true;
}

function reset() {
  isAnimating.value = false;
}

defineExpose({ animate, reset });
</script>

<template>
  <div
    ref="componentRef"
    :class="cn('flex', props.class)"
    @pointerenter="props.triggerType === 'hover' && (isHovered = true)"
    @pointerleave="props.triggerType === 'hover' && (isHovered = false)"
  >
    <Motion
      :as="props.as"
      layout
      :class="props.leftTextClass"
    >
      {{ props.firstText }}
    </Motion>

    <Motion
      :class="props.mediaContainerClass"
      :variants="props.animationVariants"
      initial="initial"
      :animate="shouldAnimate ? 'animate' : 'initial'"
    >
      <video
        v-if="props.mediaType === 'video'"
        :src="props.mediaUrl"
        :poster="props.fallbackUrl"
        class="h-full w-full object-cover"
        :autoplay="props.autoPlay"
        :loop="props.loop"
        :muted="props.muted"
        :playsinline="props.playsInline"
      />
      <img
        v-else
        :src="props.mediaUrl"
        :alt="props.alt || `${props.firstText} ${props.secondText}`"
        class="h-full w-full object-cover"
      />
    </Motion>

    <Motion
      :as="props.as"
      layout
      :class="props.rightTextClass"
    >
      {{ props.secondText }}
    </Motion>
  </div>
</template>
