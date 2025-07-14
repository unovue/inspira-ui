<template>
  <div
    ref="containerRef"
    class="relative w-full h-full"
  />
</template>

<script setup lang="ts">
import { Color, Polyline, Renderer, Transform, Vec3 } from "ogl";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

interface RibbonsProps {
  colors?: string[];
  baseSpring?: number;
  baseFriction?: number;
  baseThickness?: number;
  offsetFactor?: number;
  maxAge?: number;
  pointCount?: number;
  speedMultiplier?: number;
  enableFade?: boolean;
  enableShaderEffect?: boolean;
  effectAmplitude?: number;
  backgroundColor?: number[];
}

const props = withDefaults(defineProps<RibbonsProps>(), {
  colors: () => ["#ff9346", "#7cff67", "#ffee51", "#00d8ff"],
  baseSpring: 0.03,
  baseFriction: 0.9,
  baseThickness: 30,
  offsetFactor: 0.05,
  maxAge: 500,
  pointCount: 50,
  speedMultiplier: 0.6,
  enableFade: false,
  enableShaderEffect: false,
  effectAmplitude: 2,
  backgroundColor: () => [0, 0, 0, 0],
});

const containerRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const container = containerRef.value;
  if (!container) return;

  // Create a renderer with an alpha-enabled context.
  const renderer = new Renderer({ dpr: window.devicePixelRatio || 2, alpha: true });
  const gl = renderer.gl;
  if (Array.isArray(props.backgroundColor) && props.backgroundColor.length === 4) {
    gl.clearColor(
      props.backgroundColor[0],
      props.backgroundColor[1],
      props.backgroundColor[2],
      props.backgroundColor[3],
    );
  } else {
    gl.clearColor(0, 0, 0, 0);
  }

  gl.canvas.style.position = "absolute";
  gl.canvas.style.top = "0";
  gl.canvas.style.left = "0";
  gl.canvas.style.width = "100%";
  gl.canvas.style.height = "100%";
  container.appendChild(gl.canvas);

  const scene = new Transform();
  const lines: {
    spring: number;
    friction: number;
    mouseVelocity: Vec3;
    mouseOffset: Vec3;
    points: Vec3[];
    polyline: Polyline;
  }[] = [];

  const vertex = `
    precision highp float;
    
    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;
    
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uTime;
    uniform float uEnableShaderEffect;
    uniform float uEffectAmplitude;
    
    varying vec2 vUV;
    
    vec4 getPosition() {
        vec4 current = vec4(position, 1.0);
        vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
        vec2 nextScreen = next.xy * aspect;
        vec2 prevScreen = prev.xy * aspect;
        vec2 tangent = normalize(nextScreen - prevScreen);
        vec2 normal = vec2(-tangent.y, tangent.x);
        normal /= aspect;
        normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
        float dist = length(nextScreen - prevScreen);
        normal *= smoothstep(0.0, 0.02, dist);
        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
        if(uEnableShaderEffect > 0.5) {
          current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
        }
        return current;
    }
    
    void main() {
        // Pass the original uv to the fragment shader.
        vUV = uv;
        gl_Position = getPosition();
    }
  `;

  // Fragment shader uses vUV.y (progress along the ribbon) for fade.
  const fragment = `
    precision highp float;
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uEnableFade;
    varying vec2 vUV;
    void main() {
        float fadeFactor = 1.0;
        if(uEnableFade > 0.5) {
            fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
        }
        gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
    }
  `;

  function resize() {
    if (!container) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    lines.forEach((line) => line.polyline.resize());
  }
  window.addEventListener("resize", resize);

  const center = (props.colors.length - 1) / 2;
  props.colors.forEach((color, index) => {
    const spring = props.baseSpring + (Math.random() - 0.5) * 0.05;
    const friction = props.baseFriction + (Math.random() - 0.5) * 0.05;
    const thickness = props.baseThickness + (Math.random() - 0.5) * 3;
    const mouseOffset = new Vec3(
      (index - center) * props.offsetFactor + (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.1,
      0,
    );

    const line = {
      spring,
      friction,
      mouseVelocity: new Vec3(),
      mouseOffset,
      points: [] as Vec3[],
      polyline: {} as Polyline,
    };

    const count = props.pointCount;
    const points: Vec3[] = [];
    for (let i = 0; i < count; i++) {
      points.push(new Vec3());
    }
    line.points = points;

    line.polyline = new Polyline(gl, {
      points,
      vertex,
      fragment,
      uniforms: {
        uColor: { value: new Color(color) },
        uThickness: { value: thickness },
        uOpacity: { value: 1.0 },
        uTime: { value: 0.0 },
        uEnableShaderEffect: { value: props.enableShaderEffect ? 1.0 : 0.0 },
        uEffectAmplitude: { value: props.effectAmplitude },
        uEnableFade: { value: props.enableFade ? 1.0 : 0.0 },
      },
    });
    line.polyline.mesh.setParent(scene);
    lines.push(line);
  });

  resize();

  const mouse = new Vec3();
  function updateMouse(e: MouseEvent | TouchEvent) {
    let x: number, y: number;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    if ("changedTouches" in e && e.changedTouches.length) {
      x = e.changedTouches[0].clientX - rect.left;
      y = e.changedTouches[0].clientY - rect.top;
    } else if (e instanceof MouseEvent) {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    } else {
      x = 0;
      y = 0;
    }
    const width = container.clientWidth;
    const height = container.clientHeight;
    mouse.set((x / width) * 2 - 1, (y / height) * -2 + 1, 0);
  }
  container.addEventListener("mousemove", updateMouse);
  container.addEventListener("touchstart", updateMouse);
  container.addEventListener("touchmove", updateMouse);

  const tmp = new Vec3();
  let frameId: number;
  let lastTime = performance.now();
  function update() {
    frameId = requestAnimationFrame(update);
    const currentTime = performance.now();
    const dt = currentTime - lastTime;
    lastTime = currentTime;

    lines.forEach((line) => {
      tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
      line.mouseVelocity.add(tmp).multiply(line.friction);
      line.points[0].add(line.mouseVelocity);

      for (let i = 1; i < line.points.length; i++) {
        if (isFinite(props.maxAge) && props.maxAge > 0) {
          const segmentDelay = props.maxAge / (line.points.length - 1);
          const alpha = Math.min(1, (dt * props.speedMultiplier) / segmentDelay);
          line.points[i].lerp(line.points[i - 1], alpha);
        } else {
          line.points[i].lerp(line.points[i - 1], 0.9);
        }
      }
      if (line.polyline.mesh.program.uniforms.uTime) {
        line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
      }
      line.polyline.updateGeometry();
    });

    renderer.render({ scene });
  }
  update();

  // Watch for prop changes and update component accordingly
  watch(
    () => props.enableShaderEffect,
    (newValue) => {
      lines.forEach((line) => {
        if (line.polyline.mesh.program.uniforms.uEnableShaderEffect) {
          line.polyline.mesh.program.uniforms.uEnableShaderEffect.value = newValue ? 1.0 : 0.0;
        }
      });
    },
  );

  watch(
    () => props.enableFade,
    (newValue) => {
      lines.forEach((line) => {
        if (line.polyline.mesh.program.uniforms.uEnableFade) {
          line.polyline.mesh.program.uniforms.uEnableFade.value = newValue ? 1.0 : 0.0;
        }
      });
    },
  );

  watch(
    () => props.effectAmplitude,
    (newValue) => {
      lines.forEach((line) => {
        if (line.polyline.mesh.program.uniforms.uEffectAmplitude) {
          line.polyline.mesh.program.uniforms.uEffectAmplitude.value = newValue;
        }
      });
    },
  );

  onBeforeUnmount(() => {
    window.removeEventListener("resize", resize);
    if (container) {
      container.removeEventListener("mousemove", updateMouse);
      container.removeEventListener("touchstart", updateMouse);
      container.removeEventListener("touchmove", updateMouse);
    }
    cancelAnimationFrame(frameId);
    if (gl.canvas && container && gl.canvas.parentNode === container) {
      container.removeChild(gl.canvas);
    }
  });
});
</script>
