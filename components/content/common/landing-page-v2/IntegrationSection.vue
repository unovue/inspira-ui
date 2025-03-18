<template>
  <section class="mx-auto mt-36 flex max-w-7xl flex-col items-center justify-center">
    <div class="text-center text-5xl font-semibold max-md:text-4xl">
      Integrate with your favourite UI framework
    </div>
    <ClientOnly>
      <div
        ref="containerRef"
        class="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
      >
        <div
          class="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10"
        >
          <div class="flex flex-row items-center justify-between">
            <div
              ref="div1Ref"
              class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
            >
              <Icon
                name="logos:nuxt-icon"
                size="24"
              />
            </div>
            <div
              ref="div5Ref"
              class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            >
              <Icon
                name="logos:vuetifyjs"
                size="28"
              />
            </div>
          </div>
          <div class="flex flex-row items-center justify-between">
            <div
              ref="div2Ref"
              class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.9)] dark:text-black"
            >
              <Icon
                name="simple-icons:shadcnui"
                size="24"
              />
            </div>
            <div
              ref="div4Ref"
              class="z-10 flex size-24 items-center justify-center rounded-full border-2 bg-white p-2 text-black shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            >
              <Motion
                as-child
                :animate="{
                  scale: [0.9, 1.1, 0.9],
                }"
                :transition="{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }"
              >
                <NuxtImg
                  class="size-14"
                  src="/logo.svg"
                />
              </Motion>
            </div>
            <div
              ref="div6Ref"
              class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            >
              <Icon
                name="vscode-icons:file-type-quasar"
                size="32"
              />
            </div>
          </div>
          <div class="flex flex-row items-center justify-between">
            <div
              ref="div3Ref"
              class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
            >
              <Icon
                name="simple-icons:primevue"
                size="32"
              />
            </div>
            <div
              ref="div7Ref"
              class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            >
              <Icon
                class="bg-black"
                name="proicons:more"
                size="32"
              />
            </div>
          </div>
        </div>

        <AnimatedBeam
          :container-ref="containerRef"
          :from-ref="div1Ref"
          :to-ref="div4Ref"
          :curvature="-75"
          :end-y-offset="-10"
        />
        <AnimatedBeam
          :container-ref="containerRef"
          :from-ref="div2Ref"
          :to-ref="div4Ref"
        />
        <AnimatedBeam
          :container-ref="containerRef"
          :from-ref="div3Ref"
          :to-ref="div4Ref"
          :curvature="75"
          :end-y-offset="10"
        />
        <AnimatedBeam
          :container-ref="containerRef"
          :from-ref="div5Ref"
          :to-ref="div4Ref"
          :curvature="-75"
          :end-y-offset="-10"
        />
        <AnimatedBeam
          :container-ref="containerRef"
          :from-ref="div6Ref"
          :to-ref="div4Ref"
        />
        <AnimatedBeam
          :container-ref="containerRef"
          :from-ref="div7Ref"
          :to-ref="div4Ref"
          :curvature="75"
          :end-y-offset="10"
        />
      </div>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const containerRef = ref(null);
const div1Ref = ref(null);
const div2Ref = ref(null);
const div3Ref = ref(null);
const div4Ref = ref(null);
const div5Ref = ref(null);
const div6Ref = ref(null);
const div7Ref = ref(null);
</script>
