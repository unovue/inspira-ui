<script setup lang="ts">
interface Props {
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
}

withDefaults(defineProps<Props>(), {
  speed: 70,
  initialDelay: 0,
  waitTime: 1500,
  deleteSpeed: 40,
  loop: true,
  showCursor: true,
  hideCursorOnType: false,
});

const text = [
  "experience",
  "dance",
  "love",
  "be alive",
  "create things that make the world a better place",
];
</script>

<template>
  <div
    class="bg-background text-foreground dark:text-muted flex h-full w-full items-center justify-center overflow-hidden p-16 text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
  >
    <p class="whitespace-pre-wrap">
      <span>We're born 🌞 to </span>
      <TypewriterText
        :text="text"
        :speed="speed"
        :initial-delay="initialDelay"
        :wait-time="waitTime"
        :delete-speed="deleteSpeed"
        :loop="loop"
        :show-cursor="showCursor"
        :hide-cursor-on-type="hideCursorOnType"
        cursor-char="_"
        class="text-pretty text-yellow-500"
      />
    </p>
  </div>
</template>
