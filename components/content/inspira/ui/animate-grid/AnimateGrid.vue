<template>
  <div :class="cn('relative block', props.class)">
    <div
      :class="
        cn(
          'relative grid w-full max-w-full items-center justify-center',
          props.cards.length < 4 ? `grid-cols-${props.cards.length}` : 'grid-cols-4',
        )
      "
      :style="{
        transform: `perspective(${props.perspective}px) rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg)`,
      }"
    >
      <div
        v-for="(item, index) in props.cards"
        :key="index"
        ref="card"
        class="card block rounded border border-transparent px-3 py-5 transition-all duration-200"
        :style="{ zIndex: index + 1 }"
      >
        <slot
          name="logo"
          :logo="item.logo"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { cn } from "@/lib/utils";
import { useMouseInElement, useDebounceFn } from "@vueuse/core";

const card = ref<HTMLElement[]>();
interface Cards {
  logo: string;
}
interface Props {
  class?: string;
  textGlowStartColor?: string;
  perspective?: number;
  textGlowEndColor?: string;
  cards: Cards[];
  rotateX?: number;
  rotateY?: number;
}

const props = withDefaults(defineProps<Props>(), {
  textGlowStartColor: "#38ef7d80",
  textGlowEndColor: "#38ef7d",
  perspective: 600,
  rotateX: -1,
  rotateY: -15,
});

function adjacentCardItems(i: number): HTMLElement[] {
  return [i - 1, i + 1, i - 4, i + 4]
    .filter((index) => {
      if (index < 0 || index > 15) return false;
      if (i % 4 === 0 && index === i - 1) return false;
      if (i % 4 === 3 && index === i + 1) return false;
      return true;
    })
    .map((index) => card.value?.[index]) as HTMLElement[];
}

function removeCardClasses(el: HTMLElement, adjacentCards: HTMLElement[]) {
  el.classList.remove("card-raised-big");
  adjacentCards.forEach((adjacentCard) => {
    adjacentCard?.classList.remove("card-raised-small");
  });
}
onMounted(() => {
  card.value?.forEach((el, i) => {
    const { isOutside } = useMouseInElement(el);
    const adjacentCards = adjacentCardItems(i);
    // add class when mouse is inside the element
    const removeClasses = useDebounceFn(() => removeCardClasses(el, adjacentCards), 200);
    watch(isOutside, (isOutside) => {
      if (!isOutside) {
        el.classList.add("card-raised-big");
        adjacentCards.forEach((adjacentCard) => {
          adjacentCard?.classList.add("card-raised-small");
        });
      } else {
        removeClasses();
      }
    });
  });
});
</script>

<style scoped>
.logo svg {
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin: 0 auto;
}

.grid-transform:before {
  content: "";
  z-index: -1;
  left: -10%;
  top: -10%;
  position: absolute;
  width: 150%;
  height: 120%;
  background: radial-gradient(circle, #d9fbe8 0%, white 70%, transparent 100%);
  opacity: 0.5;
}

.dark .grid-transform:before {
  background: radial-gradient(circle, #1f2937 0%, #020420 70%, transparent 100%);
}

.card {
  box-shadow:
    2px 2px 5px rgba(217, 251, 232, 0.5),
    3px 3px 10px rgba(217, 251, 232, 0.5),
    6px 6px 20px rgba(217, 251, 232, 0.1);
}

.dark .card {
  box-shadow:
    2px 2px 5px rgba(31, 41, 55, 0.2),
    3px 3px 10px rgba(31, 41, 55, 0.2),
    6px 6px 20px rgba(31, 41, 55, 0.1);
}

.card svg {
  opacity: 0.7;
  transition: 0.2s;
}

.dark .card:hover {
  box-shadow:
    3px 3px 5px rgba(31, 41, 55, 1),
    5px 5px 10px rgba(31, 41, 55, 1),
    10px 10px 20px rgba(31, 41, 55, 1);
}

.card:hover svg {
  opacity: 1;
}

.card svg {
  shape-rendering: geometricPrecision;
}

.card-raised-small {
  border: 1px solid rgba(0, 193, 106, 0.3);
  transform: scale(1.05) translateX(-5px) translateY(-5px) translateZ(0);
  animation: text-glow-small 1.5s alternate infinite ease-in-out;
}

.card-raised-big {
  border: 1px solid rgba(0, 193, 106, 0.5);
  background-color: white;
  transform: scale(1.15) translateX(-20px) translateY(-20px) translateZ(15px);
  animation: text-glow 1.5s alternate infinite ease-in-out;
}

.dark .card-raised-big {
  border: 1px solid rgba(217, 251, 232, 0.3);
  background-color: #020420;
}

.dark .card-raised-small {
  border: 1px solid rgba(217, 251, 232, 0.2);
  transform: scale(1.05) translateX(-5px) translateY(-5px) translateZ(0);
}

@keyframes text-glow {
  0% {
    filter: drop-shadow(0px 0px 2px v-bind(textGlowStartColor));
  }

  100% {
    filter: drop-shadow(0px 1px 8px v-bind(textGlowEndColor));
  }
}

@keyframes text-glow-small {
  0% {
    filter: drop-shadow(0px 0px 2px rgba(56, 239, 125, 0.1));
  }

  100% {
    filter: drop-shadow(0px 1px 4px rgba(56, 239, 125, 0.5));
  }
}
</style>
