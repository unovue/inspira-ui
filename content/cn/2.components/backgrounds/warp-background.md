---
title: 扭曲背景
description: 为子元素添加扭曲动画效果的容器组件。
category: 背景
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="WarpBackgroundDemo.vue" config="WarpBackgroundConfig" componentId="warp-background" :componentFiles='["WarpBackground.vue", "Beam.vue"]'}

#api

## API

| 属性名         | 类型     | 默认值                 | 描述                       |
| -------------- | -------- | ---------------------- | -------------------------- |
| `perspective`  | `number` | `100`                  | 扭曲动画的透视值。         |
| `beamsPerSide` | `number` | `3`                    | 每侧的光束数量。           |
| `beamSize`     | `number` | `5`                    | 光束大小。                 |
| `beamDelayMax` | `number` | `3`                    | 光束的最大延迟（秒）。     |
| `beamDelayMin` | `number` | `0`                    | 光束的最小延迟（秒）。     |
| `beamDuration` | `number` | `3`                    | 光束的持续时间。           |
| `gridColor`    | `string` | `"hsl(var(--border))"` | 网格线颜色。               |

#credits

- 感谢 [Whbbit1999](https://github.com/Whbbit1999) 提供该组件。
- 灵感并移植自 [Magic UI WarpBackground](https://magicui.design/docs/components/warp-background)。

::
