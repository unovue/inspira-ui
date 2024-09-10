<template>
  <div ref="container" :class="class">
    <div
      v-for="(child, index) in children"
      :key="index"
      v-motion
      ref="childElements"
      :initial="getInitial()"
      :enter="getEnter(index)"
    >
      <component :is="child" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  duration: {
    type: Number,
    default: 1,
  },
  delay: {
    type: Number,
    default: 2,
  },
  blur: {
    type: String,
    default: "20px",
  },
  yOffset: {
    type: Number,
    default: 20, // Default offset for animation
  },
  class: String,
});

const container = ref(null);
const childElements = ref([]);
const slots = useSlots();
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
