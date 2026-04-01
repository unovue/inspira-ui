<script setup lang="ts">
import type { AnimatedTab } from "./types";
import { cn } from "@inspira-ui/plugins";
import { motion } from "motion-v";

const props = withDefaults(
  defineProps<{
    tabs: AnimatedTab[];
    modelValue?: string;
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
  }>(),
  {
    containerClassName: "",
    activeTabClassName: "",
    tabClassName: "",
    contentClassName: "",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const isControlled = computed(() => props.modelValue !== undefined);
const uncontrolledValue = ref<string | null>(props.tabs[0]?.value ?? null);
const selectedValue = computed(() =>
  isControlled.value ? props.modelValue : uncontrolledValue.value,
);
const id = useId();
const pillLayoutId = computed(() => `animated-tabs-pill-${id}`);

const reorderTabs = (tabs: AnimatedTab[], value: string | null | undefined) => {
  const next = tabs.slice();
  if (!value) return next;

  const idx = next.findIndex((t) => t.value === value);
  if (idx <= 0) return next;

  const selected = next.splice(idx, 1)[0];
  if (!selected) return next;

  next.unshift(selected);
  return next;
};

const stackedTabs = ref<AnimatedTab[]>(reorderTabs(props.tabs, selectedValue.value));
const active = ref<AnimatedTab | null>(stackedTabs.value[0] ?? null);
const pointerHovering = ref(false);
const programmaticHovering = ref(false);
const hovering = computed(() => pointerHovering.value || programmaticHovering.value);

let programmaticHoverTimer: ReturnType<typeof setTimeout> | null = null;
const triggerProgrammaticHover = () => {
  if (pointerHovering.value) return;

  programmaticHovering.value = true;
  if (programmaticHoverTimer) clearTimeout(programmaticHoverTimer);
  programmaticHoverTimer = setTimeout(() => {
    programmaticHoverTimer = null;
    // If the user moved the mouse onto the component while the timer was running,
    // keep the hover state driven by the pointer.
    if (!pointerHovering.value) programmaticHovering.value = false;
  }, 320);
};

onScopeDispose(() => {
  if (programmaticHoverTimer) clearTimeout(programmaticHoverTimer);
});

watch(
  [() => props.tabs, () => selectedValue.value],
  ([nextTabs, value]) => {
    const nextStack = reorderTabs(nextTabs, value);
    stackedTabs.value = nextStack;
    active.value = nextStack[0] ?? null;

    if (!isControlled.value) {
      // If the selected value disappears (tabs list replaced), keep internal state valid.
      if (!value || !nextTabs.some((t) => t.value === value)) {
        uncontrolledValue.value = nextStack[0]?.value ?? null;
      }
    }
  },
  { deep: false, immediate: true },
);

// When controlled externally, a modelValue change can happen without the pointer hovering
// over the tabs. Briefly simulate hover to match the "click while hovering" visuals.
watch(
  () => props.modelValue,
  (value, oldValue) => {
    if (!isControlled.value) return;
    if (value === undefined) return;
    if (oldValue === undefined) return; // skip initial mount
    if (value === oldValue) return;

    triggerProgrammaticHover();
  },
);

const selectTab = (idx: number) => {
  const selected = props.tabs[idx];
  if (!selected) return;

  if (isControlled.value) {
    emit("update:modelValue", selected.value);
    return;
  }

  uncontrolledValue.value = selected.value;
};
</script>

<template>
  <div
    class="flex h-full w-full flex-col"
    @mouseenter="pointerHovering = true"
    @mouseleave="pointerHovering = false"
  >
    <div
      :class="
        cn(
          'relative flex w-full max-w-full shrink-0 flex-row items-center justify-start overflow-auto [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [perspective:1000px] [scrollbar-width:none] sm:overflow-visible [&::-webkit-scrollbar]:hidden',
          containerClassName,
        )
      "
    >
      <button
        v-for="(tab, idx) in tabs"
        :key="tab.title"
        type="button"
        :class="cn('relative rounded-full px-4 py-2', tabClassName)"
        :style="{ transformStyle: 'preserve-3d' }"
        @click="selectTab(idx)"
      >
        <motion.div
          v-if="active?.value === tab.value"
          :layout-id="pillLayoutId"
          :transition="{ type: 'spring', bounce: 0.3, duration: 0.6 }"
          :class="
            cn(
              'pointer-events-none absolute inset-0 rounded-full bg-gray-200 dark:bg-zinc-800',
              activeTabClassName,
            )
          "
        />

        <span class="relative block text-black dark:text-white">
          {{ tab.title }}
        </span>
      </button>
    </div>

    <div class="relative mt-24 min-h-0 flex-1">
      <AnimatedTabsFadeInDiv
        :id="id"
        :key="active?.value ?? 'empty'"
        :tabs="stackedTabs"
        :active="active"
        :hovering="hovering"
        :class-name="contentClassName"
      >
        <template #content="{ tab, active: slotActive, hovering: slotHovering }">
          <slot
            name="content"
            :tab="tab"
            :active="slotActive"
            :hovering="slotHovering"
          >
            <component
              :is="tab.content"
              v-if="tab.content"
              v-bind="tab.contentProps || {}"
              :tab="tab"
              :active="slotActive"
              :hovering="slotHovering"
            />
          </slot>
        </template>
      </AnimatedTabsFadeInDiv>
    </div>
  </div>
</template>
