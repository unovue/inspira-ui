<template>
  <div
    ref="container"
    :class="props.class"
  >
    <div
      v-for="(child, index) in children"
      :key="index"
      ref="childElements"
      v-motion
      :initial="getInitial()"
      :enter="getEnter(index)"
    >
      <component :is="child" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  duration?: number;
  delay?: number;
  blur?: string;
  yOffset?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 1,
  delay: 2,
  blur: "20px",
  yOffset: 20,
});

const container = ref(null);
const childElements = ref([]);
const slots = useSlots();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const children = ref<any>([]);

onMounted(() => {
  // This will reactively capture all content provided in the default slot
  watchEffect(() => {
    children.value = slots.default ? slots.default() : [];
  });
});

function getInitial() {
  return {
    opacity: 0,
    filter: `blur(${props.blur})`,
    y: props.yOffset,
    transition: {
      duration: 0,
      easing: "easeInOut",
      delay: 0,
    },
  };
}

function getEnter(index: number) {
  return {
    opacity: 1,
    filter: `blur(0px)`,
    y: 0,
    transition: {
      duration: props.duration * 1000,
      easing: "easeInOut",
      delay: props.delay * index * 1000,
    },
  };
}
</script>
