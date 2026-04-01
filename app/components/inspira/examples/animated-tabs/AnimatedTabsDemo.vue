<script lang="ts" setup>
import type { AnimatedTab } from "../../ui/animated-tabs";
import { cn } from "@inspira-ui/plugins";

const tabs: AnimatedTab[] = [
  {
    title: "Product",
    value: "product",
    panelClassName: "bg-gradient-to-br from-purple-700 to-violet-900",
  },
  {
    title: "Services",
    value: "services",
    panelClassName: "bg-gradient-to-br from-sky-700 to-indigo-900",
  },
  {
    title: "Playground",
    value: "playground",
    panelClassName: "bg-gradient-to-br from-emerald-700 to-teal-900",
  },
  {
    title: "Content",
    value: "content",
    panelClassName: "bg-gradient-to-br from-rose-700 to-fuchsia-900",
  },
  {
    title: "Random",
    value: "random",
    panelClassName: "bg-gradient-to-br from-amber-600 to-orange-900",
  },
];

const modelValue = ref(tabs[0]?.value ?? "");
</script>

<template>
  <div
    class="relative mx-auto flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]"
  >
    <AnimatedTabs
      v-model="modelValue"
      :tabs="tabs"
    >
      <template #content="{ tab, active: slotActive }">
        <div
          :class="
            cn(
              'relative h-full w-full overflow-hidden rounded-2xl p-10 text-xl font-bold text-white md:text-4xl',
              tab.panelClassName,
            )
          "
        >
          <p>{{ tab.title }} tab</p>
          <div class="mt-6 max-w-xl text-base font-medium text-white/90 md:text-lg">
            <p class="font-semibold">This area is fully slot-based.</p>
            <p class="mt-2">Render anything here: lists, forms, tables, custom components…</p>
            <ul class="mt-4 list-disc space-y-2 pl-6">
              <li>Active value: {{ slotActive?.value ?? "" }}</li>
              <li>Animations powered by motion-v</li>
              <li>Stacked cards + hover depth effect</li>
            </ul>
          </div>
        </div>
      </template>
    </AnimatedTabs>
  </div>
</template>
