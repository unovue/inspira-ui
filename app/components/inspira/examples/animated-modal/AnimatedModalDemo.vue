<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <div class="flex w-full items-center justify-center gap-4 py-8">
    <!-- Method 1: Controlled Mode -->
    <UButton
      label="Open Modal (Controlled)"
      @click="open = true"
    />

    <!-- Method 2: Uncontrolled Mode -->
    <AnimatedModal
      v-slot="{ openModal, closeModal }"
      v-model:open="open"
    >
      <UButton
        label="Open Modal (Uncontrolled)"
        @click="openModal"
      />

      <AnimatedModalBody :lock-scroll="false">
        <AnimatedModalContent>
          <h3 class="text-highlighted text-xl font-semibold">How to Use</h3>
          <p class="text-muted mt-4 text-sm">
            Two ways to control the modal: controlled mode with v-model, or uncontrolled mode using
            slot methods.
          </p>
          <div class="mt-6 space-y-3">
            <div class="flex items-start gap-3">
              <div class="bg-primary-500 mt-1.5 h-2 w-2 shrink-0 rounded-full" />
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Controlled Mode</p>
                <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Use v-model:open or :open with @update:open to manage state externally.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-primary-500 mt-1.5 h-2 w-2 shrink-0 rounded-full" />
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Uncontrolled Mode
                </p>
                <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Use v-slot to get openModal() and closeModal() methods. Recommended for most
                  cases.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-primary-500 mt-1.5 h-2 w-2 shrink-0 rounded-full" />
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Quick Start</p>
                <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Copy the code from this demo and customize the content inside
                  AnimatedModalContent.
                </p>
              </div>
            </div>
          </div>
        </AnimatedModalContent>
        <AnimatedModalFooter class="gap-2">
          <UButton
            color="neutral"
            variant="soft"
            label="Cancel"
            @click="closeModal"
          />
          <UButton
            label="Confirm"
            @click="closeModal"
          />
        </AnimatedModalFooter>
      </AnimatedModalBody>
    </AnimatedModal>
  </div>
</template>
