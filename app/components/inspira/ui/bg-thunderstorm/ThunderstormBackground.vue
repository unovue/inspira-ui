<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
  mouseSensitivity?: number;
  damping?: number;
}

const props = withDefaults(defineProps<Props>(), {
  hue: 0,
  saturation: 1,
  brightness: 1,
  speed: 1,
  mouseSensitivity: 0.5,
  damping: 1,
});

const shader = `
// ShaderToy URL: https://www.shadertoy.com/view/W3d3z7
float n(vec2 p) {
  return sin(p.x * 3. + sin(p.y * 2.7)) * cos(p.y * 1.1 + cos(p.x * 2.3));
}

float f(vec2 p) {
  float v = 0., a = 1.;
  for (int i = 0; i < 9; i++)
    v += n(p) * a,
      p *= 2.,
      a *= .5;
  return v;
}

void mainImage(out vec4 o, vec2 p) {
  p = (p - iResolution.xy) / iResolution.y;

  float t = iTime;

  vec3 c = vec3(.1, .2, .6) / (length(p + vec2(sin(t * 2.2), sin(t)) + f(p + t * .3 + 1.)) * 2.1)
    + vec3(.7, .5, .2) / (length(p + vec2(cos(t * 2.), sin(t)) + f(p + t * .3 + 1.)) * 2.1)
    + vec3(1.3) / (length(p + vec2(sin(t * 1.2), cos(t * 1.3)) + f(p + t * .3 + 2.)) * 2.1);
  o = vec4(c * .8 / (3.5 + c), 1);
}
`;
</script>

<template>
  <div
    class="absolute inset-0"
    :class="[props.class]"
  >
    <ShaderToy
      :shader-code="shader"
      :hue="props.hue"
      :saturation="props.saturation"
      :brightness="props.brightness"
      :speed="props.speed"
      :mouse-sensitivity="props.mouseSensitivity"
      :damping="props.damping"
    />
  </div>
</template>
