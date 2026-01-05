---
title: 彩色文字
description: 多彩文字组件，带滤镜与缩放效果。
category: Text Animation
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="ColourfulTextDemo.vue" config="ColourfulTextConfig" componentId="colourful-text" :componentFiles='["ColourfulText.vue"]'}

#api

## API

| 属性名    | 类型       | 默认值                                                                                                                                                                                                            | 描述                                                   |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `text`    | `string`   | `"black"`                                                                                                                                                                                                          | 要渲染的文字，每个字符都会单独进行颜色和动效动画。     |
| `colors`  | `string[]` | `[ "rgb(131, 179, 32)", "rgb(47, 195, 106)", "rgb(42, 169, 210)", "rgb(4, 112, 202)", "rgb(107, 10, 255)", "rgb(183, 0, 218)", "rgb(218, 0, 171)", "rgb(230, 64, 92)", "rgb(232, 98, 63)", "rgb(249, 129, 47)", ]` | 文字使用的颜色列表。                                   |
| `startColor`| `string` | `"rgb(255,255,255)"`                                                                                                                                                                                               | 字符的初始颜色。                                       |
| `duration`| `number`   | `5`                                                                                                                                                                                                                | 动画持续时间（秒）。                                   |

#credits

- 感谢 [Whbbit1999](https://github.com/Whbbit1999) 提供该组件。
- 移植自 [Aceternity UI Colourful Text](https://ui.aceternity.com/components/colourful-text)

::
