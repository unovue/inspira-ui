---
title: 光速动效
description: 使用 Three.js 构建的高度可定制 3D 高速公路视觉效果，包含道路、车辆、灯光与失真等动画，可模拟沉浸式运动感。
category: Visualization
tags: [css, tailwind, threejs, codrops]
---

::ComponentViewer{demoFile="LightSpeedDemo.vue" config="LightSpeedConfig" componentId="light-speed" :componentFiles='["LightSpeed.vue", "LightSpeedApp.ts", "presets.ts", "shaders.ts"]' dependencies="three postprocessing"}

#api

## API

| 属性名          | 类型                         | 默认值                 | 描述                                               |
| --------------- | ---------------------------- | ---------------------- | -------------------------------------------------- |
| `effectOptions` | `Partial<LightSpeedOptions>` | 见 `defaultOptions`    | 配置对象，用于自定义道路、灯光、失真、速度与颜色。 |

#credits

- 从 [Codrops 文章](https://tympanus.net/codrops/2019/11/13/high-speed-light-trails-in-three-js/) 移植至 Vue。

::
