<script setup lang="ts">
import { computed, inject } from "vue";
import { ANIMATED_MODAL_KEY } from "./AnimatedModalContext";

interface Props {
  as?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  disabled: false,
});

const modal = inject(ANIMATED_MODAL_KEY, null);
if (!modal) {
  throw new Error("AnimatedModalTrigger must be used within <AnimatedModal>");
}

const isButton = computed(() => props.as === "button");

const onClick = (event: MouseEvent) => {
  if (props.disabled) return;
  event.preventDefault();
  modal.openModal();
};
</script>

<template>
  <component
    :is="props.as"
    :type="isButton ? 'button' : undefined"
    :disabled="isButton ? props.disabled : undefined"
    :aria-disabled="props.disabled ? 'true' : 'false'"
    aria-haspopup="dialog"
    :aria-expanded="modal.open.value ? 'true' : 'false'"
    class="relative inline-flex items-center justify-center overflow-hidden rounded-md px-4 py-2 text-center"
    :class="[props.disabled && 'cursor-not-allowed opacity-60']"
    @click="onClick"
  >
    <slot />
  </component>
</template>
