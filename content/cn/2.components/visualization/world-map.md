---
title: 世界地图
description: 展示带有动画弧线和脉冲点效果的可自定义世界地图。
category: Visualization
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="WorldMapDemo.vue" config="WorldMapConfig" componentId="world-map" :componentFiles='["WorldMap.vue"]' dependencies="dotted-map"}

#api

## API

| 属性名     | 类型                                                                                                                 | 默认值      | 描述                                                         |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------ |
| `dots`     | `Array<{ start: { lat: number; lng: number; label?: string }, end: { lat: number; lng: number; label?: string } }>` | `[]`        | 点对象数组，每个包含起点与终点坐标（纬度、经度）。           |
| `class`    | `string`                                                                                                             | `""`        | 用于自定义样式的额外 CSS 类。                                |
| `lineColor`| `string`                                                                                                             | `"#0EA5E9"` | 弧线与点边框的颜色。                                         |
| `mapColor` | `string`                                                                                                             | —           | 点状地图的主色。(**必填**)                                   |
| `mapBgColor`| `string`                                                                                                            | —           | 地图背景色。(**必填**)                                      |

#credits

- 移植自 [Aceternity UI 的 World Map](https://ui.aceternity.com/components/world-map)。

::
