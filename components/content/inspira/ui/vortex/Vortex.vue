<template>
  <div :class="cn('relative h-full w-full', props.containerClass)">
    <Motion
      as="div"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      class="absolute inset-0 z-0 flex size-full items-center justify-center bg-transparent"
    >
      <canvas ref="canvasRef"></canvas>
    </Motion>

    <div :class="cn('relative z-10', props.class)">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNoise3D } from "simplex-noise";
import { ref, shallowRef, onMounted, onUnmounted, useTemplateRef } from "vue";
import { cn } from "@/lib/utils";
import { useDebounceFn } from "@vueuse/core";

const TAU = 2 * Math.PI;
const BASE_TTL = 50;
const RANGE_TTL = 150;
const PARTICLE_PROP_COUNT = 9;
const RANGE_HUE = 100;
const NOISE_STEPS = 3;
const X_OFF = 0.00125;
const Y_OFF = 0.00125;
const Z_OFF = 0.0005;

interface VortexProps {
  class?: string;
  containerClass?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

const props = withDefaults(defineProps<VortexProps>(), {
  particleCount: 700,
  rangeY: 100,
  baseSpeed: 0.0,
  rangeSpeed: 1.5,
  baseRadius: 1,
  rangeRadius: 2,
  baseHue: 220,
  backgroundColor: "#000000",
});

const tick = ref<number>(0);
const animationFrame = ref<number | null>(null);
const particleProps = shallowRef<Float32Array | null>(null);
const center = ref<[number, number]>([0, 0]);
const ctx = shallowRef<CanvasRenderingContext2D | null>(null);

const canvasRef = useTemplateRef("canvasRef");

const particleCache = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  life: 0,
  ttl: 0,
  speed: 0,
  radius: 0,
  hue: 0,
};

const noise3D = createNoise3D();

function rand(n: number) {
  return n * Math.random();
}
function randRange(n: number): number {
  return n - rand(2 * n);
}
function fadeInOut(t: number, m: number): number {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
}
function lerp(n1: number, n2: number, speed: number): number {
  return (1 - speed) * n1 + speed * n2;
}

function initParticle(i: number) {
  if (!particleProps.value || !canvasRef.value) return;

  const canvas = canvasRef.value;
  particleCache.x = rand(canvas.width);
  particleCache.y = center.value[1] + randRange(props.rangeY);
  particleCache.vx = 0;
  particleCache.vy = 0;
  particleCache.life = 0;
  particleCache.ttl = BASE_TTL + rand(RANGE_TTL);
  particleCache.speed = props.baseSpeed + rand(props.rangeSpeed);
  particleCache.radius = props.baseRadius + rand(props.rangeRadius);
  particleCache.hue = props.baseHue + rand(RANGE_HUE);

  particleProps.value.set(
    [
      particleCache.x,
      particleCache.y,
      particleCache.vx,
      particleCache.vy,
      particleCache.life,
      particleCache.ttl,
      particleCache.speed,
      particleCache.radius,
      particleCache.hue,
    ],
    i,
  );
}

function updateParticle(i: number) {
  if (!particleProps.value || !canvasRef.value || !ctx.value) return;

  const canvas = canvasRef.value;
  const props = particleProps.value;
  const context = ctx.value;

  particleCache.x = props[i]!;
  particleCache.y = props[i + 1]!;
  particleCache.vx = props[i + 2]!;
  particleCache.vy = props[i + 3]!;
  particleCache.life = props[i + 4]!;
  particleCache.ttl = props[i + 5]!;
  particleCache.speed = props[i + 6]!;
  particleCache.radius = props[i + 7]!;
  particleCache.hue = props[i + 8]!;

  const n =
    noise3D(particleCache.x * X_OFF, particleCache.y * Y_OFF, tick.value * Z_OFF) *
    NOISE_STEPS *
    TAU;

  const nextVx = lerp(particleCache.vx, Math.cos(n), 0.5);
  const nextVy = lerp(particleCache.vy, Math.sin(n), 0.5);
  const nextX = particleCache.x + nextVx * particleCache.speed;
  const nextY = particleCache.y + nextVy * particleCache.speed;

  context.save();
  context.lineCap = "round";
  context.lineWidth = particleCache.radius;
  context.strokeStyle = `hsla(${particleCache.hue},100%,60%,${fadeInOut(
    particleCache.life,
    particleCache.ttl,
  )})`;
  context.beginPath();
  context.moveTo(particleCache.x, particleCache.y);
  context.lineTo(nextX, nextY);
  context.stroke();
  context.restore();

  props[i] = nextX;
  props[i + 1] = nextY;
  props[i + 2] = nextVx;
  props[i + 3] = nextVy;
  props[i + 4] = particleCache.life + 1;

  if (
    nextX > canvas.width ||
    nextX < 0 ||
    nextY > canvas.height ||
    nextY < 0 ||
    particleCache.life > particleCache.ttl
  ) {
    initParticle(i);
  }
}

function draw() {
  if (!canvasRef.value || !ctx.value || !particleProps.value) return;

  const canvas = canvasRef.value;
  const context = ctx.value;

  tick.value++;

  context.fillStyle = props.backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particleProps.value.length; i += PARTICLE_PROP_COUNT) {
    updateParticle(i);
  }

  context.save();
  context.filter = "blur(8px) brightness(200%)";
  context.globalCompositeOperation = "lighter";
  context.drawImage(canvas, 0, 0);
  context.restore();

  context.save();
  context.filter = "blur(4px) brightness(200%)";
  context.globalCompositeOperation = "lighter";
  context.drawImage(canvas, 0, 0);
  context.restore();

  animationFrame.value = requestAnimationFrame(draw);
}

const handleResize = useDebounceFn(() => {
  if (!canvasRef.value) return;

  const canvas = canvasRef.value;
  const { innerWidth, innerHeight } = window;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  center.value = [0.5 * canvas.width, 0.5 * canvas.height];
}, 150);

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  ctx.value = canvas.getContext("2d");
  if (!ctx.value) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  center.value = [0.5 * canvas.width, 0.5 * canvas.height];

  const particlePropsLength = props.particleCount * PARTICLE_PROP_COUNT;
  particleProps.value = new Float32Array(particlePropsLength);

  for (let i = 0; i < particlePropsLength; i += PARTICLE_PROP_COUNT) {
    initParticle(i);
  }

  draw();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value);
  }
  window.removeEventListener("resize", handleResize);

  ctx.value = null;
  particleProps.value = null;
});
</script>
