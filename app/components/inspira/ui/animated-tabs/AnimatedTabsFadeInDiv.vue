<script setup lang="ts">
import type { AnimatedTab } from "./types";
import { cn } from "@inspira-ui/plugins";
import { motion } from "motion-v";

const props = defineProps<{
  id: string;
  className?: string;
  tabs: AnimatedTab[];
  active: AnimatedTab | null;
  hovering?: boolean;
}>();

const isActive = (tab: AnimatedTab) => tab.value === props.tabs[0]?.value;
</script>

<template>
  <div class="relative h-full w-full">
    <motion.div
      v-for="(tab, idx) in tabs"
      :key="tab.value"
      :layout-id="`animated-tabs-panel-${props.id}-${tab.value}`"
      :style="{
        scale: 1 - idx * 0.1,
        top: hovering ? `${idx * -50}px` : '0px',
        willChange: 'transform, top',
        zIndex: -idx,
        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
      }"
      :animate="{ y: isActive(tab) ? [0, 40, 0] : 0 }"
      :class="cn('absolute top-0 left-0 h-full w-full will-change-transform', className)"
    >
      <slot
        name="content"
        :tab="tab"
        :active="active"
        :hovering="hovering"
      >
        <component
          :is="tab.content"
          v-if="tab.content"
        />
      </slot>
    </motion.div>
  </div>
</template>
