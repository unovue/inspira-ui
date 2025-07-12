<template>
  <SelectScrollUpButton
    data-slot="select-scroll-up-button"
    v-bind="forwardedProps"
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)"
  >
    <slot>
      <Icon
        name="lucide:chevron-up"
        class="size-4 opacity-50"
      />
    </slot>
  </SelectScrollUpButton>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { SelectScrollUpButton, type SelectScrollUpButtonProps, useForwardProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<SelectScrollUpButtonProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
