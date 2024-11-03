<template>
  <ClientOnly>
    <div
      ref="containerRef"
      class="relative flex w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <div
            ref="div1Ref"
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
          >
            <GitHubIcon />
          </div>
          <div
            ref="div2Ref"
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
          >
            <GoogleDriveIcon />
          </div>
        </div>
      </div>

      <AnimatedBeam
        :container-ref="containerRef"
        :from-ref="div1Ref"
        :to-ref="div2Ref"
        :curvature="-20"
        :start-y-offset="10"
        :end-y-offset="10"
      />
      <AnimatedBeam
        :container-ref="containerRef"
        :from-ref="div1Ref"
        :to-ref="div2Ref"
        :curvature="20"
        :start-y-offset="-10"
        :end-y-offset="-10"
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
