<script setup lang="ts">
import { ORBIT_DIRECTION } from "../ui/orbit";
</script>

<template>
  <div
    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
  >
    <span class="pointer-events-none text-center text-8xl font-semibold leading-none"> 🌍 </span>

    <!-- Inner Circles -->
    <Orbit
      class="size-[30px] items-center justify-center border-none bg-transparent"
      :duration="20"
      :delay="20"
      :radius="80"
      :direction="ORBIT_DIRECTION.CounterClockwise"
    >
      <WhatsAppIcon />
    </Orbit>
    <Orbit
      class="size-[30px] items-center justify-center border-none bg-transparent"
      :duration="20"
      :delay="10"
      :radius="80"
      path
      :direction="ORBIT_DIRECTION.CounterClockwise"
    >
      <NotionIcon />
    </Orbit>

    <!-- Outer Circles (reverse) -->
    <Orbit
      class="size-[50px] items-center justify-center border-none bg-transparent"
      :radius="190"
      :duration="20"
      path
    >
      <GoogleDriveIcon />
    </Orbit>
    <Orbit
      class="size-[50px] items-center justify-center border-none bg-transparent"
      :radius="190"
      :duration="20"
      :delay="200"
      :direction="ORBIT_DIRECTION.CounterClockwise"
    >
      <GitHubIcon />
    </Orbit>
    <Orbit
      class="items-center justify-center border-none bg-transparent text-4xl"
      :radius="140"
      :delay="4"
    >
      🌕
    </Orbit>
  </div>
</template>
