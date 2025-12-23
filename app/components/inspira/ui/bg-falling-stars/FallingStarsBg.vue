<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

interface Star {
  x: number;
  y: number;
  z: number;
  speed: number;
}

const props = withDefaults(
  defineProps<{
    color?: string;
    count?: number;
    class?: string;
  }>(),
  {
    color: "#FFF",
    count: 200,
  },
);

const starsCanvas = ref<HTMLCanvasElement | null>(null);
let perspective: number = 0;
let stars: Star[] = [];
let ctx: CanvasRenderingContext2D | null = null;
let dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
let rafId = 0 as number;

// Cache RGB for color — update only when prop changes
let cachedRgb = hexToRgb(props.color || "#FFF");

function hexToRgb(hex: string) {
  let h = (hex || "#000").replace(/^#/, "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const bigint = Number.parseInt(h, 16) || 0;
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

watch(
  () => props.color,
  (v) => {
    cachedRgb = hexToRgb(v || "#FFF");
  },
);

// Resize handler uses DPR to set backing store size once
function resizeCanvas() {
  const canvas = starsCanvas.value;
  if (!canvas) return;

  dpr = window.devicePixelRatio || 1;
  const width = Math.max(1, Math.floor(canvas.clientWidth));
  const height = Math.max(1, Math.floor(canvas.clientHeight));

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  // Get and set transform so drawing coordinates use CSS pixels
  ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // perspective should be in CSS pixels
  perspective = canvas.width / dpr / 2;
}

onMounted(() => {
  const canvas = starsCanvas.value;
  if (!canvas) return;

  window.addEventListener("resize", resizeCanvas, { passive: true });
  resizeCanvas();

  // Initialize stars using CSS pixel coordinates for x/y and z in CSS pixels
  stars = [];
  const cssWidth = canvas.clientWidth;
  const cssHeight = canvas.clientHeight;
  for (let i = 0; i < props.count!; i++) {
    stars.push({
      x: (Math.random() - 0.5) * 2 * cssWidth,
      y: (Math.random() - 0.5) * 2 * cssHeight,
      z: Math.random() * (cssWidth || 1),
      speed: Math.random() * 5 + 2,
    });
  }

  // Start loop
  rafId = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeCanvas);
  if (rafId) cancelAnimationFrame(rafId);
});

// Draw star using layered strokes to simulate blur (avoids ctx.shadowBlur)
function drawStar(star: Star, width: number, height: number) {
  if (!ctx) return;

  const scale = perspective / (perspective + star.z);
  const x2d = width / 2 + star.x * scale;
  const y2d = height / 2 + star.y * scale;
  const size = Math.max(scale * 3, 0.5);

  const prevScale = perspective / (perspective + star.z + star.speed * 15);
  const xPrev = width / 2 + star.x * prevScale;
  const yPrev = height / 2 + star.y * prevScale;

  const rgb = cachedRgb;

  // Layered strokes from wide+faint to narrow+slightly brighter to fake blur
  const layerAlphas = [0.08, 0.14, 0.22];
  for (let i = 0; i < layerAlphas.length; i++) {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${layerAlphas[i]})`;
    ctx.lineWidth = size * (1.4 + i * 1.2);
    ctx.moveTo(x2d, y2d);
    ctx.lineTo(xPrev, yPrev);
    ctx.stroke();
  }

  // Sharp center line
  ctx.beginPath();
  ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)`;
  ctx.lineWidth = Math.max(1, size);
  ctx.moveTo(x2d, y2d);
  ctx.lineTo(xPrev, yPrev);
  ctx.stroke();

  // Dot
  ctx.beginPath();
  ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
  ctx.arc(x2d, y2d, Math.max(0.5, size / 4), 0, Math.PI * 2);
  ctx.fill();
}

function loop() {
  const canvas = starsCanvas.value;
  if (!canvas) return;
  if (!ctx) ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // Clear using CSS pixel dimensions (context is scaled to DPR)
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i] as Star;
    drawStar(star, width, height);

    star.z -= star.speed;

    if (star.z <= 0) {
      star.z = width || 1;
      star.x = (Math.random() - 0.5) * 2 * width;
      star.y = (Math.random() - 0.5) * 2 * height;
    }
  }

  rafId = requestAnimationFrame(loop);
}
</script>

<template>
  <canvas
    ref="starsCanvas"
    class="absolute inset-0 h-full w-full"
    :class="[$props.class]"
  />
</template>
