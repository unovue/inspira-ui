<template>
  <div :class="cn('absolute inset-0', props.class)">
    <ShaderToy
      :shader-code="shaderCode"
      :hue="props.hue"
      :saturation="props.saturation"
      :brightness="props.brightness"
      :speed="props.speed"
    />
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

interface Props {
  class?: HTMLAttributes["class"];
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
}

const props = withDefaults(defineProps<Props>(), {
  hue: 300,
  saturation: 0.5,
  brightness: 1,
  speed: 1,
});

const shaderCode = `
// ShaderToy URL: https://www.shadertoy.com/view/X3yXRd
// The MIT License
// Copyright © 2024 Giorgi Azmaipharashvili
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#define INVERT 1

float noise(vec2 p) {
    return smoothstep(-0.5, 0.9, sin((p.x - p.y) * 555.0) * sin(p.y * 1444.0)) - 0.4;
}

float fabric(vec2 p) {
    const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    float f = 0.4 * noise(p);
    f += 0.3 * noise(p = m * p);
    f += 0.2 * noise(p = m * p);
    return f + 0.1 * noise(m * p);
}

float silk(vec2 uv, float t) {
    float s = sin(5.0 * (uv.x + uv.y + cos(2.0 * uv.x + 5.0 * uv.y)) + sin(12.0 * (uv.x + uv.y)) - t);
    s = 0.7 + 0.3 * (s * s * 0.5 + s);
    s *= 0.9 + 0.6 * fabric(uv * min(iResolution.x, iResolution.y) * 0.0006);
    return s * 0.9 + 0.1;
}

float silkd(vec2 uv, float t) {
    float xy = uv.x + uv.y;
    float d = (5.0 * (1.0 - 2.0 * sin(2.0 * uv.x + 5.0 * uv.y)) + 12.0 * cos(12.0 * xy)) * cos(5.0 * (cos(2.0 * uv.x + 5.0 * uv.y) + xy) + sin(12.0 * xy) - t);
    return 0.005 * d * (sign(d) + 3.0);
}

void mainImage(out vec4 fragColor, vec2 fragCoord) {
    float mr = min(iResolution.x, iResolution.y);
    vec2 uv = fragCoord / mr;

    float t = iTime;
    uv.y += 0.03 * sin(8.0 * uv.x - t);

    if (iMouse.z > 1.0)
        uv += smoothstep(0.5, 0.0, distance(iMouse.xy / mr, uv)) * 0.08;
    // uv -= normalize(iMouse.xy / iResolution.xy * 2.0 - 1.0) * t * 0.05; // Wind, requires state

    float s = sqrt(silk(uv, t));
    float d = silkd(uv, t);

    vec3 c = vec3(s);
    c += 0.7 * vec3(1, 0.83, 0.6) * d;
    c *= 1.0 - max(0.0, 0.8 * d);
#if INVERT
    c = pow(c, 0.3 / vec3(0.52, 0.5, 0.4));
    c = 1.0 - c;
#else
    c = pow(c, vec3(0.52, 0.5, 0.4));
#endif

    fragColor = vec4(c, 1);
}
`;
</script>
