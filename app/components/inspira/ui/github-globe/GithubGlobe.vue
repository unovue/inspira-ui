<script lang="ts" setup>
import type { TresContext } from "@tresjs/core";
import { dispose } from "@tresjs/core";
import { Color } from "three";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { computed, onBeforeUnmount, shallowRef, watch } from "vue";
import contries from "./globe.json";

interface Position {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

interface GlobeData {
  size: number | undefined;
  order: number;
  color: (t: number) => string;
  lat: number;
  lng: number;
}

interface GlobeConfig {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

interface Props {
  globeConfig?: GlobeConfig;
  data?: Position[];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  globeConfig: () => {
    return {};
  },
  data: () => [],
});

const resolvedGlobeConfig = computed(() => ({
  pointSize: 1,
  atmosphereColor: "#ffffff",
  showAtmosphere: true,
  atmosphereAltitude: 0.1,
  polygonColor: "rgba(255,255,255,0.7)",
  globeColor: "#1d072e",
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  ...props.globeConfig,
}));

const globe = shallowRef<ThreeGlobe>();
const controls = shallowRef<OrbitControls>();
const globeData = shallowRef<GlobeData[]>([]);
const ringIndexes = shallowRef<number[]>([]);
const tresContext = shallowRef<TresContext>();
const loopCleanup = shallowRef<() => void>();

const cameraPosition = computed<[number, number, number]>(() => {
  if (resolvedGlobeConfig.value.initialPosition) {
    const { lat, lng } = resolvedGlobeConfig.value.initialPosition;
    const pos = latLngToCartesian(lat, lng, 400);
    return [pos.x, pos.y, pos.z];
  }

  return [0, 0, 400];
});

function latLngToCartesian(lat: number, lng: number, radius = 400) {
  const phi = (lat * Math.PI) / 180;
  const theta = (lng * Math.PI) / 180;

  const x = radius * Math.cos(phi) * Math.sin(theta);
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.cos(theta);

  return { x, y, z };
}

function buildData() {
  const arcs = props.data;
  const points: GlobeData[] = [];
  for (let i = 0; i < arcs.length; i++) {
    const arc = arcs[i] as Position;
    const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
    points.push({
      size: resolvedGlobeConfig.value.pointSize,
      order: arc.order,
      color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
      lat: arc.startLat,
      lng: arc.startLng,
    });
    points.push({
      size: resolvedGlobeConfig.value.pointSize,
      order: arc.order,
      color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
      lat: arc.endLat,
      lng: arc.endLng,
    });
  }

  const filteredPoints = points.filter(
    (v, i, a) =>
      a.findIndex((v2) =>
        ["lat", "lng"].every((k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]),
      ) === i,
  );

  globeData.value = filteredPoints;
}

function applyGlobeConfig() {
  if (!globe.value) return;

  const config = resolvedGlobeConfig.value;

  globe.value
    .showAtmosphere(config.showAtmosphere!)
    .atmosphereColor(config.atmosphereColor!)
    .atmosphereAltitude(config.atmosphereAltitude!)
    .hexPolygonColor((_e) => config.polygonColor!);

  const globeMaterial = globe.value.globeMaterial() as unknown as {
    color: Color;
    emissive: Color;
    emissiveIntensity: number;
    shininess: number;
  };

  globeMaterial.color = new Color(config.globeColor!);
  globeMaterial.emissive = new Color(config.emissive!);
  globeMaterial.emissiveIntensity = config.emissiveIntensity || 0.1;
  globeMaterial.shininess = config.shininess || 0.9;
}

function applyDataToGlobe() {
  if (!globe.value) return;

  const config = resolvedGlobeConfig.value;

  globe.value
    .arcsData(props.data)
    .arcStartLat((d: Position) => d.startLat * 1)
    .arcStartLng((d: Position) => d.startLng * 1)
    .arcEndLat((d: Position) => d.endLat * 1)
    .arcEndLng((d: Position) => d.endLng * 1)
    .arcColor((e: Position) => e.color)
    .arcAltitude((e: Position) => e.arcAlt * 1)
    .arcStroke((_e: Position) => [0.32, 0.28, 0.3][Math.round(Math.random() * 4)] || null)
    .arcDashLength(config.arcLength!)
    .arcDashInitialGap((e: Position) => e.order * 1)
    .arcDashGap(15)
    .arcDashAnimateTime(config.arcTime!)
    .pointsData(props.data)
    .pointColor((e: Position) => e.color)
    .pointsMerge(true)
    .pointAltitude(0.0)
    .pointRadius(config.pointSize || 2)
    .ringsData([]);

  updateRings();
}

function updateRings() {
  if (!globe.value || !globeData.value.length) return;

  ringIndexes.value = genRandomNumbers(
    0,
    props.data.length,
    Math.floor((props.data.length * 4) / 5),
  );

  const config = resolvedGlobeConfig.value;

  globe.value
    .ringsData(globeData.value.filter((_d, i) => ringIndexes.value.includes(i)))
    .ringColor((e: GlobeData) => (t: number) => e.color(t))
    .ringMaxRadius(config.maxRings!)
    .ringPropagationSpeed(3)
    .ringRepeatPeriod((config.arcTime! * config.arcLength!) / config.rings!);
}

function setupControls(context: TresContext) {
  controls.value?.dispose();

  const activeCamera = context.camera.activeCamera.value;
  if (!activeCamera) return;

  const instance = context.renderer.instance;
  const orbitControls = new OrbitControls(activeCamera, instance.domElement);
  orbitControls.enableZoom = false;
  orbitControls.enablePan = false;
  orbitControls.enableDamping = true;
  orbitControls.dampingFactor = 0.01;
  orbitControls.minDistance = 200;
  orbitControls.maxDistance = 500;
  orbitControls.rotateSpeed = resolvedGlobeConfig.value.autoRotateSpeed || 0.8;
  orbitControls.zoomSpeed = 1;
  orbitControls.autoRotate = false;
  orbitControls.autoRotateSpeed = resolvedGlobeConfig.value.autoRotateSpeed ?? 2.0;

  orbitControls.minPolarAngle = Math.PI / 3.5;
  orbitControls.maxPolarAngle = Math.PI - Math.PI / 3;

  orbitControls.update();

  controls.value = orbitControls;
}

function setupLoop(context: TresContext) {
  loopCleanup.value?.();

  if (!context.renderer.loop.isActive.value) {
    context.renderer.loop.start();
  }

  const { off } = context.renderer.loop.onLoop(({ delta }) => {
    if (globe.value && resolvedGlobeConfig.value.autoRotate) {
      globe.value.rotation.y += (resolvedGlobeConfig.value.autoRotateSpeed ?? 2.0) * delta * 1;
    }

    controls.value?.update();
  });

  loopCleanup.value = off;
}

function syncCameraPosition(context: TresContext) {
  const activeCamera = context.camera.activeCamera.value;
  if (!activeCamera) return;

  const [x, y, z] = cameraPosition.value;
  activeCamera.position.set(x, y, z);
  activeCamera.lookAt(0, 0, 0);
}

function setupGlobe(context: TresContext) {
  buildData();

  const globeInstance = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .hexPolygonsData(contries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7);

  globe.value = globeInstance;

  applyGlobeConfig();
  context.scene.value.add(globeInstance);

  applyDataToGlobe();
  syncCameraPosition(context);
  setupControls(context);
  setupLoop(context);
}

watch(
  () => props.data,
  () => {
    buildData();
    applyDataToGlobe();
  },
  { deep: true },
);

watch(
  resolvedGlobeConfig,
  () => {
    buildData();
    applyGlobeConfig();
    applyDataToGlobe();
    if (tresContext.value) {
      syncCameraPosition(tresContext.value);
      setupControls(tresContext.value);
    }
  },
  { deep: true },
);

onBeforeUnmount(() => {
  loopCleanup.value?.();
  controls.value?.dispose();

  if (globe.value && tresContext.value) {
    tresContext.value.scene.value.remove(globe.value);
    dispose(globe.value);
  }
});

const handleCanvasReady = (context: TresContext) => {
  tresContext.value = context;
  context.renderer.instance.setClearColor(0x000000, 0);
  setupGlobe(context);

  watch(
    () => context.camera.activeCamera.value,
    (camera) => {
      if (!camera) return;
      syncCameraPosition(context);
      setupControls(context);
    },
    { immediate: true },
  );
};

function hexToRgb(color: string) {
  let hex = color.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const bigint = Number.parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return {
    r,
    g,
    b,
  };
}

function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }

  return arr;
}
</script>

<template>
  <ClientOnly>
    <div
      class="h-96 w-96"
      :class="[props.class]"
    >
      <TresCanvas
        class="h-full w-full"
        :dpr="[1, 2]"
        :antialias="true"
        :alpha="true"
        @ready="handleCanvasReady"
      >
        <TresPerspectiveCamera :position="cameraPosition" />

        <TresAmbientLight
          :color="resolvedGlobeConfig.ambientLight || '#ffffff'"
          :intensity="0.6"
        />

        <TresDirectionalLight
          :color="resolvedGlobeConfig.directionalLeftLight || '#ffffff'"
          :intensity="1"
          :position="[-400, 100, 400]"
        />

        <TresDirectionalLight
          :color="resolvedGlobeConfig.directionalTopLight || '#ffffff'"
          :intensity="1"
          :position="[-200, 500, 200]"
        />

        <TresPointLight
          :color="resolvedGlobeConfig.pointLight || '#ffffff'"
          :intensity="0.8"
          :position="[-200, 500, 200]"
        />
      </TresCanvas>
    </div>
  </ClientOnly>
</template>
