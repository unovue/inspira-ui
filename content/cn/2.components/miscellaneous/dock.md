---
title: Dock
description: 类似 macOS 的 Dock，悬停时放大图标。
category: Miscellaneous
tags: [css, tailwind]
---

::ComponentViewer{demoFile="DockDemo.vue" config="DockConfig" componentId="dock" :componentFiles='["Dock.vue", "DockIcon.vue", "DockSeparator.vue", "index.ts", "types.ts", "injectionKeys.ts"]'}

#api

## API

### `Dock`

| 属性名          | 类型     | 描述                                                         |
| --------------- | -------- | ------------------------------------------------------------ |
| `class`         | `string` | Dock 容器的额外类名。                                        |
| `magnification` | `number` | 悬停时图标的放大倍数（默认 60）。                            |
| `distance`      | `number` | 放大作用的图标中心距离。                                     |
| `direction`     | `string` | 图标对齐方式（`top`、`middle`、`bottom`，默认 middle）。    |
| `orientation`   | `string` | Dock 的方向（`vertical` 或 `horizontal`，默认 horizontal）。 |

| 插槽名   | 描述                                     |
| -------- | ---------------------------------------- |
| `default`| Dock 图标或其他子组件。                  |

### `DockIcon`

| 插槽名   | 描述                                    |
| -------- | --------------------------------------- |
| `default`| 显示在 Dock 图标中的组件或图标。        |

#credits

- 设计灵感来自 macOS Dock 及其出色的悬停放大效果。

::
