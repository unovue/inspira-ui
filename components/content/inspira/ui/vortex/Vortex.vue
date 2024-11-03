<template>
  <div :class="cn('relative h-full w-full', props.containerClass)">
    <div
      ref="containerRef"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      class="absolute inset-0 z-0 flex size-full items-center justify-center bg-transparent"
    >
      <canvas ref="canvasRef"></canvas>
    </div>

    <div :class="cn('relative z-10', props.class)">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { createNoise3D } from "simplex-noise";

// All constants
const TAU = 2 * Math.PI;
const baseTTL = 50;
const rangeTTL = 150;
const particlePropCount = 9;
const rangeHue = 100;
const noiseSteps = 3;
const xOff = 0.00125;
const yOff = 0.00125;
const zOff = 0.0005;
let tick = 0;

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

const canvasRef = useTemplateRef<HTMLCanvasElement | null>("canvasRef");
const containerRef = useTemplateRef<HTMLElement | null>("containerRef");

const particlePropsLength = props.particleCount * particlePropCount;

const noise3D = createNoise3D();
let particleProps = new Float32Array(particlePropsLength);
let center: [number, number] = [0, 0];

function rand(n: number): number {
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

function setup() {
  const canvas = canvasRef.value;
  const container = containerRef.value;
  if (canvas && container) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      resize(canvas, ctx);
      initParticles();
      draw(canvas, ctx);
    }
  }
}

function initParticles() {
  tick = 0;
  particleProps = new Float32Array(particlePropsLength);
  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    initParticle(i);
  }
}

function initParticle(i: number) {
  const canvas = canvasRef.value;
  if (!canvas) return;

  let x, y, vx, vy, life, ttl, speed, radius, hue;
  x = rand(canvas.width);
  y = center[1] + randRange(props.rangeY);
  vx = 0;
  vy = 0;
  life = 0;
  ttl = baseTTL + rand(rangeTTL);
  speed = props.baseSpeed + rand(props.rangeSpeed);
  radius = props.baseRadius + rand(props.rangeRadius);
  hue = props.baseHue + rand(rangeHue);

  particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
}

function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  tick++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = props.backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawParticles(ctx);
  renderGlow(canvas, ctx);
  renderToScreen(canvas, ctx);

  requestAnimationFrame(() => draw(canvas, ctx));
}

function drawParticles(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    updateParticle(i, ctx);
  }
}

function updateParticle(i: number, ctx: CanvasRenderingContext2D) {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const [x, y, vx, vy, life, ttl, speed, radius, hue] = [
    particleProps[i],
    particleProps[i + 1],
    particleProps[i + 2],
    particleProps[i + 3],
    particleProps[i + 4],
    particleProps[i + 5],
    particleProps[i + 6],
    particleProps[i + 7],
    particleProps[i + 8],
  ];

  const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
  const nextVx = lerp(vx, Math.cos(n), 0.5);
  const nextVy = lerp(vy, Math.sin(n), 0.5);

  drawParticle(x, y, x + nextVx * speed, y + nextVy * speed, life, ttl, radius, hue, ctx);

  particleProps[i] = x + nextVx * speed;
  particleProps[i + 1] = y + nextVy * speed;
  particleProps[i + 2] = nextVx;
  particleProps[i + 3] = nextVy;
  particleProps[i + 4] = life + 1;

  if (checkBounds(x, y, canvas) || life > ttl) {
    initParticle(i);
  }
}

function drawParticle(
  x: number,
  y: number,
  x2: number,
  y2: number,
  life: number,
  ttl: number,
  radius: number,
  hue: number,
  ctx: CanvasRenderingContext2D,
) {
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineWidth = radius;
  ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

function checkBounds(x: number, y: number, canvas: HTMLCanvasElement) {
  return x > canvas.width || x < 0 || y > canvas.height || y < 0;
}

function resize(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
  const { innerWidth, innerHeight } = window;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  center[0] = 0.5 * canvas.width;
  center[1] = 0.5 * canvas.height;
}

function renderGlow(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.filter = "blur(8px) brightness(200%)";
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();

  ctx.save();
  ctx.filter = "blur(4px) brightness(200%)";
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();
}

function renderToScreen(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();
}

onMounted(() => {
  setup();
  window.addEventListener("resize", () => {
    const canvas = canvasRef.value;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      resize(canvas, ctx);
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {});
});
</script>
