---
title: 星星背景
description: 一个使用分层运动和随机星星位置实现视差动画效果的星空背景。
navBadges:
  - value: 新
    type: lime
---

::ComponentLoader{label="预览" componentName="StarsBackgroundDemo" type="examples" id="bg-stars"}
::

## API 接口

| 属性名       | 类型            | 默认值                           | 描述                                               |
| ------------ | --------------- | -------------------------------- | -------------------------------------------------- |
| `factor`     | `number`        | `0.05`                           | 鼠标视差移动的倍数。                               |
| `speed`      | `number`        | `50`                             | 星层垂直循环动画的基础速度（单位：秒）。           |
| `transition` | `SpringOptions` | `{ stiffness: 50, damping: 20 }` | 鼠标移动响应的弹性物理动画配置，确保运动流畅自然。 |
| `starColor`  | `string`        | `"#fff"`                         | 星星的颜色。支持任何合法的 CSS 颜色值。            |
| `class`      | `string`        | `—`                              | 可选，容器 div 的附加类。可用于设置 z-index 等。   |

> 💡 此组件包装了一个插槽（slot），你可以在背景上放置其他 UI 元素。

## 使用 CLI 安装

::InstallationCli{componentId="bg-stars"}
::

## 手动安装

::CodeViewer{filename="StarsBackground.vue" language="vue" componentName="StarsBackground" type="ui" id="bg-stars"}
::

## 特性

- **动画星空背景**：渲染三个独立滚动的星层，具有不同的大小和密度。
- **视差效果**：响应鼠标移动，使用弹性物理动画增加层次感与真实感。
- **可自定义星星密度**：每一层使用不同数量的星星，呈现自然变化。
- **支持插槽**：作为视觉容器使用，允许在上层叠加前景 UI 或其他内容。
- **响应式设计**

## 致谢

- 移植自 [Animate UI](https://animate-ui.com/docs/backgrounds/stars)
