<script setup lang="ts">
interface Props {
  placeholders: string[];
}

const props = defineProps<Props>();
const emit = defineEmits(["submit"]);

const vanishValue = defineModel({
  type: String,
  default: "",
});
const isAnimating = ref(false);
const currentPlaceholder = ref(0);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);
const newDataRef = ref<any[]>([]);
let intervalId: NodeJS.Timeout | null = null;

// Start placeholder rotation
const startAnimation = () => {
  intervalId = setInterval(() => {
    currentPlaceholder.value = (currentPlaceholder.value + 1) % props.placeholders.length;
  }, 3000);
};

// Handle visibility change
const handleVisibilityChange = () => {
  if (document.visibilityState !== "visible" && intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  } else if (document.visibilityState === "visible") {
    startAnimation();
  }
};

// Drawing functions
const draw = () => {
  if (!inputRef.value) return;
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = 800;
  canvas.height = 800;
  ctx.clearRect(0, 0, 800, 800);
  const computedStyles = getComputedStyle(inputRef.value);

  const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
  ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
  ctx.fillStyle = "#FFF";
  ctx.fillText(vanishValue.value, 16, 40);

  const imageData = ctx.getImageData(0, 0, 800, 800);
  const pixelData = imageData.data;
  const newData: any[] = [];

  for (let t = 0; t < 800; t++) {
    let i = 4 * t * 800;
    for (let n = 0; n < 800; n++) {
      let e = i + 4 * n;
      if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
        newData.push({
          x: n,
          y: t,
          color: [pixelData[e], pixelData[e + 1], pixelData[e + 2], pixelData[e + 3]],
        });
      }
    }
  }

  newDataRef.value = newData.map(({ x, y, color }) => ({
    x,
    y,
    r: 1,
    color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
  }));
};

// Animation function
const animate = (start: number) => {
  const animateFrame = (pos: number = 0) => {
    requestAnimationFrame(() => {
      const newArr = [];
      for (let i = 0; i < newDataRef.value.length; i++) {
        const current = newDataRef.value[i];
        if (current.x < pos) {
          newArr.push(current);
        } else {
          if (current.r <= 0) {
            current.r = 0;
            continue;
          }
          current.x += Math.random() > 0.5 ? 1 : -1;
          current.y += Math.random() > 0.5 ? 1 : -1;
          current.r -= 0.05 * Math.random();
          newArr.push(current);
        }
      }
      newDataRef.value = newArr;
      const ctx = canvasRef.value?.getContext("2d");
      if (ctx) {
        ctx.clearRect(pos, 0, 800, 800);
        newDataRef.value.forEach((t) => {
          const { x: n, y: i, r: s, color } = t;
          if (n > pos) {
            ctx.beginPath();
            ctx.rect(n, i, s, s);
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.stroke();
          }
        });
      }
      if (newDataRef.value.length > 0) {
        animateFrame(pos - 8);
      } else {
        vanishValue.value = "";
        isAnimating.value = false;
      }
    });
  };
  animateFrame(start);
};

// Event handlers
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Enter" && !isAnimating.value) {
    vanishAndSubmit();
  }
};

const vanishAndSubmit = () => {
  isAnimating.value = true;
  draw();

  if (vanishValue.value && inputRef.value) {
    const maxX = newDataRef.value.reduce(
      (prev, current) => (current.x > prev ? current.x : prev),
      0,
    );
    animate(maxX);
  }
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
  vanishAndSubmit();
  emit("submit", vanishValue.value);
};

// Lifecycle hooks
onMounted(() => {
  startAnimation();
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});

// Watch forvanishValue changes to trigger draw
watch(vanishValue, () => {
  draw();
});
</script>
<template>
  <form
    :class="[
      'w-full relative max-w-xl mx-auto bg-white dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200',
      vanishValue && 'bg-gray-50',
    ]"
    @submit.prevent="handleSubmit"
  >
    <canvas
      ref="canvasRef"
      :class="[
        'absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20',
        !isAnimating ? 'opacity-0' : 'opacity-100',
      ]"
    />
    <input
      v-model="vanishValue"
      type="text"
      :class="[
        'w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-12 rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20',
        isAnimating && 'text-transparent dark:text-transparent',
      ]"
      @keydown="handleKeyDown"
      ref="inputRef"
    />

    <button
      :disabled="!vanishValue"
      type="submit"
      class="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-gray-300 h-4 w-4"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M5 12l14 0"
          :style="{
            strokeDasharray: '50%',
            strokeDashoffset: vanishValue ? '0' : '50%',
            transition: 'stroke-dashoffset 0.3s linear',
          }"
        />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
      </svg>
    </button>

    <div class="absolute inset-0 flex items-center pointer-events-none">
      <TransitionGroup name="placeholder" tag="div" class="w-full h-12 relative overflow-hidden">
        <p
          v-if="!vanishValue"
          :key="currentPlaceholder"
          class="absolute inset-0 flex items-center dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-10 text-left"
        >
          {{ placeholders[currentPlaceholder] }}
        </p>
      </TransitionGroup>
    </div>
  </form>
</template>

<style scoped>
.placeholder-enter-active,
.placeholder-leave-active {
  transition: all 0.3s linear;
  position: absolute;
}

.placeholder-enter-from {
  transform: translateY(5px);
  opacity: 0;
}

.placeholder-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.placeholder-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.placeholder-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>
