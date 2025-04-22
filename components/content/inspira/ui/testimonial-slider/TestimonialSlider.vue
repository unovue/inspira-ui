<template>
  <div class="mx-auto w-full max-w-3xl text-center">
    <!-- Testimonial image -->
    <div class="relative h-32">
      <div
        class="pointer-events-none absolute left-1/2 top-0 size-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-zinc-500/25 before:via-zinc-500/5 before:via-25% before:to-zinc-500/0 before:to-75%"
      >
        <div
          class="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]"
        >
          <transition-group name="testimonial-image">
            <div
              v-for="(testimonial, index) in testimonials"
              v-show="active === index"
              :key="`image-${index}`"
              class="absolute inset-0 -z-10 flex h-full flex-col"
            >
              <NuxtImg
                class="relative left-1/2 top-11 -translate-x-1/2 rounded-full"
                :src="testimonial.img"
                width="60"
                height="60"
                :alt="testimonial.name"
              />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <!-- Text -->
    <div class="mb-8 transition-all delay-300 duration-150 ease-in-out">
      <div
        ref="testimonialsRef"
        class="relative flex flex-col"
      >
        <transition-group name="testimonial-text">
          <div
            v-for="(testimonial, index) in testimonials"
            v-show="active === index"
            :key="`text-${index}`"
            class="w-full"
          >
            <div
              class="text-2xl font-bold text-zinc-900 before:content-['\201C'] after:content-['\201D'] dark:text-zinc-100"
            >
              {{ testimonial.quote }}
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="mt-4 flex w-full items-center justify-between gap-4 pt-12 md:pt-0">
      <button
        class="group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
        @click="handlePrev"
      >
        <Icon
          name="lucide:arrow-left"
          class="size-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
        />
      </button>

      <!-- Name and Org -->
      <div class="flex flex-col items-center gap-1">
        <span class="text-base italic">{{ testimonials.at(active)?.name }}</span>
        <span class="text-sm italic">{{ testimonials.at(active)?.role }}</span>
      </div>

      <button
        class="group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
        @click="handleNext"
      >
        <Icon
          name="lucide:arrow-right"
          class="size-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

const props = withDefaults(
  defineProps<{
    testimonials?: Testimonial[];
    autoRotate?: boolean;
    duration?: number;
  }>(),
  {
    autoRotate: true,
    duration: 5,
    testimonials: () => [],
  },
);

const active = ref<number>(0);
const autorotate = ref(props.autoRotate);
const testimonialsRef = ref<HTMLElement | null>(null);
let intervalId: number | null = null;

function heightFix() {
  if (testimonialsRef.value && testimonialsRef.value.parentElement) {
    testimonialsRef.value.parentElement.style.height = `${testimonialsRef.value.clientHeight}px`;
  }
}

function setActiveIndex(index: number) {
  active.value = index;
  autorotate.value = false;
  resetAutorotate();
}

function startAutorotate() {
  intervalId = window.setInterval(() => {
    active.value = active.value + 1 === props.testimonials.length ? 0 : active.value + 1;
    heightFix();
  }, props.duration * 1000);
}

function resetAutorotate() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  if (autorotate.value) {
    startAutorotate();
  }
}

function handleNext() {
  setActiveIndex((active.value + 1) % props.testimonials.length);
}

function handlePrev() {
  setActiveIndex((active.value - 1 + props.testimonials.length) % props.testimonials.length);
}

onMounted(() => {
  heightFix();
  if (autorotate.value) {
    startAutorotate();
  }
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style>
/* Testimonial image transitions */
.testimonial-image-enter-active {
  transition: all 700ms cubic-bezier(0.68, -0.3, 0.32, 1);
}
.testimonial-image-leave-active {
  transition: all 700ms cubic-bezier(0.68, -0.3, 0.32, 1);
}
.testimonial-image-enter-from {
  opacity: 0;
  transform: rotate(-60deg);
}
.testimonial-image-enter-to {
  opacity: 1;
  transform: rotate(0deg);
}
.testimonial-image-leave-from {
  opacity: 1;
  transform: rotate(0deg);
}
.testimonial-image-leave-to {
  opacity: 0;
  transform: rotate(60deg);
}

/* Testimonial text transitions */
.testimonial-text-enter-active {
  transition: all 500ms ease-in-out 200ms;
}
.testimonial-text-leave-active {
  transition: all 300ms ease-out 300ms;
  position: absolute;
}
.testimonial-text-enter-from {
  opacity: 0;
  transform: translateX(-1rem);
}
.testimonial-text-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.testimonial-text-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.testimonial-text-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}
</style>
