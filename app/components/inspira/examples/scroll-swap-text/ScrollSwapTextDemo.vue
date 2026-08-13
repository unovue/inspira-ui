<script setup lang="ts">
import Lenis from "lenis";
import { onBeforeUnmount, onMounted, ref } from "vue";

interface Props {
  stiffness?: number;
  damping?: number;
  mass?: number;
}

const props = withDefaults(defineProps<Props>(), {
  stiffness: 200,
  damping: 30,
  mass: 1,
});

const names = [
  "Alexandra Rodriguez",
  "Benjamin Chen",
  "Catherine Williams",
  "David Martinez",
  "Elena Petrov",
  "Francesco Rossi",
  "Gabriela Santos",
  "Henrik Larsson",
  "Isabella Thompson",
  "James Anderson",
  "Katarina Novak",
  "Leonardo Silva",
  "Maria Gonzalez",
  "Nikolai Volkov",
  "Olivia Johnson",
  "Pablo Hernandez",
  "Qiana Washington",
  "Ricardo Lopez",
  "Sophia Kim",
  "Thomas Mueller",
  "Ursula Schmidt",
  "Viktor Petersen",
  "Wen Li",
  "Xavier Dubois",
  "Yasmin Hassan",
  "Zachary Brown",
  "Amelia Davis",
  "Bruno Costa",
  "Clara Johansson",
  "Diego Morales",
  "Evelyn Taylor",
  "Felix Wagner",
  "Grace Wilson",
  "Hugo Andersen",
  "Iris Nakamura",
  "Julian Beck",
  "Kira Popovic",
  "Lucas Garcia",
  "Maya Patel",
  "Nathan Clark",
  "Ophelia Martin",
  "Pietro Romano",
  "Quinn O'Brien",
  "Rosa Fernandez",
  "Sebastian Lee",
  "Tara Mitchell",
  "Ulrich Weber",
  "Valentina Rosso",
  "William Jones",
  "Xiomara Reyes",
  "Yuki Tanaka",
  "Zara Ahmed",
  "Andre Leclerc",
  "Beatrice Hall",
  "Carlos Mendoza",
  "Delphine Moreau",
  "Emilio Bianchi",
  "Fiona Murphy",
  "Giovanni Conti",
  "Helena Svensson",
  "Ivan Dimitrov",
  "Jasmine Green",
  "Kai Nielsen",
  "Luna Torres",
  "Marco Esposito",
  "Nadia Kozlov",
  "Oscar Lindberg",
  "Penelope White",
  "Quincy Adams",
  "Rafael Vargas",
  "Stella Jackson",
  "Theo Van Der Berg",
  "Uma Sharma",
  "Vincenzo Ferrari",
  "Willow Parker",
  "Ximena Castillo",
  "Yolanda King",
  "Zander Cooper",
  "Aria Blackwood",
  "Bastien Dubois",
  "Camille Laurent",
  "Dante Ricci",
  "Estelle Moreau",
  "Fabio Santos",
  "Gemma Wright",
  "Hector Vega",
  "Ingrid Hansen",
  "Javier Ruiz",
  "Kaia Storm",
  "Liam O'Connor",
  "Mila Petrov",
  "Noah Fischer",
  "Octavia Bell",
  "Phoenix Rivera",
  "Quentin Gray",
  "Ruby Anderson",
  "Sage Thompson",
  "Tobias Klein",
  "Unity Cross",
  "Vera Kozlova",
  "Wade Turner",
  "Xara Moon",
  "York Sterling",
  "Zoe Martinez",
  "Atlas Kane",
  "Brielle Fox",
  "Caspian Reed",
  "Dara Singh",
  "Eden Blake",
  "Falcon Knight",
  "Gaia Stone",
  "Harbor Wells",
  "Indigo Vale",
  "Juno Pierce",
  "Knox Rivers",
];

const containerRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const springConfig = computed(() => ({
  stiffness: props.stiffness,
  damping: props.damping,
  mass: props.mass,
}));

let lenis: Lenis | null = null;

onMounted(() => {
  if (!containerRef.value) return;

  lenis = new Lenis({
    autoRaf: true,
    wrapper: containerRef.value,
    content: contentRef.value ?? undefined,
    duration: 3,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 2,
  });
});

onBeforeUnmount(() => {
  lenis?.destroy();
  lenis = null;
});
</script>

<template>
  <div
    ref="containerRef"
    class="relative h-88 min-h-88 w-full overflow-auto overscroll-auto bg-blue-500 p-4 font-sans text-white sm:h-96 sm:min-h-96"
  >
    <div
      ref="contentRef"
      class="relative flex min-h-[200vh] items-start justify-center pt-96 uppercase"
    >
      <p class="absolute top-4 left-4 text-xl font-bold">Scroll slowly</p>

      <div
        class="flex flex-col items-center justify-center text-3xl leading-none sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl"
      >
        <ScrollSwapText
          v-for="name in names"
          :key="name"
          :container-ref="containerRef"
          :offset="['0 0.2', '0 0.8']"
          :spring-config="springConfig"
          class="leading-none font-bold"
        >
          {{ name }}
        </ScrollSwapText>
      </div>
    </div>
  </div>
</template>
