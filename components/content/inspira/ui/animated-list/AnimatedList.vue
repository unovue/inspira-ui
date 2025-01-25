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
        v-for="(data, idx) in itemsToShow"
        :key="data.id"
        v-motion
        :initial="getInitial(idx)"
        :enter="getEnter(idx)"
        :leave="getLeave()"
        :class="cn('mx-auto w-full')"
      >
        <component :is="data.node" />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

interface Props {
  class?: string;
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 1000,
});

const slots = useSlots();
const displayedItems = ref<{ node: unknown; id: string }[]>([]);
const nextIndex = ref(0);

onMounted(startLoop);

async function startLoop() {
  const notifications = slots.default ? (slots.default()[0].children ?? []) : [];
  if (!notifications.length) return;

  while (displayedItems.value.length < notifications.length) {
    displayedItems.value.push({
      node: notifications[nextIndex.value],
      id: `${nextIndex.value}-${Date.now()}`,
    });
    nextIndex.value = (nextIndex.value + 1) % notifications.length;
    await wait(props.delay);
  }

  while (true) {
    displayedItems.value.shift();
    displayedItems.value.push({
      node: notifications[nextIndex.value],
      id: `${nextIndex.value}-${Date.now()}`,
    });
    nextIndex.value = (nextIndex.value + 1) % notifications.length;
    await wait(props.delay);
  }
}

const itemsToShow = computed(() => displayedItems.value);

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getInitial(idx: number) {
  return { scale: 0, opacity: 0 };
}

function getEnter(idx: number) {
  return {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 40,
    },
  };
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
