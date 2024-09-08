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
        :class="{
          'opacity-100 blur-none': isRevealed[index],
          'opacity-0 blur-[var(--blur)]': !isRevealed[index],
        }"
        :data-blur-index="index"
      >
        <component :is="child" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, useSlots } from "vue";

const props = defineProps({
  duration: {
    type: Number,
    default: 1, // Duration in seconds for the transition
  },
  delay: {
    type: Number,
    default: 2, // Delay in seconds for each element
  },
  blur: {
    type: String,
    default: "10px", // Initial blur amount
  },
  inViewMargin: {
    type: String,
    default: "0px", // Margin for the IntersectionObserver
  },
  class: String,
});

const container = ref(null);
const observer = ref(null);
const isRevealed = ref([]);
const children = ref([]);
const slots = useSlots();

const getChildStyle = (index) => ({
  "--duration": `${props.duration}s`,
  "--blur": `${props.blur}`,
  "transition-delay": `${index * props.delay}s`, // Delay increases with the index
});

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(container.value.children).indexOf(entry.target);
      isRevealed.value[index] = true;
      observer.value.unobserve(entry.target); // Stop observing once revealed
    }
  });
};

onMounted(() => {
  observer.value = new IntersectionObserver(handleIntersect, {
    rootMargin: props.inViewMargin,
    threshold: 0.1,
  });

  children.value = slots.default ? slots.default() : [];
  isRevealed.value = Array(children.value.length).fill(false);

  const childElements = Array.from(container.value.children);
  childElements.forEach((child) => {
    observer.value.observe(child);
  });
});

onBeforeUnmount(() => {
  if (observer.value) observer.value.disconnect();
});

const beforeEnter = (el) => {
  el.style.transition = `opacity ${props.duration}s ease-in-out, filter ${props.duration}s ease-in-out`;
  el.style.opacity = 0;
  el.style.filter = `blur(${props.blur})`;
};

const enter = (el, done) => {
  // Apply the delay by multiplying the delay prop by the element's index
  const index = parseInt(el.getAttribute("data-blur-index")); // Retrieve the index from the custom attribute
  const delay = (index + 1) * props.delay * 1000; // Calculate delay in milliseconds

  setTimeout(() => {
    el.style.opacity = 1;
    el.style.filter = "blur(0)";
    done();
  }, delay);
};
</script>

<style scoped>
.fade-blur-enter-active,
.fade-blur-leave-active {
  transition: opacity var(--duration) ease-in-out,
    filter var(--duration) ease-in-out;
}
.fade-blur-enter-from,
.fade-blur-leave-to {
  opacity: 0;
  filter: blur(var(--blur));
}
</style>
