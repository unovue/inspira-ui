---
title: 粒子图像
description: 将粒子动画应用到图像上的炫酷效果，类似 NuxtLabs.com 上的展示。
category: Special Effects
tags: [css, tailwind, canvas, particles]
---

::ComponentViewer{demoFile="ParticleImageDemo.vue" config="ParticleImageConfig" componentId="particle-image" :componentFiles='["ParticleImage.vue", "inspiraImageParticles.js", "inspiraImageParticles.d.ts"]'}

#api

## API

| 属性名             | 类型                                                                          | 默认值  | 描述                                               |
| ------------------ | ----------------------------------------------------------------------------- | ------- | -------------------------------------------------- |
| `imageSrc`         | `string`                                                                      | `null`  | 应用粒子效果的图像源 URL。                         |
| `class`            | `string`                                                                      | `null`  | 应用于图像元素的额外 CSS 类。                     |
| `canvasWidth`      | `string`                                                                      | `null`  | 粒子效果画布的宽度。                               |
| `canvasHeight`     | `string`                                                                      | `null`  | 粒子效果画布的高度。                               |
| `gravity`          | `string`                                                                      | `null`  | 影响粒子运动的重力。                               |
| `particleSize`     | `string`                                                                      | `null`  | 粒子的大小。                                       |
| `particleGap`      | `string`                                                                      | `null`  | 粒子之间的间距。                                   |
| `mouseForce`       | `string`                                                                      | `null`  | 鼠标移动对粒子施加的力。                           |
| `renderer`         | `"default" \| "webgl"`                                                        | `null`  | 粒子生成所用的渲染器，可选默认或 WebGL。           |
| `color`            | `string`                                                                      | `#FFF`  | 粒子的十六进制颜色，支持 3 位或 6 位代码。         |
| `colorArr`         | `number[]`                                                                    | `null`  | 用于定义多色粒子的数字数组。                       |
| `initPosition`     | `"random" \| "top" \| "left" \| "bottom" \| "right" \| "misplaced" \| "none"` | `random`| 动画开始时粒子的初始位置。                         |
| `initDirection`    | `"random" \| "top" \| "left" \| "bottom" \| "right" \| "none"`                | `random`| 动画开始时粒子的初始方向。                         |
| `fadePosition`     | `"explode" \| "top" \| "left" \| "bottom" \| "right" \| "random" \| "none"`   | `none`  | 粒子淡出的位置。                                   |
| `fadeDirection`    | `"random" \| "top" \| "left" \| "bottom" \| "right" \| "none"`                | `none`  | 粒子淡出的方向。                                   |
| `noise`            | `number`                                                                      | `null`  | 粒子的噪声值。                                     |
| `responsiveWidth`  | `boolean`                                                                     | `false` | 画布是否自适应宽度。                               |

#credits

- 感谢 [Nuxt Labs](https://nuxtlabs.com) 提供灵感。
- 感谢 [NextParticles](https://nextparticle.nextco.de) 提供动画库基础。

::
