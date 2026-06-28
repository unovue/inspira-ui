<script setup lang="ts">
import { FeyCards } from "../../ui/fey-cards";

const images = [
  "https://cdn.inspira-ui.com/images/1.webp",
  "https://cdn.inspira-ui.com/images/2.webp",
  "https://cdn.inspira-ui.com/images/3.webp",
  "https://cdn.inspira-ui.com/images/4.webp",
  "https://cdn.inspira-ui.com/images/5.webp",
];
</script>

<template>
  <ClientOnly>
    <FeyCards
      :img-src="images"
      main-img="https://cdn.inspira-ui.com/images/main.webp"
      idle-img="https://cdn.inspira-ui.com/images/idle.webp"
      class="text-black dark:text-white"
    >
      Inspired by the pros. Made for you.
    </FeyCards>
  </ClientOnly>
</template>
