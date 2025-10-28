<script lang="ts" setup>
import { computed } from "vue";
import { cn } from "@/lib/utils";
import Beam from "./Beam.vue";

interface Props {
  perspective?: number;
  beamsPerSide?: number;
  beamSize?: number;
  beamDelayMax?: number;
  beamDelayMin?: number;
  beamDuration?: number;
  gridColor?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  perspective: 100,
  beamsPerSide: 3,
  beamSize: 5,
  beamDelayMax: 3,
  beamDelayMin: 0,
  beamDuration: 3,
  gridColor: "hsl(var(--border))",
});

const beamDuration = computed(() => props.beamDuration);
const beamDelayMax = computed(() => props.beamDelayMax);
const beamDelayMin = computed(() => props.beamDelayMin);

function generateBeams() {
  const beams = [];
  const cellsPerSide = Math.floor(100 / props.beamSize);
  const step = cellsPerSide / props.beamsPerSide;

  for (let i = 0; i < props.beamsPerSide; i++) {
    const x = Math.floor(i * step);
    const delay = Math.random() * (beamDelayMax.value - beamDelayMin.value) + beamDelayMin.value;
    beams.push({ x, delay });
  }
  return beams;
}

// generateBeams
const topBeams = generateBeams();
const bottomBeams = generateBeams();
const leftBeams = generateBeams();
const rightBeams = generateBeams();
</script>

<template>
  <div :class="cn('relative rounded border md:p-20', props.class)">
    <div
      :style="{
        '--perspective': `${props.perspective}px`,
        '--grid-color': props.gridColor,
        '--beam-size': `${props.beamSize}%`,
      }"
      class="[container-type:size] pointer-events-none absolute top-0 left-0 size-full overflow-hidden [clip-path:inset(0)] [perspective:var(--perspective)] [transform-style:preserve-3d]"
    >
      <!-- TOP -->
      <div
        class="[container-type:inline-size] absolute [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
      >
        <Beam
          v-for="(beam, index) in topBeams"
          :key="`top-${index}`"
          :width="`${props.beamSize}%`"
          :x="`${beam.x * props.beamSize}%`"
          :delay="beam.delay"
          :duration="beamDuration"
        />
      </div>
      <!-- BOTTOM -->
      <div
        class="[container-type:inline-size] absolute top-full [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
      >
        <Beam
          v-for="(beam, index) in bottomBeams"
          :key="`bottom-${index}`"
          :width="`${props.beamSize}%`"
          :x="`${beam.x * props.beamSize}%`"
          :delay="beam.delay"
          :duration="beamDuration"
        />
      </div>
      <!-- LEFT -->
      <div
        class="[container-type:inline-size] absolute top-0 left-0 [height:100cqmax] [width:100cqh] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
      >
        <Beam
          v-for="(beam, index) in leftBeams"
          :key="`left-${index}`"
          :width="`${props.beamSize}%`"
          :x="`${beam.x * props.beamSize}%`"
          :delay="beam.delay"
          :duration="beamDuration"
        />
      </div>
      <!-- RIGHT -->
      <div
        class="[container-type:inline-size] absolute top-0 right-0 [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
      >
        <Beam
          v-for="(beam, index) in rightBeams"
          :key="`right-${index}`"
          :width="`${props.beamSize}%`"
          :x="`${beam.x * props.beamSize}%`"
          :delay="beam.delay"
          :duration="beamDuration"
        />
      </div>
    </div>

    <div class="relative">
      <slot />
    </div>
  </div>
</template>
