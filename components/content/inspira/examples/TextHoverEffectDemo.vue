<template>
  <ClientOnly>
    <div
      className="h-auto flex min-md:flex-1 max-lg:w-full items-center justify-center"
    >
      <TextHover class="w-[90%]" text="INSPIRA" />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { TextHover } from "~/components/content/inspira/ui/text-hover-effect/";
</script>
