---
title: 波浪背景
description: 流动的波浪背景效果。
category: 背景
tags: [css, tailwind, background, simplex-noise, aceternity-ui]
---

::ComponentViewer{demoFile="WavyBackgroundDemo.vue" config="WavyBackgroundConfig" componentId="wavy-background" :componentFiles='["WavyBackground.vue"]' dependencies="simplex-noise"}

#api

## API

| 属性名           | 类型               | 默认值                                                   | 描述                                     |
| ---------------- | ------------------ | ------------------------------------------------------- | ---------------------------------------- |
| `class`          | `string`           | `-`                                                     | 显示在波浪背景之上的内容。               |
| `containerClass` | `string`           | `-`                                                     | 应用于内容容器的 CSS 类。                |
| `colors`         | `string[]`         | `["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]`| 波浪的颜色。                             |
| `waveWidth`      | `number`           | `50`                                                    | 波浪的宽度。                             |
| `backgroundFill` | `string`           | `"black"`                                               | 背景颜色。                               |
| `blur`           | `number`           | `10`                                                    | 应用于波浪的模糊效果。                   |
| `speed`          | `"slow" \| "fast"` | `"fast"`                                                | 粒子速度范围。                           |
| `waveOpacity`    | `number`           | `0.5`                                                   | 波浪的不透明度。                         |
| `[key: string]`  | `any`              | `-`                                                     | 粒子半径变化范围。                       |

#credits

- 感谢 [Aceternity UI](https://ui.aceternity.com/components/wavy-background)。
- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 移植该组件。

::
