<script setup lang="ts">
import type { OrbitDirection } from "../../ui/orbit";
import { ref } from "vue";
import { ORBIT_DIRECTION } from "../../ui/orbit";

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
  <div class="flex w-full flex-row items-center justify-between py-4">
    <p>
      {{
        `Current direction : ${ORBIT_DIRECTION.Clockwise === direction ? "Clockwise" : "CounterClockwise"}`
      }}
    </p>
    <button
      class="rounded-md bg-black px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
      @click="switchDirection"
    >
      {{
        `Switch to : ${ORBIT_DIRECTION.Clockwise === direction ? "CounterClockwise" : "Clockwise"}`
      }}
    </button>
  </div>
  <div
    class="bg-background relative flex h-150 w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
  >
    <span class="pointer-events-none text-center text-8xl leading-none font-semibold"> 🌍 </span>

    <Orbit
      class="items-center justify-center border-none bg-transparent text-xl"
      :radius="190"
      :duration="20"
      :delay="200"
      :direction="direction"
      path
    >
      🪨
    </Orbit>
    <Orbit
      class="items-center justify-center border-none bg-transparent text-4xl"
      :radius="100"
      :delay="4"
      :direction="direction"
      path
    >
      🌕
    </Orbit>
    <Orbit
      class="items-center justify-center border-none bg-transparent text-4xl"
      :radius="250"
      :delay="4"
      :direction="direction"
      path
    >
      🪐
    </Orbit>
  </div>
</template>
