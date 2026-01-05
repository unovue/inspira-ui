---
title: 闪光
description: 可配置的闪光组件，可作为背景或独立使用。
category: Background
tags: [css, tailwind, background, canvas]
---

::ComponentViewer{demoFile="SparklesDemo.vue" config="SparklesConfig" componentId="sparkles" :componentFiles='["Sparkles.vue"]'}

#api

## API

| 属性名            | 类型     | 默认值      | 描述                                                            |
| ----------------- | -------- | ----------- | --------------------------------------------------------------- |
| `background`      | `string` | `'#0d47a1'` | 容器背景色。使用 `transparent` 可透视父元素。                   |
| `particleColor`   | `string` | `'#ffffff'` | 粒子颜色，接受任何合法 CSS 颜色值。                             |
| `minSize`         | `number` | `1`         | 粒子最小尺寸（像素）。                                          |
| `maxSize`         | `number` | `3`         | 粒子最大尺寸（像素）。                                          |
| `speed`           | `number` | `4`         | 移动速度倍数，值越大移动越快。                                  |
| `particleDensity` | `number` | `120`       | 渲染的粒子数量，值越大粒子越密集。                              |

#credits

- 感谢 [M Atif](https://github.com/atif0075) 移植该组件。
- 移植自 [Aceternity UI 的 Sparkles](https://ui.aceternity.com/components/sparkles)。

::
