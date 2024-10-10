<template>
  <ClientOnly>
    <div
      class="relative flex w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref="containerRef"
    >
      <div
        className="flex size-full flex-col items-stretch justify-between gap-10"
      >
        <div className="flex flex-row justify-between">
          <div
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
            ref="div1Ref"
          >
            <GitHubIcon />
          </div>
          <div
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            ref="div2Ref"
          >
            <GoogleDriveIcon />
          </div>
        </div>
      </div>

      <AnimatedBeam
        :containerRef="containerRef"
        :fromRef="div1Ref"
        :toRef="div2Ref"
        :curvature="-20"
        :startYOffset="10"
        :endYOffset="10"
      />
      <AnimatedBeam
        :containerRef="containerRef"
        :fromRef="div1Ref"
        :toRef="div2Ref"
        :curvature="20"
        :startYOffset="-10"
        :endYOffset="-10"
        :reverse="true"
      />
    </div>
  </ClientOnly>
</template>

<script setup>
const containerRef = ref(null);
const div1Ref = ref(null);
const div2Ref = ref(null);
</script>
