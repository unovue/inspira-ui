---
title: 流线光标
description: 具有平滑波动尾迹的响应式动画光标，使用弹簧物理和动态色彩波动。
category: 光标
tags: [css, tailwind, cursor, webgl, cursify]
badge: New
---

::ComponentViewer{demoFile="SleekLineCursorDemo.vue" config="SleekLineCursorConfig" componentId="sleek-line-cursor" :componentFiles='["SleekLineCursor.vue"]'}

## API

| 属性名       | 类型                 | 默认值     | 描述                                                         |
| ------------ | -------------------- | ---------- | ------------------------------------------------------------ |
| `class`      | `string \| string[]` | `undefined`| 画布容器元素的额外 CSS 类。                                  |
| `trails`     | `number`             | `20`       | 渲染在光标后的尾迹数量。                                     |
| `size`       | `number`             | `50`       | 每条尾迹中由弹簧连接的节点数量。                             |
| `friction`   | `number`             | `0.5`      | 施加到速度的全局摩擦。                                       |
| `dampening`  | `number`             | `0.25`     | 在连接节点间施加的速度阻尼。                                 |
| `tension`    | `number`             | `0.98`     | 减小尾部的弹簧强度，带来流畅的渐收运动。                     |

> 💡 该组件默认使用 `pointer-events-none`，并固定为全屏。可通过 `class` 属性扩展或覆写样式。

#credits

- 移植自 [Canvas Cursor by Cursify](https://cursify.vercel.app/components/canvas-cursor)。

::
