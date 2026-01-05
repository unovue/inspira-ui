<script setup lang="ts">
import { AnimatePresence, Motion, useMotionValue, useSpring, useTransform } from "motion-v";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

interface Props {
  title?: string;
  duration?: number;
  testimonials: TestimonialItem[];
}

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const { title = "Testimonials", testimonials, duration = 6000 } = defineProps<Props>();

const activeIndex = ref(0);
const containerRef = useTemplateRef("containerRef");

// Mouse position for magnetic effect
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const springConfig = { damping: 25, stiffness: 200 };
const x = useSpring(mouseX, springConfig);
const y = useSpring(mouseY, springConfig);

// Transform for parallax on the large number
const numberX = useTransform(x, [-200, 200], [-20, 20]);
const numberY = useTransform(y, [-200, 200], [-10, 10]);

function handleMouseMove(e: MouseEvent) {
  const el = containerRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  mouseX.set(e.clientX - centerX);
  mouseY.set(e.clientY - centerY);
}

function goNext() {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length;
}

function goPrev() {
  activeIndex.value = (activeIndex.value - 1 + testimonials.length) % testimonials.length;
}

let timer: number | null = null;
onMounted(() => {
  timer = window.setInterval(goNext, duration);
});
onBeforeUnmount(() => {
  if (timer) window.clearInterval(timer);
});

const current = computed(() => testimonials[activeIndex.value]);

const paddedIndex = computed(() => String(activeIndex.value + 1).padStart(2, "0"));

const progressHeight = computed(() => `${((activeIndex.value + 1) / testimonials.length) * 100}%`);
</script>

<template>
  <div class="bg-background flex min-h-screen items-center justify-center overflow-hidden">
    <div
      ref="containerRef"
      class="relative w-full max-w-5xl"
      @mousemove="handleMouseMove"
    >
      <!-- Oversized index number -->
      <Motion
        as="div"
        class="text-foreground/6 pointer-events-none absolute top-1/2 -left-8 z-0 -translate-y-1/2 text-[28rem] leading-none font-bold tracking-tighter select-none"
        :style="{ x: numberX, y: numberY }"
      >
        <AnimatePresence mode="wait">
          <Motion
            :key="activeIndex"
            as="span"
            class="block"
            :initial="{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }"
            :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
            :exit="{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }"
            :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
          >
            {{ paddedIndex }}
          </Motion>
        </AnimatePresence>
      </Motion>

      <!-- Main content -->
      <div class="relative flex">
        <!-- Left column -->
        <div class="border-border flex flex-col items-center justify-center border-r pr-16">
          <Motion
            as="span"
            class="text-muted-foreground font-mono text-xs tracking-widest uppercase"
            :style="{ writingMode: 'vertical-rl', textOrientation: 'mixed' }"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ delay: 0.3 }"
          >
            {{ title }}
          </Motion>

          <!-- Vertical progress line -->
          <div class="bg-border relative mt-8 h-32 w-px">
            <Motion
              as="div"
              class="bg-foreground absolute top-0 left-0 w-full origin-top"
              :animate="{ height: progressHeight }"
              :transition="{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }"
            />
          </div>
        </div>

        <!-- Center content -->
        <div class="flex-1 py-12 pl-16">
          <!-- Company badge -->
          <AnimatePresence mode="wait">
            <Motion
              :key="activeIndex"
              as="div"
              class="mb-8"
              :initial="{ opacity: 0, x: -20 }"
              :animate="{ opacity: 1, x: 0 }"
              :exit="{ opacity: 0, x: 20 }"
              :transition="{ duration: 0.4 }"
            >
              <span
                v-if="current"
                class="text-muted-foreground border-border inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs"
              >
                <span class="bg-accent h-1.5 w-1.5 rounded-full" />
                {{ current.company }}
              </span>
            </Motion>
          </AnimatePresence>

          <!-- Quote -->
          <div class="relative mb-12 min-h-35">
            <AnimatePresence mode="wait">
              <Motion
                v-if="current"
                :key="activeIndex"
                as="blockquote"
                class="text-foreground text-4xl leading-[1.15] font-light tracking-tight md:text-5xl"
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Motion
                  v-for="(word, i) in current.quote.split(' ')"
                  :key="`${activeIndex}-${i}`"
                  as="span"
                  class="mr-[0.3em] inline-block"
                  :variants="{
                    hidden: { opacity: 0, y: 20, rotateX: 90 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: {
                        duration: 0.5,
                        delay: i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                    exit: {
                      opacity: 0,
                      y: -10,
                      transition: { duration: 0.2, delay: i * 0.02 },
                    },
                  }"
                >
                  {{ word }}
                </Motion>
              </Motion>
            </AnimatePresence>
          </div>

          <!-- Author row -->
          <div class="flex items-end justify-between">
            <AnimatePresence mode="wait">
              <Motion
                v-if="current"
                :key="activeIndex"
                as="div"
                class="flex items-center gap-4"
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :exit="{ opacity: 0, y: -20 }"
                :transition="{ duration: 0.4, delay: 0.2 }"
              >
                <Motion
                  as="div"
                  class="bg-foreground h-px w-8"
                  :initial="{ scaleX: 0 }"
                  :animate="{ scaleX: 1 }"
                  :transition="{ duration: 0.6, delay: 0.3 }"
                  :style="{ originX: 0 }"
                />
                <div>
                  <p class="text-foreground text-base font-medium">{{ current.author }}</p>
                  <p class="text-muted-foreground text-sm">{{ current.role }}</p>
                </div>
              </Motion>
            </AnimatePresence>

            <!-- Navigation -->
            <div class="flex items-center gap-4">
              <Motion
                as="button"
                class="group border-border relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border"
                :while-tap="{ scale: 0.95 }"
                @click="goPrev"
              >
                <Motion
                  as="div"
                  class="bg-foreground absolute inset-0"
                  :initial="{ x: '-100%' }"
                  :transition="{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }"
                />
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="text-foreground group-hover:text-foreground/30 relative z-10 transition-colors"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Motion>

              <Motion
                as="button"
                class="group border-border relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border"
                :while-tap="{ scale: 0.95 }"
                @click="goNext"
              >
                <Motion
                  as="div"
                  class="bg-foreground absolute inset-0"
                  :initial="{ x: '100%' }"
                  :transition="{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }"
                />
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="text-foreground group-hover:text-foreground/30 relative z-10 transition-colors"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Motion>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom ticker -->
      <div
        class="pointer-events-none absolute right-0 -bottom-20 left-0 overflow-hidden opacity-[0.08]"
      >
        <Motion
          as="div"
          class="flex text-6xl font-bold tracking-tight whitespace-nowrap"
          :animate="{ x: [0, -1000] }"
          :transition="{ duration: 20, repeat: Infinity, ease: 'linear' }"
        >
          <span
            v-for="i in 10"
            :key="i"
            class="mx-8"
          >
            {{ testimonials.map((t) => t.company).join(" • ") }} •
          </span>
        </Motion>
      </div>
    </div>
  </div>
</template>
