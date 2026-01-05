---
title: 黑洞背景
description: 令人沉浸的画布背景效果，模拟扭曲的“黑洞”隧道，包含动画圆盘、放射线与粒子。
category: Background
tags: [css, tailwind, background, motion-v, canvas]
---

::ComponentViewer{demoFile="BlackHoleBackgroundDemo.vue" config="BlackHoleBackgroundConfig" componentId="bg-black-hole" :componentFiles='["BlackHoleBackground.vue"]'}

#api

## API

| 属性名           | 类型                       | 默认值         | 描述                                         |
| ---------------- | -------------------------- | -------------- | -------------------------------------------- |
| `strokeColor`    | `string`                   | `"#737373"`    | 同心圆与放射线的描边颜色。                   |
| `numberOfLines`  | `number`                   | `50`           | 从中心发出的放射线数量。                     |
| `numberOfDiscs`  | `number`                   | `50`           | 组成隧道的同心椭圆数量。                     |
| `particleRGBColor`| `[number, number, number]`| `[255,255,255]`| 流向黑洞的微粒 RGB 颜色。                    |
| `class`          | `string`                   | `""`           | 合并到根容器的额外工具类。                   |

#credits

- 自定义生成艺术逻辑，灵感来自隧道/折跃动画。
- 使用 **Motion-V** 实现渐变漂移，并结合 Vue 3 组合式 API 控制生命周期。
- 考虑无障碍：画布通过 `aria-hidden` 仅作装饰。

::
