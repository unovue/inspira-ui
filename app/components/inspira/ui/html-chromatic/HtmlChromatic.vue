<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { HtmlInCanvas } from "../html-in-canvas";

const props = withDefaults(defineProps<Props>(), {
  autoPause: true,
  frameRate: 60,
  mouseDamping: 0.9,
  paused: false,
  pixelRatio: 1,
  strength: 0.03,
});

const shaderCode = `
uniform float uStrength;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  if (iHasContent < 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec2 uv = fragCoord / iResolution.xy;
  vec2 pointer = iMouse.xy / iResolution.xy;
  vec2 pointerOffset = pointer - 0.5;
  float pointerDistance = length(pointerOffset);
  vec2 direction = pointerOffset / max(pointerDistance, 0.0001);
  vec2 separation = direction * pointerDistance * uStrength * iPointerInside;

  vec2 redUv = clamp(uv - separation, vec2(0.001), vec2(0.999));
  vec2 blueUv = clamp(uv + separation, vec2(0.001), vec2(0.999));
  vec4 base = texture(iChannel0, uv);

  fragColor = vec4(
    texture(iChannel0, redUv).r,
    base.g,
    texture(iChannel0, blueUv).b,
    base.a
  );
}
`;

interface Props {
  autoPause?: boolean;
  class?: HTMLAttributes["class"];
  frameRate?: number;
  mouseDamping?: number;
  paused?: boolean;
  pixelRatio?: number;
  strength?: number;
}

const uniforms = computed(() => ({ uStrength: props.strength }));
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
