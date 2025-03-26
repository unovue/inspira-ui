<!-- ParentSize.vue -->
<template>
  <div
    ref="target"
    :style="mergedStyles"
    :class="cn('w-full h-full', props.class)"
    v-bind="attrsWithoutClassAndStyle"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, useAttrs } from "vue";
import { useDebounceFn, useResizeObserver } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps({
  class: String,
  debounceTime: {
    type: Number,
    default: 300,
  },
  ignoreDimensions: {
    type: [Array, String],
    default: () => [],
  },
  parentSizeStyles: Object,
  enableDebounceLeadingCall: {
    type: Boolean,
    default: true,
  },
});

const attrs = useAttrs();
const target = ref<HTMLElement | null>(null);
const state = reactive({
  width: 0,
  height: 0,
  top: 0,
  left: 0,
});

const mergedStyles = computed(() => ({
  ...props.parentSizeStyles,
  ...(attrs.style as object),
}));

const mergedClass = computed(() => ["w-full h-full", props.class]);

const attrsWithoutClassAndStyle = computed(() => {
  const { class: _, style: __, ...rest } = attrs;
  return rest;
});

const normalizedIgnore = computed(() =>
  Array.isArray(props.ignoreDimensions) ? props.ignoreDimensions : [props.ignoreDimensions],
);

function updateDimensions(rect: DOMRectReadOnly) {
  const { width, height, top, left } = rect;
  const newState = { width, height, top, left };

  const hasChange = Object.keys(newState).some(
    (key) => state[key as keyof typeof state] !== newState[key as keyof typeof state],
  );

  if (!hasChange) return;

  const shouldUpdate = !Object.keys(newState).every((key) =>
    normalizedIgnore.value.includes(key as keyof typeof state),
  );

  if (shouldUpdate) {
    Object.assign(state, newState);
  }
}

const debouncedUpdate = useDebounceFn(updateDimensions, props.debounceTime);

useResizeObserver(target, (entries) => {
  const entry = entries[0];
  if (entry) debouncedUpdate(entry.contentRect);
});
</script>
