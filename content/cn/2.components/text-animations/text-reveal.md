---
title: 文字揭示
description: 使用 GSAP 的 SplitText 实现逐行的文字入场动画。
category: 文字动画
tags: [css, tailwind, gsap]
---

::ComponentViewer{demoFile="TextRevealDemo.vue" config="TextRevealConfig" componentId="text-reveal" :componentFiles='["TextReveal.vue"]' dependencies="gsap"}

#api

## API

| 属性名            | 类型     | 默认值 | 描述                                 |
| ----------------- | -------- | ------ | ------------------------------------ |
| `class`           | `string` | `-`    | 内层文字容器的额外类。               |
| `containerClass`  | `string` | `-`    | 外层容器的额外类。                   |
| `duration`        | `number` | `0.6`  | 逐行揭示的动画时长。                 |
| `delay`           | `number` | `0.2`  | 动画开始前的延迟。                   |
| `stagger`         | `number` | `0.1`  | 每行揭示之间的动画间隔。             |

#credits

- 基于 [GSAP](https://gsap.com/) 与 [GSAP SplitText](https://gsap.com/docs/v3/Plugins/SplitText/)。

::
