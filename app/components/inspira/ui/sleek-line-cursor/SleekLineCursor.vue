<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { onMounted, onUnmounted, ref } from "vue";

interface Props {
  friction?: number;
  trails?: number;
  size?: number;
  dampening?: number;
  tension?: number;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
});

const canvasRef = ref<HTMLCanvasElement | null>(null);

interface NodeType {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface WaveOptions {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

interface LineOptions {
  spring: number;
}

class Wave {
  phase: number = 0;
  offset: number = 0;
  frequency: number = 0.001;
  amplitude: number = 1;
  private e: number = 0;

  constructor(options: WaveOptions = {}) {
    this.init(options);
  }

  init(options: WaveOptions): void {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
  }

  update(): number {
    this.phase += this.frequency;
    this.e = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.e;
  }

  value(): number {
    return this.e;
  }
}

class Node implements NodeType {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
}

class Line {
  spring: number = 0;
  friction: number = 0;
  nodes: NodeType[] = [];

  constructor(options: LineOptions) {
    this.init(options);
  }

  init(options: LineOptions): void {
    this.spring = options.spring + 0.1 * Math.random() - 0.02;
    this.friction = E.friction + 0.01 * Math.random() - 0.002;
    this.nodes = [];

    for (let n = 0; n < E.size; n++) {
      const t = new Node();
      t.x = pos.x;
      t.y = pos.y;
      this.nodes.push(t);
    }
  }

  update(): void {
    let e = this.spring;
    let t = this.nodes[0];

    t.vx += (pos.x - t.x) * e;
    t.vy += (pos.y - t.y) * e;

    for (let i = 0, a = this.nodes.length; i < a; i++) {
      t = this.nodes[i];

      if (i > 0) {
        const n = this.nodes[i - 1];
        t.vx += (n.x - t.x) * e;
        t.vy += (n.y - t.y) * e;
        t.vx += n.vx * E.dampening;
        t.vy += n.vy * E.dampening;
      }

      t.vx *= this.friction;
      t.vy *= this.friction;
      t.x += t.vx;
      t.y += t.vy;
      e *= E.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    let e: NodeType, t: NodeType;
    let n = this.nodes[0].x;
    let i = this.nodes[0].y;

    ctx.beginPath();
    ctx.moveTo(n, i);

    for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }

    e = this.nodes[this.nodes.length - 2];
    t = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  }
}

let ctx: CanvasRenderingContext2D & { running?: boolean; frame?: number };
let f: Wave;
let pos = { x: 0, y: 0 };
let lines: Line[] = [];

const E = {
  debug: true,
  friction: props.friction,
  trails: props.trails,
  size: props.size,
  dampening: props.dampening,
  tension: props.tension,
};

function createLines(): void {
  lines = [];
  for (let e = 0; e < E.trails; e++) {
    lines.push(new Line({ spring: 0.4 + (e / E.trails) * 0.025 }));
  }
}

function updatePosition(e: MouseEvent | TouchEvent): void {
  if ("touches" in e) {
    pos.x = e.touches[0].pageX;
    pos.y = e.touches[0].pageY;
  } else {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }
  e.preventDefault();
}

function handleTouchMove(e: TouchEvent): void {
  if (e.touches.length === 1) {
    pos.x = e.touches[0].pageX;
    pos.y = e.touches[0].pageY;
  }
}

function render(): void {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(f.update())},50%,50%,0.2)`;
    ctx.lineWidth = 1;

    for (let t = 0; t < E.trails; t++) {
      const e = lines[t];
      e.update();
      e.draw(ctx);
    }

    ctx.frame = (ctx.frame || 0) + 1;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas(): void {
  if (ctx && ctx.canvas) {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }
}

function onMouseMove(e: MouseEvent | TouchEvent): void {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("touchstart", onMouseMove);
  document.addEventListener("mousemove", updatePosition);
  document.addEventListener("touchmove", updatePosition);
  document.addEventListener("touchstart", handleTouchMove);
  updatePosition(e);
  createLines();
  render();
}

function handleFocus(): void {
  if (!ctx.running) {
    ctx.running = true;
    render();
  }
}

function handleBlur(): void {
  ctx.running = true;
}

function initCanvas(): void {
  const canvas = canvasRef.value;
  if (!canvas) return;

  ctx = canvas.getContext("2d") as CanvasRenderingContext2D & {
    running?: boolean;
    frame?: number;
  };

  ctx.running = true;
  ctx.frame = 1;

  f = new Wave({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("touchstart", onMouseMove);
  document.body.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", handleFocus);
  window.addEventListener("blur", handleBlur);

  resizeCanvas();
}

function cleanup(): void {
  if (ctx) {
    ctx.running = false;
  }

  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mousemove", updatePosition);
  document.removeEventListener("touchstart", onMouseMove);
  document.removeEventListener("touchstart", handleTouchMove);
  document.removeEventListener("touchmove", updatePosition);
  document.body.removeEventListener("orientationchange", resizeCanvas);
  window.removeEventListener("resize", resizeCanvas);
  window.removeEventListener("focus", handleFocus);
  window.removeEventListener("blur", handleBlur);
}

onMounted(() => {
  initCanvas();
});

onUnmounted(() => {
  cleanup();
});
</script>

<template>
  <canvas
    id="canvas"
    ref="canvasRef"
    class="pointer-events-none fixed inset-0 z-50"
    :class="[props.class]"
  />
</template>
