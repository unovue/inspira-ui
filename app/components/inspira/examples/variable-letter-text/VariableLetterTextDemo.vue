<script lang="ts" setup>
import type { Transition } from "motion-v";

interface Props {
  duration?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center";
}

const props = withDefaults(defineProps<Props>(), {
  duration: 0.7,
  staggerDuration: 0.03,
  staggerFrom: "first",
});

const transition = computed<Transition>(() => ({
  type: "spring",
  duration: props.duration,
}));

const roles = [
  {
    label: "DESIGN ENGINEER (US)",
  },
  {
    label: "PRODUCT DESIGNER (US/UK)",
    staggerDuration: 0,
  },
  {
    label: "ENGINEERING MANAGER (US)",
    staggerFrom: "last" as const,
    staggerDuration: 0.03,
  },
  {
    label: "SALES ENGINEER (US)",
    staggerFrom: "center" as const,
    staggerDuration: 0.03,
  },
];
</script>

<template>
  <div
    class="bg-background text-foreground flex h-full w-full flex-col items-center justify-center"
  >
    <div class="w-full p-6 sm:p-8 md:p-12 lg:p-16">
      <div class="w-3/4">
        <h2 class="text-muted-foreground text-sm font-medium tracking-[0.18em] sm:text-base">
          OPEN ROLES <span aria-hidden="true">*</span>
        </h2>

        <ul class="mt-6 flex cursor-pointer flex-col gap-1 md:mt-12">
          <li
            v-for="role in roles"
            :key="role.label"
          >
            <VariableLetterText
              :label="role.label"
              :stagger-duration="role.staggerDuration ?? props.staggerDuration"
              :stagger-from="role.staggerFrom ?? props.staggerFrom"
              :transition="transition"
              from-font-variation-settings="'wght' 400"
              to-font-variation-settings="'wght' 900"
              class="font-variable text-2xl leading-none sm:text-3xl md:text-4xl"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
