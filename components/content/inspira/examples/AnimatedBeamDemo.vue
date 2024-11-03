<template>
  <div
    ref="containerRef"
    class="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
  >
    <div
      class="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10"
    >
      <div class="flex flex-row items-center justify-between">
        <div
          ref="div1Ref"
          class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
        >
          <GoogleDriveIcon />
        </div>
        <div
          ref="div5Ref"
          class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
        >
          <GoogleDocsIcon />
        </div>
      </div>
      <div class="flex flex-row items-center justify-between">
        <div
          ref="div2Ref"
          class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
        >
          <NotionIcon />
        </div>
        <div
          ref="div4Ref"
          class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
        >
          <OpenAIIcon />
        </div>
        <div
          ref="div6Ref"
          class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
        >
          <ZapierIcon />
        </div>
      </div>
      <div class="flex flex-row items-center justify-between">
        <div
          ref="div3Ref"
          class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
        >
          <WhatsAppIcon />
        </div>
        <div
          ref="div7Ref"
          class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
        >
          <MessengerIcon />
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
      :reverse="true"
    />
    <AnimatedBeam
      :container-ref="containerRef"
      :from-ref="div6Ref"
      :to-ref="div4Ref"
      :reverse="true"
    />
    <AnimatedBeam
      :container-ref="containerRef"
      :from-ref="div7Ref"
      :to-ref="div4Ref"
      :curvature="75"
      :end-y-offset="10"
      :reverse="true"
    />
  </div>
</template>

<script setup>
const containerRef = ref(null);
const div1Ref = ref(null);
const div2Ref = ref(null);
const div3Ref = ref(null);
const div4Ref = ref(null);
const div5Ref = ref(null);
const div6Ref = ref(null);
const div7Ref = ref(null);
</script>
