---
title: 漩涡背景
description: 波动、旋转的漩涡背景，适用于 CTA 与背景展示。
category: Background
tags: [css, tailwind, background, aceternity-ui, motion-v, simplex-noise]
---

::ComponentViewer{demoFile="VortexDemo.vue" config="VortexConfig" componentId="vortex" :componentFiles='["Vortex.vue"]' dependencies="simplex-noise"}

#api

## API

| 属性名            | 类型     | 默认值     | 描述                                   |
| ----------------- | -------- | ---------- | -------------------------------------- |
| `class`           | `string` |            | 用于子元素包装器的可选类名。           |
| `containerClass`  | `string` |            | 容器的可选类名。                       |
| `particleCount`   | `number` | `700`      | 生成的粒子数量。                       |
| `rangeY`          | `number` | `100`      | 粒子垂直运动范围。                     |
| `baseHue`         | `number` | `220`      | 粒子颜色的基础色相。                   |
| `baseSpeed`       | `number` | `0.0`      | 粒子运动的基础速度。                   |
| `rangeSpeed`      | `number` | `1.5`      | 粒子速度变化范围。                     |
| `baseRadius`      | `number` | `1`        | 粒子的基础半径。                       |
| `rangeRadius`     | `number` | `2`        | 粒子半径变化范围。                     |
| `backgroundColor` | `string` | `"#000000"`| 画布背景色。                           |

#credits

- 感谢 [Aceternity UI](https://ui.aceternity.com/components/vortex)。
- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 移植该组件。

::
