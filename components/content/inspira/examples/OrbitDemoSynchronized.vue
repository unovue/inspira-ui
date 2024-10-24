<script setup lang="ts">
import { ORBIT_DIRECTION, type OrbitDirection } from "../ui/orbit";

const direction = ref<OrbitDirection>(ORBIT_DIRECTION.Clockwise);

function switchDirection() {
  if (ORBIT_DIRECTION.Clockwise === direction.value) {
    direction.value = ORBIT_DIRECTION.CounterClockwise;
    return;
  }

  direction.value = ORBIT_DIRECTION.Clockwise;
}
</script>

<template>
  <div class="flex flex-row items-center justify-between py-4 w-full">
    <p> {{ `Current direction : ${ORBIT_DIRECTION.Clockwise === direction ? "Clockwise": "CounterClockwise"}`  }}</p>
    <UiButton @click="switchDirection">{{
      `Switch to : ${ORBIT_DIRECTION.Clockwise === direction ? "CounterClockwise" : "Clockwise"}`
    }}</UiButton>
  </div>
  <div
    class="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
  >
    <span class="pointer-events-none text-center text-8xl font-semibold leading-none"> 🌍 </span>

    <Orbit
      class="text-xl border-none bg-transparent items-center justify-center"
      :radius="190"
      :duration="20"
      :delay="200"
      :direction="direction"
      path
    >
      🪨
    </Orbit>
    <Orbit
      class="text-4xl border-none bg-transparent items-center justify-center"
      :radius="100"
      :delay="4"
      :direction="direction"
      path
    >
      🌕
    </Orbit>
    <Orbit
      class="text-4xl border-none bg-transparent items-center justify-center"
      :radius="250"
      :delay="4"
      :direction="direction"
      path
    >
      🪐
    </Orbit>
  </div>
</template>
