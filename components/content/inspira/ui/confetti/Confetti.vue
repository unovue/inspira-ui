<template>
  <div>
    <canvas ref="canvasRef" :class="$props.class"></canvas>
    <slot />
  </div>
</template>

<script setup lang="ts">
import confetti, {
  GlobalOptions as ConfettiGlobalOptions,
  Options as ConfettiOptions,
  CreateTypes as ConfettiInstance,
} from "canvas-confetti";

type Api = {
  fire: (options?: ConfettiOptions) => void;
};

type ConfettiProps = {
  options?: ConfettiOptions;
  globalOptions?: ConfettiGlobalOptions;
  manualstart?: boolean;
  class?: string;
};

const props = defineProps<ConfettiProps>();

const instanceRef = ref<ConfettiInstance | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

// Confetti API
function fire(opts: ConfettiOptions = {}) {
  instanceRef.value?.({ ...props.options, ...opts });
}

const api: Api = { fire };

provide("ConfettiContext", api);

// Initialize confetti when mounted
onMounted(() => {
  if (canvasRef.value) {
    instanceRef.value = confetti.create(canvasRef.value, {
      ...props.globalOptions,
      resize: true,
    });

    if (!props.manualstart) {
      fire();
    }
  }
});

// Cleanup when unmounted
onUnmounted(() => {
  if (instanceRef.value) {
    instanceRef.value.reset();
    instanceRef.value = null;
  }
});

defineExpose({
  fire,
});
</script>
