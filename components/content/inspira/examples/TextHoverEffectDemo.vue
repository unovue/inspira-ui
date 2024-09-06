<template>
  <ClientOnly>
    <div
      className="h-auto flex min-md:flex-1 max-lg:w-full items-center justify-center"
    >
      <TextHoverEffect class="w-[90%]" text="INSPIRA" />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { TextHoverEffect } from "~/components/content/inspira/ui/text-hover-effect";
</script>
