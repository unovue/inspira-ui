<script setup lang="ts">
import EncryptedText from "../../ui/encrypted-text/EncryptedText.vue";

interface Props {
  text?: string;
  revealDelayMs?: number;
}

const { text = "I'll be Hokage someday, Dattebayo!", revealDelayMs = 50 } = defineProps<Props>();
</script>

<template>
  <div class="flex min-h-40 w-full items-center justify-center">
    <EncryptedText
      :text="text"
      encrypted-class="text-neutral-500"
      revealed-class="dark:text-white text-black"
      :reveal-delay-ms="revealDelayMs"
    />
  </div>
</template>
