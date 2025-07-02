---
title: File Tree
description: A component used to showcase the folder and file structure of a directory.
---

::ComponentLoader{label="Preview" componentName="FileTreeDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="file-tree"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="Tree.vue" language="vue" componentName="Tree" type="ui" id="file-tree"}
:CodeViewerTab{label="Folder.vue" language="vue" componentName="Folder" type="ui" id="file-tree"}
:CodeViewerTab{label="File.vue" language="vue" componentName="File" type="ui" id="file-tree"}
:CodeViewerTab{label="TreeIndicator.vue" language="vue" componentName="TreeIndicator" type="ui" id="file-tree"}

```ts [index.ts]
import type { HTMLAttributes } from "vue";

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

export interface TreeViewElement {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
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
```

::

## API

::steps

### `Tree`

The `Tree` component serves as a container for displaying a hierarchical file/folder structure.

#### Props

| Prop Name              | Type                | Default                | Description                                        |
| ---------------------- | ------------------- | ---------------------- | -------------------------------------------------- |
| `class`                | `string`            | -                      | Additional classes for styling the tree container. |
| `initialSelectedId`    | `string`            | -                      | ID of the initially selected item.                 |
| `indicator`            | `boolean`           | `true`                 | Whether to show the tree indicator line.           |
| `elements`             | `TreeViewElement[]` | -                      | Array of tree elements to display.                 |
| `initialExpandedItems` | `string[]`          | -                      | Array of IDs of initially expanded folders.        |
| `openIcon`             | `string`            | `"lucide:folder-open"` | Icon to show for open folders.                     |
| `closeIcon`            | `string`            | `"lucide:folder"`      | Icon to show for closed folders.                   |
| `fileIcon`             | `string`            | `"lucide:file"`        | Icon to show for files.                            |
| `direction`            | `"rtl" \| "ltr"`    | `"ltr"`                | Text direction of the tree.                        |

#### Usage

```vue [MyComponent.vue]
<Tree initialSelectedId="1" :initial-expanded-items="['1', '2']" :elements="ELEMENTS">
  <!-- Your structure here -->
</Tree>
```

### `Folder` and `File`

The `Folder` and `File` components represent folders and files in the file tree. Folders can contain other `Folder` and `File` components.

#### Props

| Prop Name      | Type      | Default | Description                             |
| -------------- | --------- | ------- | --------------------------------------- |
| `class`        | `string`  | -       | Additional classes for custom styling.  |
| `id`           | `string`  | -       | Unique identifier for the item.         |
| `name`         | `string`  | -       | Display name of the folder/file.        |
| `isSelectable` | `boolean` | `true`  | Whether the item can be selected.       |
| `isSelect`     | `boolean` | `false` | Whether the item is currently selected. |

#### Usage

```vue [MyComponent.vue]
<Folder id="1" name="root">
  <Folder id="2" name="components">
    <File id="3" name="Button.vue" />
    <File id="4" name="Card.vue" />
  </Folder>
</Folder>
```

::

## Credits

- Inspired by [Magic UI](https://magicui.design/docs/components/file-tree).
- Credit to [kalix127](https://github.com/kalix127) for porting this component.
