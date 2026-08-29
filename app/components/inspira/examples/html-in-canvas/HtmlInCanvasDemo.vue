<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<Props>(), {
  frequency: 18,
  mouseDamping: 0.9,
  strength: 0.03,
  waveSpeed: 3,
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
  frequency?: number;
  mouseDamping?: number;
  strength?: number;
  waveSpeed?: number;
}

const uniforms = computed(() => ({
  uFrequency: props.frequency,
  uStrength: props.strength,
  uWaveSpeed: props.waveSpeed,
}));
</script>

<template>
  <div class="h-[36rem] w-full bg-zinc-950 p-3 sm:p-5">
    <HtmlInCanvas
      :shader-code="shaderCode"
      :uniforms="uniforms"
      :mouse-damping="props.mouseDamping"
      class="border border-white/15 bg-white text-zinc-950"
    >
      <article class="grid h-full grid-rows-[auto_1fr_auto] bg-white">
        <header
          class="flex items-center justify-between border-b border-zinc-950/15 px-5 py-4 sm:px-8"
        >
          <span class="text-xs font-semibold tracking-[0.18em] uppercase">Inspira Journal</span>
          <span class="font-mono text-xs text-zinc-500">Issue 08 / 2026</span>
        </header>

        <div class="grid min-h-0 md:grid-cols-[1.15fr_0.85fr]">
          <section class="flex flex-col justify-between border-zinc-950/15 p-5 md:border-r md:p-8">
            <p class="max-w-48 text-sm leading-6 text-zinc-500">
              Pass HTML through a WebGL shader while preserving the original document structure and
              fallback behavior.
            </p>
            <h2 class="max-w-xl text-5xl leading-[0.88] font-semibold tracking-tight sm:text-7xl">
              <span class="block">HTML,</span>
              <span class="block">refracted.</span>
            </h2>
          </section>

          <section
            class="grid min-h-0 grid-rows-[1fr_auto] border-t border-zinc-950/15 md:border-t-0"
          >
            <div class="relative min-h-56 overflow-hidden bg-zinc-950 p-5 text-white sm:p-8">
              <div class="flex h-full flex-col justify-between border border-white/15 p-4 sm:p-6">
                <div
                  class="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-white/55 uppercase"
                >
                  <span>Surface study</span>
                  <span>01 / 01</span>
                </div>
                <div>
                  <div class="mb-3 h-px w-20 bg-white/35" />
                  <p
                    class="max-w-56 text-4xl leading-[0.9] font-semibold tracking-tight sm:text-6xl"
                  >
                    Move the surface.
                  </p>
                </div>
                <p class="font-mono text-[10px] tracking-[0.18em] text-white/55 uppercase">
                  HTML / WebGL / live
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 border-t border-zinc-950/15 text-sm">
              <span class="border-r border-zinc-950/15 px-4 py-4">WebGL 2</span>
              <span class="px-4 py-4 text-right">iChannel0</span>
            </div>
          </section>
        </div>

        <footer
          class="flex items-center justify-between border-t border-zinc-950/15 px-5 py-4 text-xs sm:px-8"
        >
          <span>Experimental HTML rendering</span>
          <span class="font-mono text-zinc-500">liquid</span>
        </footer>
      </article>
    </HtmlInCanvas>
  </div>
</template>
