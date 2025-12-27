<script lang="ts" setup>
import type { TreeContextProps } from "./index";
import { inject } from "vue";
import { TREE_CONTEXT_SYMBOL } from "./index";

const treeContext = inject<TreeContextProps>(TREE_CONTEXT_SYMBOL);
if (!treeContext) {
  throw new Error("[TreeIndicator] must be used inside <Tree>");
}

const { direction } = treeContext;
</script>

<template>
  <div
    :dir="direction"
    class="bg-muted absolute left-1.5 h-full w-px rounded-md py-3 duration-300 ease-in-out hover:bg-slate-300 rtl:right-1.5"
  />
</template>
