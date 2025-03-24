<template>
  <div class="relative aspect-[2/1] w-full rounded-lg bg-white font-sans dark:bg-black">
    <NuxtImg
      :src="`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`"
      class="pointer-events-none size-full select-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
      alt="world map"
      height="495"
      width="1056"
      :draggable="false"
    />
    <svg
      ref="svgRef"
      view-box="0 0 800 400"
      class="pointer-events-none absolute inset-0 size-full select-none"
    >
      <g
        v-for="(dot, i) in props.dots"
        :key="`path-group-${i}`"
      >
        <Motion
          :key="`start-upper-${i}`"
          as="path"
          :d="createCurvedPath(dot)"
          fill="none"
          stroke="url(#path-gradient)"
          stroke-width="1"
          :initial="{
            pathLength: 0,
          }"
          :animate="{
            pathLength: 1,
          }"
          :transition="{
            duration: 1,
            delay: 0.5 * i,
            ease: 'easeOut',
          }"
        ></Motion>
      </g>

      <defs>
        <linearGradient
          id="path-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stop-color="white"
            stop-opacity="0"
          />
          <stop
            offset="5%"
            :stop-color="lineColor"
            stop-opacity="1"
          />
          <stop
            offset="95%"
            :stop-color="lineColor"
            stop-opacity="1"
          />
          <stop
            offset="100%"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
      </defs>

      <g
        v-for="(dot, i) in props.dots"
        :key="`points-group-${i}`"
      >
        <g :key="`start-${i}`">
          <circle
            :cx="projectPoint(dot.start.lat, dot.start.lng).x"
            :cy="projectPoint(dot.start.lat, dot.start.lng).y"
            r="2"
            :fill="props.lineColor"
          />
          <circle
            :cx="projectPoint(dot.start.lat, dot.start.lng).x"
            :cy="projectPoint(dot.start.lat, dot.start.lng).y"
            r="2"
            :fill="props.lineColor"
            opacity="0.5"
          >
            <animate
              attribute-name="r"
              from="2"
              to="8"
              dur="1.5s"
              begin="0s"
              repeat-count="indefinite"
            />
            <animate
              attribute-name="opacity"
              from="0.5"
              to="0"
              dur="1.5s"
              begin="0s"
              repeat-count="indefinite"
            />
          </circle>
        </g>
        <g :key="`end-${i}`">
          <circle
            :cx="projectPoint(dot.end.lat, dot.end.lng).x"
            :cy="projectPoint(dot.end.lat, dot.end.lng).y"
            r="2"
            :fill="props.lineColor"
          />
          <circle
            :cx="projectPoint(dot.end.lat, dot.end.lng).x"
            :cy="projectPoint(dot.end.lat, dot.end.lng).y"
            r="2"
            :fill="props.lineColor"
            opacity="0.5"
          >
            <animate
              attribute-name="r"
              from="2"
              to="8"
              dur="1.5s"
              begin="0s"
              repeat-count="indefinite"
            />
            <animate
              attribute-name="opacity"
              from="0.5"
              to="0"
              dur="1.5s"
              begin="0s"
              repeat-count="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import DottedMap from "dotted-map";
import { Motion } from "motion-v";

interface Dot {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
}
interface Props {
  dots?: Array<Dot>;
  class?: string;
  lineColor?: string;
  mapColor: string;
  mapBgColor: string;
}

const props = withDefaults(defineProps<Props>(), {
  dots: () => [],
  lineColor: "#0EA5E9",
});

const map = new DottedMap({ height: 100, grid: "diagonal" });

const svgMap = computed(() =>
  map.getSVG({
    radius: 0.22,
    color: props.mapColor,
    shape: "circle",
    backgroundColor: props.mapBgColor,
  }),
);

function projectPoint(lat: number, lng: number) {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
}

function createCurvedPath(dot: Dot) {
  const start = projectPoint(dot.start.lat, dot.start.lng);
  const end = projectPoint(dot.end.lat, dot.end.lng);
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}
</script>
