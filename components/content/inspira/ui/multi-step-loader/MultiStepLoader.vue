<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="loading && steps.length > 0"
      class="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl"
    >
      <div class="h-96 relative">
        <div class="flex relative justify-start max-w-xl mx-auto flex-col mt-40">
          <div
            v-for="(step, index) in steps"
            :key="index"
          >
            <div
              v-if="step"
              class="text-left flex items-center gap-2 mb-4 transition-all duration-300 ease-in-out"
              :style="{
                opacity:
                  index === currentState
                    ? 1
                    : Math.max(1 - Math.abs(index - currentState) * 0.2, 0),
                transform: `translateY(${
                  index === currentState ? -(currentState * 40) : -(currentState * 40)
                }px)`,
              }"
            >
              <SmartIcon
                v-if="
                  index < currentState ||
                  (index === steps.length - 1 && index === currentState && isLastStepComplete)
                "
                :size="24"
                name="i-heroicons-check-circle-solid"
                class="text-primary-500"
              />
              <SmartIcon
                v-else-if="
                  index === currentState && (!isLastStepComplete || index !== steps.length - 1)
                "
                :size="24"
                name="i-heroicons-arrow-path"
                class="animate-spin text-primary-500"
              />
              <SmartIcon
                v-else
                :size="24"
                name="i-heroicons-check-circle"
                class="text-black dark:text-white opacity-50"
              />
              <div class="flex flex-col">
                <span
                  :class="[
                    'text-black dark:text-white text-lg',
                    index > currentState && 'opacity-50',
                  ]"
                >
                  {{ step.text }}
                </span>
                <Transition
                  enter-active-class="transition-all duration-300"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                >
                  <span
                    v-if="
                      step.afterText &&
                      (index < currentState ||
                        (index === steps.length - 1 &&
                          index === currentState &&
                          isLastStepComplete))
                    "
                    class="text-sm text-gray-500 dark:text-gray-400 mt-1"
                  >
                    {{ step.afterText }}
                  </span>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-white dark:bg-black h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]"
      ></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface Step {
  text: string; // Display text for the step
  afterText?: string; // Text to show after step completion
  async?: boolean; // If true, waits for external trigger to proceed
  duration?: number; // Duration in ms before proceeding (default: 2000)
  action?: () => void; // Function to execute when step is active
}

const props = withDefaults(
  defineProps<{
    steps: Step[];
    loading?: boolean;
    defaultDuration?: number;
  }>(),
  {
    loading: false,
    defaultDuration: 1500,
  },
);

const emit = defineEmits<{
  "state-change": [number];
  complete: [];
}>();

const currentState = ref(0);
const stepStartTime = ref(Date.now());
const isLastStepComplete = ref(false);
let currentTimer: NodeJS.Timeout | null = null;

const executeStepAction = async (step: Step) => {
  if (typeof step.action === "function") {
    await step.action();
  }
};

const proceedToNextStep = async () => {
  const currentStep = props.steps[currentState.value];
  if (!currentStep) return;

  // Execute the current step's action
  await executeStepAction(currentStep);

  if (currentState.value < props.steps.length - 1) {
    currentState.value++;
    stepStartTime.value = Date.now();
    emit("state-change", currentState.value);
    processCurrentStep();
  } else {
    isLastStepComplete.value = true;
    emit("complete");
  }
};

const processCurrentStep = async () => {
  if (currentTimer) {
    clearTimeout(currentTimer);
  }

  const currentStep = props.steps[currentState.value];
  if (!currentStep) return;

  const duration = currentStep.duration || props.defaultDuration;

  if (!currentStep.async) {
    currentTimer = setTimeout(() => {
      proceedToNextStep();
    }, duration);
  }
};

// Watch for changes in the async property
watch(
  () => props.steps[currentState.value]?.async,
  async (isAsync, oldIsAsync) => {
    // Only proceed if changing from async to non-async
    if (isAsync === false && oldIsAsync === true) {
      const currentStep = props.steps[currentState.value];
      if (!currentStep) return;

      const duration = currentStep.duration || props.defaultDuration;
      currentTimer = setTimeout(() => {
        proceedToNextStep();
      }, duration);
    }
  },
);

watch(
  () => props.loading,
  (newLoading) => {
    if (newLoading) {
      currentState.value = 0;
      stepStartTime.value = Date.now();
      isLastStepComplete.value = false;
      processCurrentStep();
    } else if (currentTimer) {
      clearTimeout(currentTimer);
    }
  },
);

onUnmounted(() => {
  if (currentTimer) {
    clearTimeout(currentTimer);
  }
});
</script>
