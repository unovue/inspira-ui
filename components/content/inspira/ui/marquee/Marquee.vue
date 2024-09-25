<template>
  <div
    :class="[
      'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
      vertical ? 'flex-col' : 'flex-row',
      $props.class,
    ]"
  >
    <div
      v-for="index in repeat"
      :key="index"
      :class="[
        'flex shrink-0 justify-around [gap:var(--gap)]',
        vertical
          ? 'animate-marquee-vertical flex-col'
          : 'animate-marquee flex-row',
        pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '',
        reverse ? '[animation-direction:reverse]' : '',
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    class?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
  }>(),
  {
    pauseOnHover: false,
    vertical: false,
    repeat: 4,
  }
);
</script>

<style scoped>
.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}

.animate-marquee-vertical {
  animation: marquee-vertical var(--duration) linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}
</style>
