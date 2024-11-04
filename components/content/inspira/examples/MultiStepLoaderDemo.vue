<template>
  <div class="flex flex-col gap-4 items-start">
    <!-- Simple Loading Demo -->
    <section class="w-full">
      <h2 class="text-lg font-semibold mb-2">Simple Loading Demo</h2>
      <MultiStepLoader
        :steps="simpleLoadingSteps"
        :loading="uiState.isSimpleLoading"
        @state-change="handleStateChange"
        @complete="handleComplete"
      />
      <UiButton
        @click="toggleSimpleLoading"
        class="mt-4"
      >
        {{ uiState.isSimpleLoading ? "Stop Loading" : "Start Simple Loading" }}
      </UiButton>
    </section>

    <!-- Async Loading Demo -->
    <section class="w-full">
      <h2 class="text-lg font-semibold mb-2">Async Loading Demo</h2>
      <MultiStepLoader
        :steps="asyncLoadingSteps"
        :loading="uiState.isAfterTextLoading"
        @state-change="handleStateChange"
        @complete="handleComplete"
      />
      <UiButton
        @click="startAsyncLoading"
        class="mt-4"
        :disabled="uiState.isAfterTextLoading"
      >
        Start Async Loading
      </UiButton>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Step {
  text: string; // Display text for the step
  afterText?: string; // Text to show after step completion
  async?: boolean; // If true, waits for external trigger to proceed
  duration?: number; // Duration in ms before proceeding (default: 2000)
  action?: () => void; // Function to execute when step is active
}
// State management
const loaderStates = reactive({
  isProcessing: false,
  isSavingOrder: false,
  sendingMails: false,
});

const uiState = reactive({
  isSimpleLoading: false,
  isAfterTextLoading: false,
});

// Simple loading steps configuration
const simpleLoadingSteps = computed<Step[]>(() => [
  {
    text: "Checking Payment",
    duration: 2000,
  },
  {
    text: "Saving Order",
    duration: 1500,
  },
  {
    text: "Sending Confirmation Email",
    duration: 2500,
  },
  {
    text: "Processing Request",
    duration: 1800,
  },
  {
    text: "Finalizing",
    duration: 1000,
  },
  {
    text: "Redirecting",
    duration: 1000,
    action: handleSimpleLoadingComplete,
  },
]);

// Async loading steps configuration
const asyncLoadingSteps = computed<Step[]>(() => [
  {
    text: "Checking Payment",
    async: loaderStates.isProcessing,
    afterText: "Payment Verified",
  },
  {
    text: "Saving Order",
    async: loaderStates.isSavingOrder,
    afterText: "Order Saved",
  },
  {
    text: "Sending Confirmation Email",
    async: loaderStates.sendingMails,
    afterText: "Email Sent",
  },
  {
    text: "Redirecting",
    duration: 1000,
    action: handleAsyncLoadingComplete,
  },
]);

// Event handlers
const handleStateChange = (state: number) => {
  console.log("Loading state changed:", state);
};

const handleComplete = () => {
  console.log("Loading sequence completed");
};

const handleSimpleLoadingComplete = () => {
  alert("Simple loading complete, redirecting...");
  uiState.isSimpleLoading = false;
};

const handleAsyncLoadingComplete = () => {
  alert("Async loading complete, redirecting...");
  uiState.isAfterTextLoading = false;
};

// Action handlers
const toggleSimpleLoading = () => {
  uiState.isSimpleLoading = !uiState.isSimpleLoading;
};

const startAsyncLoading = async () => {
  // Reset states
  uiState.isAfterTextLoading = true;
  loaderStates.isProcessing = true;
  loaderStates.isSavingOrder = true;
  loaderStates.sendingMails = true;

  // Simulate async operations
  const simulateAsyncStep = (stateProp: keyof typeof loaderStates, delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        loaderStates[stateProp] = false;
        resolve();
      }, delay);
    });
  };

  try {
    await simulateAsyncStep("isProcessing", 2000);
    await simulateAsyncStep("isSavingOrder", 3000);
    await simulateAsyncStep("sendingMails", 2500);
  } catch (error) {
    console.error("Error during async loading:", error);
    uiState.isAfterTextLoading = false;
  }
};
</script>

<style scoped>
section {
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

section:last-child {
  border-bottom: none;
}
</style>
