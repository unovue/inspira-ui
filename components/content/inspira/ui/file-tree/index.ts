import type { HTMLAttributes } from "vue";

export interface TreeViewElement {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
}

export interface TreeProps {
  class?: HTMLAttributes["class"];
  initialSelectedId: string;
  indicator?: boolean;
  elements: TreeViewElement[];
  initialExpandedItems: string[];
  openIcon?: string;
  closeIcon?: string;
  fileIcon?: string;
  direction?: "rtl" | "ltr";
}

export interface TreeContextProps {
  selectedId: Ref<string | undefined>;
  expandedItems: Ref<string[] | undefined>;
  indicator: boolean;
  openIcon: string;
  closeIcon: string;
  fileIcon: string;
  direction: "rtl" | "ltr";
  handleExpand: (id: string) => void;
  selectItem: (id: string) => void;
  setExpandedItems: (items: string[] | undefined) => void;
}

export interface BaseItemProps {
  class?: HTMLAttributes["class"];
  id: string;
  name: string;
  isSelectable?: boolean;
  isSelect?: boolean;
}

export interface FolderProps extends BaseItemProps {}

export interface FileProps extends BaseItemProps {}

export const TREE_CONTEXT_SYMBOL = Symbol("TREE_CONTEXT_SYMBOL");

export { default as Tree } from "./Tree.vue";
export { default as Folder } from "./Folder.vue";
export { default as File } from "./File.vue";
export { default as TreeIndicator } from "./TreeIndicator.vue";
