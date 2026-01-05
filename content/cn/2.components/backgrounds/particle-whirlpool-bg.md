---
title: 粒子漩涡
description: 带有旋转粒子的动画背景。
category: Background
tags: [css, tailwind, background, threejs, postprocessing]
---

::ComponentViewer{demoFile="ParticleWhirlpoolBgDemo.vue" config="ParticleWhirlpoolBgConfig" componentId="bg-particle-whirlpool" :componentFiles='["ParticleWhirlpoolBg.vue"]' dependencies="three postprocessing" devDependencies="@types/three"}

#api

## API

| 属性名          | 类型     | 默认值 | 描述                                   |
| --------------- | -------- | ------ | -------------------------------------- |
| `class`         | `string` | `""`   | 用于自定义样式的额外 CSS 类。          |
| `blur`          | `number` | `0`    | 应用于背景的模糊量（像素）。           |
| `particleCount` | `number` | `2000` | 漩涡动画中的粒子数量。                 |

#credits

- 使用 [Three.js](https://threejs.org/) 库实现 3D 渲染与动画。
- 灵感来自 [TroisJs](https://troisjs.github.io/examples/demos/3.html)。

::
