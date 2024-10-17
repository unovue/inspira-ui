<template>
  <div
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    @mousemove="mouseMoveHandler"
    @touchstart="mouseEnterHandler"
    @touchend="mouseLeaveHandler"
    @touchmove="touchMoveHandler"
    ref="cardRef"
    :class="[
      'w-full max-w-[40rem] bg-[#1d1c20] border border-white/[0.08] rounded-lg p-4 sm:p-6 md:p-8 relative overflow-hidden',
      props.class,
    ]"
  >
    <slot name="header" />
    <div class="h-40 relative flex items-center overflow-hidden">
      <div
        :style="{
          width: '100%',
          opacity: widthPercentage > 0 ? 1 : 0,
          clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          transition: isMouseOver ? 'none' : 'all 0.4s ease-out',
        }"
        class="absolute bg-[#1d1c20] z-20 will-change-transform"
      >
        <slot name="text" />
      </div>

      <div
        :style="{
          left: `${widthPercentage}%`,
          transform: `rotate(${rotateDeg}deg)`,
          opacity: widthPercentage > 0 ? 1 : 0,
          transition: isMouseOver ? 'none' : 'all 0.4s ease-out',
        }"
        class="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
      ></div>

      <div
        class="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
      >
        <slot name="revealText" />

        <TextRevealStars :starsCount :starsClass />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  starsCount?: number;
  starsClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
  class: "",
  starsCount: 130,
});

const cardRef = ref<HTMLElement | null>(null);
const widthPercentage = ref(0);
const left = ref(0);
const localWidth = ref(0);
const isMouseOver = ref(false);

const rotateDeg = computed(() => (widthPercentage.value - 50) * 0.1);

onMounted(() => {
  if (cardRef.value) {
    const rect = cardRef.value.getBoundingClientRect();
    left.value = rect.left;
    localWidth.value = rect.width;
  }

  window.addEventListener("resize", updateMeasurements);
});

const updateMeasurements = () => {
  if (cardRef.value) {
    const rect = cardRef.value.getBoundingClientRect();
    left.value = rect.left;
    localWidth.value = rect.width;
  }
};

const mouseMoveHandler = (event: MouseEvent) => {
  event.preventDefault();
  if (cardRef.value) {
    const rect = cardRef.value.getBoundingClientRect(); // Get current position
    const relativeX = event.clientX - rect.left;
    widthPercentage.value = (relativeX / rect.width) * 100;
  }
};

const mouseLeaveHandler = () => {
  isMouseOver.value = false;
  setTimeout(() => {
    if (!isMouseOver.value) {
      widthPercentage.value = 0;
    }
  }, 100);
};

const mouseEnterHandler = () => {
  isMouseOver.value = true;
};

const touchMoveHandler = (event: TouchEvent) => {
  event.preventDefault();
  if (cardRef.value) {
    const rect = cardRef.value.getBoundingClientRect();
    const relativeX = event.touches[0]!.clientX - rect.left;
    widthPercentage.value = (relativeX / rect.width) * 100;
  }
};
</script>
