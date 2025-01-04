<template>
  <div :class="cn('relative rounded border p-20', props.class)">
    <div
      :style="{
        '--perspective': `${props.perspective}px`,
        '--grid-color': props.gridColor,
        '--beam-size': `${props.beamSize}%`,
      }"
      class="pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clip-path:inset(0)] [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d]"
    >
      <!-- top side -->
      <div
        class="absolute [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform-style:preserve-3d] [transform:rotateX(-90deg)] [width:100cqi]"
      >
        <Beam
          v-for="(beam, index) in topBeams"
          :key="'top-' + index"
          :width="`${beamSize}%`"
          :x="`${beam.x * props.beamSize}%`"
          :delay="beam.delay"
          :duration="props.beamDuration"
        />
      </div>
      <!-- bottom side -->
      <div
        class="absolute top-full [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform-style:preserve-3d] [transform:rotateX(-90deg)] [width:100cqi]"
      >
        <Beam
          v-for="(beam, index) in bottomBeams"
          :key="'bottom-' + index"
          :width="`${beamSize}%`"
          :x="`${beam.x * props.beamSize}%`"
          :delay="beam.delay"
          :duration="props.beamDuration"
        />
      </div>
      <!-- left side -->
      <div
        class="absolute left-0 top-0 [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform-style:preserve-3d] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]"
      >
        <Beam
          v-for="(beam, index) in leftBeams"
          :key="'left-' + index"
          :width="`${beamSize}%`"
          :x="`${beam.x * props.beamSize}%`"
          :delay="beam.delay"
          :duration="props.beamDuration"
        />
      </div>
      <!-- right side -->
      <div
        class="absolute right-0 top-0 [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:100%_0%] [transform-style:preserve-3d] [transform:rotate(-90deg)_rotateX(-90deg)] [width:100cqh]"
      >
        <Beam
          v-for="(beam, index) in rightBeams"
          :key="'right-' + index"
          :width="`${beamSize}%`"
          :x="`${beam.x * props.beamSize}%`"
          :delay="beam.delay"
          :duration="props.beamDuration"
        />
      </div>
    </div>
    <div class="relative">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

interface WarpBackgroundProps {
  perspective?: number;
  class?: string;
  beamsPerSide?: number;
  beamSize?: number;
  beamDelayMax?: number;
  beamDelayMin?: number;
  beamDuration?: number;
  gridColor?: string;
}

const props = withDefaults(defineProps<WarpBackgroundProps>(), {
  perspective: 100,
  beamsPerSide: 3,
  beamSize: 5,
  beamDelayMax: 3,
  beamDelayMin: 0,
  beamDuration: 8,
  gridColor: "hsl(var(--border))",
});

function generateBeams() {
  const beams = [];
  const cellsPerSide = Math.floor(100 / props.beamSize);
  const step = cellsPerSide / props.beamsPerSide;

  for (let i = 0; i < props.beamsPerSide; i++) {
    const x = Math.floor(i * step);
    const delay = Math.random() * (props.beamDelayMax - props.beamDelayMin) + props.beamDelayMin;
    beams.push({ x, delay });
  }
  return beams;
}

const topBeams = computed(() => generateBeams());
const rightBeams = computed(() => generateBeams());
const bottomBeams = computed(() => generateBeams());
const leftBeams = computed(() => generateBeams());
</script>
