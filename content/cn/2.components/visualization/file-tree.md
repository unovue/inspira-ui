---
title: 文件树
description: 用于展示目录中文件与文件夹结构的组件。
category: 可视化
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="FileTreeDemo.vue" config="FileTreeConfig" componentId="file-tree" :componentFiles='["Tree.vue", "Folder.vue", "File.vue", "TreeIndicator.vue", "index.ts"]'}

#api

## API

### `Tree`

`Tree` 组件作为容器，用于展示层级化的文件/文件夹结构。

#### Props

| 属性名               | 类型                | 默认值                | 描述                                      |
| -------------------- | ------------------- | --------------------- | ----------------------------------------- |
| `class`              | `string`            | -                     | 树容器的额外样式类。                      |
| `initialSelectedId`  | `string`            | -                     | 初始选中项的 ID。                         |
| `indicator`          | `boolean`           | `true`                | 是否显示树状指示线。                      |
| `elements`           | `TreeViewElement[]` | -                     | 要展示的树元素数组。                      |
| `initialExpandedItems`| `string[]`         | -                     | 初始展开的文件夹 ID 数组。                |
| `openIcon`           | `string`            | `"lucide:folder-open"`| 展开文件夹时使用的图标。                  |
| `closeIcon`          | `string`            | `"lucide:folder"`     | 收起文件夹时使用的图标。                  |
| `fileIcon`           | `string`            | `"lucide:file"`       | 文件使用的图标。                          |
| `direction`          | `"rtl" \| "ltr"`    | `"ltr"`               | 树的文字方向。                            |

### `Folder` 与 `File`

`Folder` 与 `File` 组件分别表示文件夹和文件。文件夹可包含其他 `Folder` 与 `File`。

#### Props

| 属性名      | 类型      | 默认值 | 描述                           |
| ----------- | --------- | ------ | ------------------------------ |
| `class`     | `string`  | -      | 用于自定义样式的额外类。       |
| `id`        | `string`  | -      | 元素的唯一标识。               |
| `name`      | `string`  | -      | 文件夹/文件的显示名称。        |
| `isSelectable`| `boolean`| `true`| 元素是否可被选中。             |
| `isSelect`  | `boolean` | `false`| 元素当前是否被选中。           |

#credits

- 灵感来自 [Magic UI](https://magicui.design/docs/components/file-tree)。
- 感谢 [kalix127](https://github.com/kalix127) 对该组件的移植。

::
