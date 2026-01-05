---
title: 宇宙传送门
description: 使用 Three.js 构建的震撼 3D 传送门，包含发光环、漂浮水晶、空间扭曲和次元流体。
category: Background
tags: [css, tailwind, background, threejs, postprocessing]
---

::ComponentViewer{demoFile="CosmicPortalDemo.vue" config="CosmicPortalConfig" componentId="cosmic-portal" :componentFiles='["CosmicPortal.vue"]' dependencies="three postprocessing" devDependencies="@types/three"}

#api

## API

| 属性名             | 类型     | 默认值   | 描述                                           |
| ------------------ | -------- | -------- | ---------------------------------------------- |
| `portalComplexity` | `number` | `4`      | 控制传送门特效与几何的复杂度。                 |
| `crystalCount`     | `number` | `12`     | 场景中漂浮水晶的数量。                         |
| `primaryColor`     | `string` | `#9b59b6`| 传送门与背景辉光的主色。                       |
| `secondaryColor`   | `string` | `#3498db`| 混合与辉光的辅色。                             |
| `accentColor`      | `string` | `#e74c3c`| 用于能量与高光的强调色。                       |
| `vortexColor`      | `string` | `#2ecc71`| 用于旋转漩涡与维度流的颜色。                   |
| `rotationSpeed`    | `number` | `0.3`    | 物体旋转速度。                                 |
| `bloomStrength`    | `number` | `1.2`    | 泛光后期处理强度。                             |
| `bloomRadius`      | `number` | `0.7`    | 泛光半径。                                     |
| `bloomThreshold`   | `number` | `0.2`    | 泛光可见性的阈值。                             |
| `dimensionShift`   | `number` | `4`      | 着色器动画的次元扭曲程度。                     |

#credits

- 灵感并移植自 [Techartist 的 Dimensional Portal](https://x.com/techartist_)。

::
