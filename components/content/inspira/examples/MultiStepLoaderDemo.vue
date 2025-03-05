<template>
  <div class="flex flex-col items-start gap-4">
    <!-- Simple Loading Demo -->
    <section class="flex w-full flex-col items-center justify-center">
      <h2 class="mb-2 text-lg font-semibold">Simple Loading Demo (prevent close)</h2>
      <MultiStepLoader
        :steps="simpleLoadingSteps"
        :loading="uiState.isSimpleLoading"
        :prevent-close="true"
        @state-change="handleStateChange"
        @complete="handleComplete"
      />
      <button
        class="mt-4 rounded-md bg-black px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
        @click="toggleSimpleLoading"
      >
        {{ uiState.isSimpleLoading ? "Stop Loading" : "Start Simple Loading" }}
      </button>
    </section>
    <hr class="my-4 h-px w-full bg-gray-200" />
    <!-- Async Loading Demo -->
    <section class="flex w-full flex-col items-center justify-center">
      <h2 class="mb-2 text-lg font-semibold">Async Loading Demo</h2>
      <MultiStepLoader
        :steps="asyncLoadingSteps"
        :loading="uiState.isAfterTextLoading"
        @state-change="handleStateChange"
        @complete="handleComplete"
        @close="uiState.closeAsync"
      />
      <button
        class="mt-4 rounded-md bg-black px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
        :disabled="uiState.isAfterTextLoading"
        @click="startAsyncLoading"
      >
        Start Async Loading
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";

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
  closeSimple: () => {
    uiState.isSimpleLoading = false;
  },
  closeAsync: () => {
    uiState.isAfterTextLoading = false;
  },
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
function handleStateChange(state: number) {
  // Handle Loading State Change
}

function handleComplete() {
  // Handle Loading Complete
}

function handleSimpleLoadingComplete() {
  alert("Simple loading complete, redirecting...");
  uiState.isSimpleLoading = false;
}

function handleAsyncLoadingComplete() {
  alert("Async loading complete, redirecting...");
  uiState.isAfterTextLoading = false;
}

// Action handlers
function toggleSimpleLoading() {
  uiState.isSimpleLoading = !uiState.isSimpleLoading;
}

async function startAsyncLoading() {
  // Reset states
  uiState.isAfterTextLoading = true;
  loaderStates.isProcessing = true;
  loaderStates.isSavingOrder = true;
  loaderStates.sendingMails = true;

  // Simulate async operations
  function simulateAsyncStep(stateProp: keyof typeof loaderStates, delay: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        loaderStates[stateProp] = false;
        resolve();
      }, delay);
    });
  }

  try {
    await simulateAsyncStep("isProcessing", 2000);
    await simulateAsyncStep("isSavingOrder", 3000);
    await simulateAsyncStep("sendingMails", 2500);
  } catch (error) {
    uiState.isAfterTextLoading = false;
  }
}
</script>
