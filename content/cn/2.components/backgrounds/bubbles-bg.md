---
title: 气泡背景
description: 具有漂浮气泡的动画背景。
category: 背景
tags: [css, tailwind, background, threejs]
---

::ComponentViewer{demoFile="BubblesBgDemo.vue" config="BubblesBgConfig" componentId="bg-bubbles" :componentFiles='["BubblesBg.vue"]' dependencies="three" devDependencies="@types/three"}

#api

## API

| 属性名 | 类型     | 默认值 | 描述                           |
| ------ | -------- | ------ | ------------------------------ |
| `blur` | `number` | `0`    | 应用于背景的模糊量（像素）。   |

#credits

- 使用 [Three.js](https://threejs.org/) 库实现 3D 渲染与动画。
- 灵感来自 [Tresjs Experiment](https://lab.tresjs.org/experiments/overlay)。

::
