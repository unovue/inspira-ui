<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { HtmlInCanvas } from "../html-in-canvas";

const props = withDefaults(defineProps<Props>(), {
  autoPause: true,
  frameRate: 60,
  paused: false,
  pixelRatio: 1,
  scale: 6,
  speed: 1,
  strength: 0.03,
});

const shaderCode = `
// Vector-field foundation by MartinRGB: https://www.shadertoy.com/view/DttSRB

uniform float uScale;
uniform float uSpeed;
uniform float uStrength;

const int iterations = 20;
const float velocityX = 0.1;
const float velocityY = 0.2;
const float detail = 200.0;
const float twist = 50.0;

float clothSignal(vec2 point) {
  float time = iTime * uSpeed;
  return sin(point.x + sin(point.y + time * velocityX))
    * sin(point.y * point.x * 0.1 + time * velocityY);
}

vec2 clothField(vec2 point) {
  vec2 epsilon = vec2(0.05, 0.0);
  vec2 gradient = vec2(0.0);
  float time = iTime * uSpeed;

  for (int index = 0; index < iterations; index++) {
    float center = clothSignal(point);
    float horizontal = clothSignal(point + epsilon.xy);
    float vertical = clothSignal(point + epsilon.yx);
    gradient = vec2(horizontal - center, vertical - center) / epsilon.xx;
    vec2 tangent = vec2(-gradient.y, gradient.x);

    point += twist * 0.01 * tangent + gradient / detail;
    point.x += sin(time * 0.25) * 0.1;
    point.y += cos(time * 0.25) * 0.1;
  }

  return gradient;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  if (iHasContent < 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec2 uv = fragCoord / iResolution.xy;
  vec2 point = uv - 0.5;
  point.x *= iResolution.x / iResolution.y;
  point *= uScale;

  vec2 flow = clamp(clothField(point), vec2(-2.0), vec2(2.0));
  vec2 sampleUv = clamp(
    uv + flow * uStrength,
    vec2(0.002),
    vec2(0.998)
  );

  fragColor = texture(iChannel0, sampleUv);
}
`;

interface Props {
  autoPause?: boolean;
  class?: HTMLAttributes["class"];
  frameRate?: number;
  paused?: boolean;
  pixelRatio?: number;
  scale?: number;
  speed?: number;
  strength?: number;
}

const uniforms = computed(() => ({
  uScale: props.scale,
  uSpeed: props.speed,
  uStrength: props.strength,
}));
</script>

<template>
  <HtmlInCanvas
    :shader-code="shaderCode"
    :uniforms="uniforms"
    :auto-pause="props.autoPause"
    :frame-rate="props.frameRate"
    :interactive="false"
    :paused="props.paused"
    :pixel-ratio="props.pixelRatio"
    :class="props.class"
  >
    <slot />
  </HtmlInCanvas>
</template>
