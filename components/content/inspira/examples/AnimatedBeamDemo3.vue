<template>
  <ClientOnly>
    <div
      ref="containerRef"
      class="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
    >
      <div class="flex size-full flex-col items-center justify-between">
        <div
          ref="div1Ref"
          class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
        >
          <Icon
            name="logos:github-icon"
            size="24"
          />
        </div>
        <div
          ref="div2Ref"
          class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
        >
          <Icon
            name="logos:google-drive"
            size="24"
          />
        </div>
      </div>

      <AnimatedBeam
        :container-ref="containerRef"
        :from-ref="div1Ref"
        :to-ref="div2Ref"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from "vue";

const containerRef = ref(null);
const div1Ref = ref(null);
const div2Ref = ref(null);
</script>
