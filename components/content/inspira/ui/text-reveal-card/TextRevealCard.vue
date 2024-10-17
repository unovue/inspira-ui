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
    <h2 v-if="title" :class="['text-white text-lg mb-2', props.titleClass]">
      {{ title }}
    </h2>
    <p
      v-if="description"
      :class="['text-[#a9a9a9] text-sm', props.descriptionClass]"
    >
      {{ description }}
    </p>

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
        <p
          :style="{
            textShadow: '4px 4px 15px rgba(0,0,0,0.5)',
          }"
          class="text-sm sm:text-3xl md:text-[3rem] py-4 sm:py-6 md:py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
        >
          {{ revealText }}
        </p>
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
        <p
          class="text-sm sm:text-3xl md:text-[3rem] py-4 sm:py-6 md:py-10 font-bold bg-clip-text text-transparent bg-[#323238]"
        >
          {{ text }}
        </p>
        <TextRevealStars />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  revealText: string;
  class?: string;
  title?: string;
  description?: string;
  titleClass?: string;
  descriptionClass?: string;
}>();

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
