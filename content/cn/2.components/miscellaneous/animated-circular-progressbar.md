---
title: 动画圆形进度条
description: 显示百分比的圆形仪表盘动画组件。
category: Miscellaneous
tags: [css, tailwind, input, magic-ui]
---

::ComponentViewer{demoFile="AnimatedCircularProgressBarDemo.vue" config="AnimatedCircularProgressBarConfig" componentId="animated-circular-progressbar" :componentFiles='["AnimatedCircularProgressBar.vue"]'}

#api

## API

| 属性名               | 类型      | 默认值              | 描述                           |
| -------------------- | --------- | ------------------- | ------------------------------ |
| `class`              | `string`  | `-`                 | 应用于组件的类名。             |
| `max`                | `number`  | `100`               | 仪表的最大值。                 |
| `min`                | `number`  | `0`                 | 仪表的最小值。                 |
| `value`              | `number`  | `0`                 | 仪表当前值。                   |
| `gaugePrimaryColor`  | `string`  | `rgb(79 70 229)`    | 仪表主色。                     |
| `gaugeSecondaryColor`| `string`  | `rgba(0, 0, 0, 0.1)`| 仪表副色。                     |
| `circleStrokeWidth`  | `number`  | `10`                | 圆形进度条宽度。               |
| `showPercentage`     | `boolean` | `true`              | 是否在圆内显示数值。           |
| `duration`           | `number`  | `1`                 | 动画持续时间（秒）。           |

#credits

- 感谢 [Magic UI](https://magicui.design/docs/components/animated-circular-progress-bar)。
- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 移植该组件。

::
