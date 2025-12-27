---
title: 粒子背景
description: 粒子能为页面增加动态与沉浸感，营造深度、运动和交互的视觉效果。
category: 背景
tags: [css, tailwind, background, magic-ui, canvas]
---

::ComponentViewer{demoFile="ParticlesBgDemo.vue" config="ParticlesBgConfig" componentId="particles-bg" :componentFiles='["ParticlesBg.vue"]'}

#api

## API

| 属性名    | 类型     | 默认值 | 描述                                                                 |
| --------- | -------- | ------ | -------------------------------------------------------------------- |
| `color`   | `string` | `#FFF` | 粒子的十六进制颜色，支持 3 位或 6 位代码。                           |
| `quantity`| `number` | `100`  | 在画布上生成并显示的粒子数量。                                       |
| `staticity`| `number`| `50`   | 粒子随鼠标距离移动的程度，值越大移动越小。                           |
| `ease`    | `number` | `50`   | 粒子运动的缓动程度，值越小越紧跟鼠标。                               |

#credits

- 感谢 [Magic UI](https://magicui.design/docs/components/particles) 提供该组件。
- 感谢 [Prodromos Pantos](https://github.com/prpanto) 将原组件移植到 Vue & Nuxt。

::
