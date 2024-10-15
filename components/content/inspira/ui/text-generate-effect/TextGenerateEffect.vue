<template>
  <div class="font-bold">
    <div class="mt-4">
      <div
        class="dark:text-white text-black text-2xl leading-snug tracking-wide"
      >
        <div ref="scope">
          <span
            v-for="(word, idx) in wordsArray"
            :key="word + idx"
            class="dark:text-white text-black inline-block"
            :style="spanStyle"
          >
            {{ word }}&nbsp;
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  words: {
    type: String,
    required: true,
  },
  filter: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: 0.7,
  },
});

const scope = ref(null);
const wordsArray = computed(() => props.words.split(" "));

const spanStyle = computed(() => ({
  opacity: 0,
  filter: props.filter ? "blur(10px)" : "none",
  transition: `opacity ${props.duration}s, filter ${props.duration}s`,
}));

onMounted(() => {
  if (scope.value) {
    const spans = (scope.value as HTMLElement).querySelectorAll("span");
    spans.forEach((span: HTMLElement, index: number) => {
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.filter = props.filter ? "blur(0px)" : "none";
      }, index * 200);
    });
  }
});
</script>
