<template>
  <form
    :class="[
      'w-full relative max-w-xl mx-auto bg-white dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200',
      vanishingText && 'bg-gray-50',
    ]"
    @submit.prevent="handleSubmit"
  >
    <!-- Canvas Element -->
    <canvas
      :class="[
        'absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20',
        animating ? 'opacity-100' : 'opacity-0',
      ]"
      ref="canvasRef"
    />

    <!-- Text Input -->
    <input
      v-model="vanishingText"
      :disabled="animating"
      ref="inputRef"
      type="text"
      class="w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20"
      :class="{ 'text-transparent dark:text-transparent': animating }"
      @keydown.enter="handleKeyDown"
    />

    <!-- Submit Button -->
    <button
      :disabled="!vanishingText"
      type="submit"
      class="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-700 transition duration-200 flex items-center justify-center"
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
            strokeDashoffset: vanishingText ? '0' : '50%',
            transition: 'stroke-dashoffset 0.3s linear',
          }"
        />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
      </svg>
    </button>

    <!-- Placeholder Text -->
    <div class="absolute inset-0 flex items-center rounded-full pointer-events-none">
      <Transition
        v-show="!vanishingText"
        mode="out-in"
        enter-active-class="transition duration-300 ease-out"
        leave-active-class="transition duration-300 ease-in"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <p
          :key="currentPlaceholder"
          class="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-10 text-left w-[calc(100%-2rem)] truncate"
        >
          {{ placeholders[currentPlaceholder] }}
        </p>
      </Transition>
    </div>
  </form>
</template>

<script setup lang="ts">
// Define interfaces for props and data structures
interface Props {
  placeholders: string[];
}

interface PixelData {
  x: number;
  y: number;
  color: string;
}

interface AnimatedPixel extends PixelData {
  r: number;
}

const vanishingText = defineModel<string>({
  default: "",
});
const emit = defineEmits(["submit", "change"]);

// template refs
const canvasRef = templateRef<HTMLCanvasElement>("canvasRef");
const inputRef = templateRef<HTMLInputElement>("inputRef");

// normal refs
const currentPlaceholder = ref<number>(0);
const animating = ref<boolean>(false);
const intervalRef = ref<number | null>(null);
const newDataRef = ref<AnimatedPixel[]>([]);
const animationFrame = ref<number | null>(null);

// props
const props = withDefaults(defineProps<Props>(), {
  placeholders: () => ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
});

// Focus on input when mounted
onMounted(() => {
  inputRef.value.focus();
});

const changePlaceholder = (): void => {
  intervalRef.value = window.setInterval(() => {
    currentPlaceholder.value = (currentPlaceholder.value + 1) % props.placeholders.length;
  }, 3000);
};

const handleVisibilityChange = (): void => {
  if (document.visibilityState !== "visible" && intervalRef.value) {
    clearInterval(intervalRef.value);
    intervalRef.value = null;
  } else if (document.visibilityState === "visible") {
    changePlaceholder();
  }
};

const draw = (): void => {
  if (!inputRef.value || !canvasRef.value) return;

  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const computedStyles = getComputedStyle(inputRef.value);

  canvas.width = 800;
  canvas.height = 800;
  ctx.clearRect(0, 0, 800, 800);

  const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
  ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
  ctx.fillStyle = "#FFF";
  ctx.fillText(vanishingText.value, 16, 40);

  const imageData = ctx.getImageData(0, 0, 800, 800);
  const pixelData = imageData.data;
  const newData: PixelData[] = [];

  for (let t = 0; t < 800; t++) {
    let i = 4 * t * 800;
    for (let n = 0; n < 800; n++) {
      let e = i + 4 * n;
      if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
        newData.push({
          x: n,
          y: t,
          color: `rgba(${pixelData[e]}, ${pixelData[e + 1]}, ${pixelData[e + 2]}, ${pixelData[e + 3]})`,
        });
      }
    }
  }
  newDataRef.value = newData.map(({ x, y, color }) => ({ x, y, r: 1, color }));
};

const animate = (start: number): void => {
  const animateFrame = (pos: number = 0): void => {
    animationFrame.value = requestAnimationFrame(() => {
      const newArr: AnimatedPixel[] = [];
      for (const current of newDataRef.value) {
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
        newDataRef.value.forEach(({ x, y, r, color }) => {
          if (x > pos) {
            ctx.beginPath();
            ctx.rect(x, y, r, r);
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.stroke();
          }
        });
      }
      if (newDataRef.value.length > 0) {
        animateFrame(pos - 8);
      } else {
        vanishingText.value = "";
        animating.value = false;
        setTimeout(() => {
          // regain focus after animation
          inputRef.value.focus();
        }, 100);
      }
    });
  };
  animateFrame(start);
};

const handleKeyDown = (e: KeyboardEvent): void => {
  if (e.key === "Enter" && !animating.value) {
    vanishAndSubmit();
  }
};

const vanishAndSubmit = (): void => {
  animating.value = true;
  vanishingText.value = vanishingText.value;
  draw();
  if (vanishingText.value) {
    const maxX = Math.max(...newDataRef.value.map(({ x }) => x));
    animate(maxX);
    emit("submit", vanishingText.value);
  }
};

const handleSubmit = (): void => {
  vanishAndSubmit();
};

// Watch for value changes
watch(vanishingText, (newVal: string) => {
  if (!animating.value) {
    emit("change", { target: { value: newVal } });
  }
});

onMounted(() => {
  changePlaceholder();
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onBeforeUnmount(() => {
  if (intervalRef.value) {
    clearInterval(intervalRef.value);
  }
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value);
  }
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>
 
