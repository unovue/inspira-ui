<template>
  <div :class="cn('flex flex-col items-center gap-4', $props.class)">
    <transition-group
      name="list"
      tag="div"
      class="flex flex-col-reverse items-center gap-3"
      move-class="move"
    >
      <!-- Only render the items up to the current index -->
      <div
        v-for="(item, idx) in itemsToShow"
        :key="idx"
        v-motion
        :initial="getInitial(idx)"
        :enter="getEnter(idx)"
        :leave="getLeave()"
        :class="cn('mx-auto w-full')"
      >
        <component :is="item" />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import type { Slot, VNodeNormalizedChildren } from "vue";
import { cn } from "~/lib/utils";

interface Props {
  class?: string;
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 1000,
});

const slots = useSlots();
const index = ref(0);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const slotsArray = ref<any>([]);

onMounted(loadComponents);

const itemsToShow = computed(() => {
  return slotsArray.value.slice(0, index.value);
});

async function loadComponents() {
  slotsArray.value = slots.default ? slots.default()[0].children : [];

  while (index.value < slotsArray.value.length) {
    index.value++;
    await wait(props.delay);
  }
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Get initial animation (all items appear with no scale and opacity 0)
function getInitial(idx: number) {
  return idx === index.value - 1
    ? {
        scale: 0,
        opacity: 0,
      }
    : undefined; // Only animate the newly added item
}

// Get enter animation (only the latest item animates in)
function getEnter(idx: number) {
  return idx === index.value - 1
    ? {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 250,
          damping: 40,
        },
      }
    : undefined; // Only animate the newly added item
}

// Get leave animation (same for all)
function getLeave() {
  return {
    scale: 0,
    opacity: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 40,
    },
  };
}
</script>

<!-- Add style for smooth transition on move -->
<style scoped>
/* This class is added by transition-group when items move */
.move {
  transition: transform 0.4s ease-out;
}
</style>
