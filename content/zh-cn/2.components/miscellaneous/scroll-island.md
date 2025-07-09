---
title: 滚动岛
description: A dynamic and interactive component that displays scroll progress with animated visuals and an expandable area for additional content.
---

::ComponentLoader{label="预览" componentName="ScrollIslandDemo" type="examples" id="scroll-island"}
::

::alert{type="info"}
**注意:** This component requires `@number-flow/vue` as a dependency.
::

## 通过 CLI 安装

::InstallationCli{componentId="scroll-island"}
::

## 手动安装

::steps{level=4}

#### Install the dependencies

::code-group

```bash [npm]
npm install @number-flow/vue
```

```bash [pnpm]
pnpm install @number-flow/vue
```

```bash [bun]
bun add @number-flow/vue
```

```bash [yarn]
yarn add @number-flow/vue
```

::

复制并粘贴以下代码：

::CodeViewer{filename="ScrollIsland.vue" language="vue" componentName="ScrollIsland" type="ui" id="scroll-island"}  
::
::

## API

| Prop 名称 | 类型     | 默认值       | 描述                                            |
| --------- | -------- | ------------ | ----------------------------------------------- |
| `class`   | `string` | `""`         | Additional CSS classes for custom styling.      |
| `title`   | `string` | `"Progress"` | Title displayed in the header of the component. |
| `height`  | `string` | `44`         | Height of the component.                        |

## 功能特性

- **Scroll Progress Tracking**: Dynamically displays the scroll progress of the page as a percentage.
- **Expandable Layout**: Transforms between a circular and a rectangular layout based on user interaction.
- **Animated Circular Progress Bar**: Displays a visually appealing progress bar with smooth transitions.
- **Dynamic Content Slot**: Supports additional content in the expandable section.
- **Dark Mode Support**: Adapts to the dark or light mode of the user's system preferences.

## 感谢

- Inspired by the work of [Ali Samadi](https://x.com/alisamadi__/status/1854312982559502556) & [Nitish Khagwal](https://x.com/nitishkmrk)
- [NumberFlow by Maxwell Barvian](https://number-flow.barvian.me/vue) for number formatting and animations.
