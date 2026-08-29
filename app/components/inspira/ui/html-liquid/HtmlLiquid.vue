<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { HtmlInCanvas } from "../html-in-canvas";

const props = withDefaults(defineProps<Props>(), {
  autoPause: true,
  frameRate: 60,
  frequency: 18,
  mouseDamping: 0.9,
  paused: false,
  pixelRatio: 1,
  speed: 3,
  strength: 0.03,
});

const shaderCode = `
uniform float uStrength;
uniform float uFrequency;
uniform float uWaveSpeed;

vec2 flowField(vec2 uv, float time) {
  float aspect = iResolution.x / iResolution.y;
  vec2 point = (uv - 0.5) * vec2(aspect, 1.0);
  float frequency = max(uFrequency, 1.0);
  float speed = max(uWaveSpeed, 0.01);
  vec2 flow = vec2(
    sin(point.y * frequency + time * speed),
    cos(point.x * (frequency * 0.82) - time * (speed * 0.9))
  );

  flow += 0.35 * vec2(
    sin((point.x + point.y) * (frequency * 0.42) - time * speed),
    cos((point.x - point.y) * (frequency * 0.48) + time * speed)
  );

  return flow;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;
  vec2 flow = flowField(uv, iTime);

  vec2 pointer = iMouse.xy / iResolution.xy;
  vec2 delta = uv - pointer;
  delta.x *= iResolution.x / iResolution.y;
  float distanceToPointer = length(delta);
  vec2 direction = normalize(delta + vec2(0.0001));
  direction.x /= iResolution.x / iResolution.y;

  float ripple = sin(distanceToPointer * uFrequency - iPointerAge * uWaveSpeed * 5.0);
  float rippleFalloff = exp(-distanceToPointer * 7.0) * exp(-iPointerAge * 1.5);
  float impulse = iPointerEnergy * rippleFalloff;
  vec2 velocity = iPointerVelocity / max(iResolution.xy, vec2(1.0));
  vec2 displacement = flow * uStrength * vec2(0.14, 0.11);
  displacement += direction * ripple * impulse * uStrength;
  displacement += velocity * impulse * 0.4;

  if (iHasContent > 0.5) {
    vec2 sampleUv = clamp(uv + displacement, vec2(0.001), vec2(0.999));
    vec2 detailUv = clamp(uv + displacement * 1.35, vec2(0.001), vec2(0.999));
    vec4 surface = texture(iChannel0, sampleUv);
    vec4 detail = texture(iChannel0, detailUv);
    fragColor = mix(surface, detail, 0.05 + 0.05 * impulse);
    return;
  }

  float sheen = abs(flow.x + flow.y) * 0.4 + ripple * impulse;
  float alpha = smoothstep(0.55, 1.3, sheen) * 0.045;
  fragColor = vec4(vec3(1.0), alpha);
}
`;

interface Props {
  autoPause?: boolean;
  class?: HTMLAttributes["class"];
  frameRate?: number;
  frequency?: number;
  mouseDamping?: number;
  paused?: boolean;
  pixelRatio?: number;
  speed?: number;
  strength?: number;
}

const uniforms = computed(() => ({
  uFrequency: props.frequency,
  uStrength: props.strength,
  uWaveSpeed: props.speed,
}));
</script>

<template>
  <HtmlInCanvas
    :shader-code="shaderCode"
    :uniforms="uniforms"
    :auto-pause="props.autoPause"
    :frame-rate="props.frameRate"
    :mouse-damping="props.mouseDamping"
    :paused="props.paused"
    :pixel-ratio="props.pixelRatio"
    :class="props.class"
  >
    <slot />
  </HtmlInCanvas>
</template>
