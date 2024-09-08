<template>
  <div ref="container" :class="class">
    <TransitionGroup
      tag="div"
      name="fade-blur"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <div
        v-for="(child, index) in children"
        :key="index"
        :style="getChildStyle(index)"
        :class="childClass(index)"
        :data-blur-index="index"
        ref="childElements"
      >
        <component :is="child" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, onMounted, useSlots } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

// Define props using defineProps
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
    default: "10px",
  },
  inViewMargin: {
    type: String,
    default: "0px",
  },
  yOffset: {
    type: String,
    default: "20px", // Default offset for animation
  },
  class: String,
});

// Refs
const container = ref(null);
const children = ref([]);
const slots = useSlots();
const childElements = ref([]);

// Initialize revealed state
const isRevealed = ref([]);

// Methods to handle style and class dynamically
const getChildStyle = (index) => ({
  "--duration": `${props.duration}s`,
  "--blur": `${props.blur}`,
  "--y-offset": props.yOffset,
  "transition-delay": `${index * props.delay}s`,
});

const childClass = (index) => ({
  'opacity-100 blur-none translate-y-0': isRevealed.value[index],
  [`opacity-0 blur-[${props.blur}] translate-y-[${props.yOffset}]`]: !isRevealed.value[index],
});

// Observer callback
const observeChild = (entry) => {
  if (entry.isIntersecting) {
    const index = Array.from(container.value.children).indexOf(entry.target);
    isRevealed.value[index] = true;
    entry.target.style.transform = "translateY(0)"; // Remove y offset on reveal
    entry.target.style.filter = "blur(0)"; // Remove blur on reveal
    entry.target.style.opacity = 1; // Set opacity to 100%
  }
};

// Use Intersection Observer from VueUse
useIntersectionObserver(childElements, observeChild, {
  rootMargin: props.inViewMargin,
  threshold: 0.1,
});

// Setup children on mount
onMounted(() => {
  children.value = slots.default ? slots.default() : [];
  isRevealed.value = Array(children.value.length).fill(false);
});

// Before and Enter functions for transition effects
const beforeEnter = (el) => {
  el.style.transition = `opacity ${props.duration}s ease-in-out, filter ${props.duration}s ease-in-out, transform ${props.duration}s ease-in-out`;
  el.style.opacity = 0;
  el.style.filter = `blur(${props.blur})`;
  el.style.transform = `translateY(${props.yOffset})`;
};

const enter = (el, done) => {
  const index = parseInt(el.getAttribute("data-blur-index"));
  const delay = (index + 1) * props.delay * 1000;

  setTimeout(() => {
    el.style.opacity = 1;
    el.style.filter = "blur(0)";
    el.style.transform = "translateY(0)";
    done();
  }, delay);
};
</script>

<style scoped>
.fade-blur-enter-active,
.fade-blur-leave-active {
  transition: opacity var(--duration) ease-in-out, filter var(--duration) ease-in-out, transform var(--duration) ease-in-out;
}
.fade-blur-enter-from,
.fade-blur-leave-to {
  opacity: 0;
  filter: blur(var(--blur));
  transform: translateY(var(--y-offset));
}
</style>
