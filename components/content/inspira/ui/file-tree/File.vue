<template>
  <button
    ref="fileRef"
    type="button"
    :disabled="!isSelectable"
    :class="[
      cn(
        'flex w-fit items-center gap-1 rounded-sm pr-1 text-sm duration-200 ease-in-out rtl:pl-1 rtl:pr-0',
        isSelected && isSelectable ? 'bg-muted' : '',
        isSelectable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50',
        $props.class,
      ),
    ]"
    :dir="direction"
    @click="onClickHandler"
  >
    <Icon
      :name="fileIcon"
      size="16"
    />
    <span class="select-none">{{ name }}</span>
  </button>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { type TreeContextProps, type FileProps, TREE_CONTEXT_SYMBOL } from "./index";
import { inject, computed, toRefs } from "vue";

const props = withDefaults(defineProps<FileProps>(), {
  isSelectable: true,
});

const { id, name, isSelectable, isSelect } = toRefs(props);

const treeContext = inject<TreeContextProps>(TREE_CONTEXT_SYMBOL);
if (!treeContext) {
  throw new Error("[File] must be used inside <Tree>");
}

const { selectedId, selectItem, direction, fileIcon } = treeContext;

const isSelected = computed<boolean>(() => {
  return isSelect.value || selectedId.value === id.value;
});

function onClickHandler() {
  if (!isSelectable.value) return;
  selectItem(id.value);
}
</script>
