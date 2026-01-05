---
title: 发光效果
description: 基于距离的动态发光效果，对鼠标移动与滚动作出响应，适合突出可交互元素。
category: Special Effects
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="GlowingEffectDemo.vue" config="GlowingEffectConfig" componentId="glowing-effect" :componentFiles='["GlowingEffect.vue"]'}

#api

## API

| 属性名            | 类型                   | 默认值     | 描述                                                                 |
| ----------------- | ---------------------- | ---------- | -------------------------------------------------------------------- |
| `blur`            | `number`               | `0`        | 应用于发光层的模糊半径。                                             |
| `inactiveZone`    | `number`               | `0.7`      | 定义发光静止的内半径，占元素短边的比例。                             |
| `proximity`       | `number`               | `0`        | 额外的距离（像素），当光标接近元素时触发发光。                       |
| `spread`          | `number`               | `20`       | 发光效果围绕元素扩散的大小。                                        |
| `variant`         | `"default" \| "white"` | `"default"`| 发光样式的变体（如白色主题版本）。                                  |
| `glow`            | `boolean`              | `false`    | 控制静态发光边框的显示。                                             |
| `class`           | `string`               | `""`       | 用于自定义样式的额外 CSS 类。                                       |
| `disabled`        | `boolean`              | `true`     | 设为 `true` 时，禁用距离检测与发光动画。                             |
| `movementDuration`| `number`               | `2`        | 平滑旋转动画的持续时间（秒）。                                       |
| `borderWidth`     | `number`               | `1`        | 应用于发光效果的边框宽度（像素）。                                   |

#credits

- 移植自 [Aceternity UI Glowing Effect](https://ui.aceternity.com/components/glowing-effect)

::
