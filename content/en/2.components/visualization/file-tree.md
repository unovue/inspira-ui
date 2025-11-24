---
title: File Tree
description: A component used to showcase the folder and file structure of a directory.
category: Visualization
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="FileTreeDemo.vue" config="FileTreeConfig" componentId="file-tree" :componentFiles='["Tree.vue", "Folder.vue", "File.vue", "TreeIndicator.vue", "index.ts"]'}

#api

## API

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

#credits

- Inspired by [Magic UI](https://magicui.design/docs/components/file-tree).
- Credit to [kalix127](https://github.com/kalix127) for porting this component.

::
