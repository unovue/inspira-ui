<template>
  <ToastRoot
    v-bind="forwarded"
    :class="cn(toastVariants({ variant }), props.class)"
    @update:open="onOpenChange"
  >
    <slot />
  </ToastRoot>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ToastRoot, type ToastRootEmits, useForwardPropsEmits } from "reka-ui";
import { computed } from "vue";
import { type ToastProps, toastVariants } from ".";

const props = defineProps<ToastProps>();

const emits = defineEmits<ToastRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
