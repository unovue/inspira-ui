<script setup lang="ts">
import { CardBody, CardContainer, CardItem } from "~/components/inspira/ui/card-3d";

interface Props {
  title?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  description?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  image?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  btnLeft?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  btnRight?: {
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
}

const props = withDefaults(defineProps<Props>(), {
  title: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 50,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
  description: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 60,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
  image: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 100,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
  btnLeft: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 20,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
  btnRight: () => ({
    translateX: 0,
    translateY: 0,
    translateZ: 20,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }),
});
</script>

<template>
  <CardContainer>
    <CardBody
      class="group/card relative h-auto w-fit rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
    >
      <CardItem
        v-bind="props.title"
        class="text-xl font-bold text-neutral-600 dark:text-white"
      >
        Make things float in air
      </CardItem>
      <CardItem
        as="p"
        v-bind="props.description"
        class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
      >
        Hover over this card to unleash the power of CSS perspective
      </CardItem>
      <CardItem
        v-bind="props.image"
        class="mt-4 w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="1000"
          width="1000"
          class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div class="mt-12 flex items-center justify-between">
        <CardItem
          v-bind="props.btnLeft"
          as="a"
          href="https://rahulv.dev"
          target="__blank"
          class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
        >
          Visit →
        </CardItem>
        <CardItem
          v-bind="props.btnRight"
          as="button"
          class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
        >
          Get Started
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
</template>
