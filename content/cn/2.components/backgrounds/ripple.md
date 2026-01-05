---
title: 涟漪
description: 用于突出元素的动画涟漪效果。
category: Background
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="RippleDemo.vue" config="RippleConfig" componentId="ripple" :componentFiles='["Ripple.vue", "RippleCircle.vue", "RippleContainer.vue"]'}

#api

## API

| 属性名                      | 类型     | 默认值     | 描述                                             |
| --------------------------- | -------- | ---------- | ------------------------------------------------ |
| `baseCircleSize`            | `number` | `210`      | 主圆的尺寸（像素）。                             |
| `baseCircleOpacity`         | `number` | `0.24`     | 主圆的不透明度。                                 |
| `spaceBetweenCircle`        | `number` | `70`       | 每个涟漪圆之间的间距（像素）。                   |
| `circleOpacityDowngradeRatio`| `number`| `0.03`     | 每个后续涟漪圆的不透明度递减比例。               |
| `circleClass`               | `string` | `undefined`| 用于额外样式的圆形 CSS 类。                      |
| `waveSpeed`                 | `number` | `80`       | 波纹动画速度（毫秒）。                            |
| `numberOfCircles`           | `number` | `7`        | 渲染的涟漪圆数量。                               |

#credits

- 感谢 [Magic UI](https://magicui.design/docs/components/ripple)。
- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 移植该组件。
- 感谢 [Nathan De Pachtere](https://nathandepachtere.com/) 更新该组件。

::
