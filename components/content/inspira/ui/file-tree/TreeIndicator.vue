<template>
  <div
    :dir="direction"
    class="absolute left-1.5 h-full w-px rounded-md bg-muted py-3 duration-300 ease-in-out hover:bg-slate-300 rtl:right-1.5"
  />
</template>

<script lang="ts" setup>
import { type TreeContextProps, TREE_CONTEXT_SYMBOL } from "./index";
import { inject } from "vue";

const treeContext = inject<TreeContextProps>(TREE_CONTEXT_SYMBOL);
if (!treeContext) {
  throw new Error("[TreeIndicator] must be used inside <Tree>");
}

const { direction } = treeContext;
</script>
