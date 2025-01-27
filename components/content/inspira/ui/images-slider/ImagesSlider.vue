<template>
  <div
    ref="sliderRef"
    tabindex="0"
    class="relative flex size-full items-center justify-center overflow-hidden transition-colors focus:outline-none focus:ring-1"
    :style="{
      perspective: props.perspective,
    }"
  >
    <Transition
      mode="out-in"
      v-bind="transitionProps"
    >
      <div
        :key="currentImage"
        class=""
      >
        <img
          :src="currentImage"
          :class="props.imageClass"
        />
      </div>
    </Transition>
    <div
      v-if="hideOverlay !== true"
      :class="cn('absolute inset-0', props.overlayClass)"
    >
      <Transition
        appear
        enter-active-class="transition-all duration-300 delay-300 ease-in-out"
        enter-from-class="opacity-0 -translate-y-10"
      >
        <slot
          v-if="!isLoading"
          :current-index="currentIndex"
        ></slot>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntervalFn, onKeyStroke, useSwipe } from "@vueuse/core";
import { ref, watch, computed, type PropType, type Ref } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  hideOverlay: {
    type: Boolean,
    default: false,
  },
  overlayClass: {
    type: String,
    default: "",
  },
  imageClass: {
    type: String,
    default: "bg-cover bg-center bg-no-repeat",
  },
  enterFromClass: {
    type: String,
    default: "scale-0 origin-center",
  },
  enterActiveClass: {
    type: String,
    default: "transition-transform duration-300 ease-in-out",
  },
  leaveActiveClass: {
    type: String,
    default: "transition-transform duration-300 ease-in-out",
  },
  autoplay: {
    type: [Boolean, Number, String],
    default: false,
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (v: string) => ["vertical", "horizontal"].includes(v),
  },
  perspective: {
    type: String,
    default: "1000px",
  },
});

const sliderRef = ref(null);
const currentDirection = ref("up");
const currentIndex = defineModel("modelValue", {
  type: Number,
  default: 0,
});

function setCurrentDirection(dir: "prev" | "next") {
  if (props.direction === "horizontal") {
    currentDirection.value = dir === "next" ? "left" : "right";
  } else {
    currentDirection.value = dir === "next" ? "up" : "down";
  }
}

// Image Loading
const isLoading = ref(true);
const isTransitioning = ref(false);
const loadedImages: Ref<string[]> = ref([]);
const currentImage = computed(() => loadedImages.value[currentIndex.value]);

function loadImages() {
  isLoading.value = true;
  const promises = props.images.map(
    (imageSrc): Promise<string> =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => resolve(imageSrc);
        image.onerror = () => reject(imageSrc);
      }),
  );
  Promise.all(promises).then((resolvedImages) => {
    loadedImages.value = resolvedImages;
    isLoading.value = false;
  });
}
loadImages();

// Navigation

function onPrev() {
  if (isLoading.value || isTransitioning.value) {
    return false;
  }
  setCurrentDirection("prev");
  let target = currentIndex.value - 1;
  if (target < 0) {
    target = loadedImages.value.length - 1;
  }
  currentIndex.value = target;
}

function onNext() {
  if (isLoading.value || isTransitioning.value) {
    return false;
  }
  setCurrentDirection("next");
  let target = currentIndex.value + 1;
  if (target >= loadedImages.value?.length - 1) {
    target = 0;
  }
  currentIndex.value = target;
}

onKeyStroke(
  ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  (ev) => {
    ev.preventDefault();
    if (isLoading.value || isTransitioning.value) {
      return false;
    }
    pause();
    if (["ArrowUp", "ArrowLeft"].includes(ev.key)) {
      onPrev();
    } else {
      onNext();
    }
  },
  {
    target: sliderRef,
  },
);

const { direction: swipingDirection, isSwiping } = useSwipe(sliderRef, {
  passive: false,
});
watch(swipingDirection, (dir) => {
  switch (dir) {
    case "up":
    case "left":
      return onPrev();
    case "down":
    case "right":
      return onNext();
  }
});

watch(isSwiping, setSwiping);

function setSwiping(v: boolean) {
  if (v) {
    pause();
    return;
  }

  resume();
}

// Autoplay
const autoplayInterval = computed(() => {
  if (props.autoplay === false) return 0;
  else if (props.autoplay === true) return 5000;
  else if (typeof props.autoplay === "string") {
    return +props.autoplay;
  } else return props.autoplay;
});

const { pause, resume, isActive } = useIntervalFn(() => {
  onNext();
}, autoplayInterval);

watch(isLoading, (v) => {
  if (v) pause();
  else resume();
});

// Transitions
function lockViewport() {
  isTransitioning.value = true;
}

function unlockViewport() {
  isTransitioning.value = false;
  if (isActive.value === false && autoplayInterval.value) {
    resume();
  }
}
const transitionProps = computed(() => {
  const bind = {
    enterActiveClass: props.enterActiveClass,
    leaveActiveClass: props.leaveActiveClass,
    enterFromClass: props.enterFromClass,
    leaveToClass: "",
    onBeforeLeave: lockViewport,
    onAfterEnter: unlockViewport,
  };

  switch (currentDirection.value) {
    case "up":
      bind.leaveToClass = "-translate-y-full";
      break;
    case "down":
      bind.leaveToClass = "translate-y-full";
      break;
    case "left":
      bind.leaveToClass = "-translate-x-full";
      break;
    case "right":
      bind.leaveToClass = "translate-x-full";
      break;
  }

  return bind;
});
</script>
