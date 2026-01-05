---
title: 地球
description: 可交互的旋转地球组件。
category: Visualization
tags: [css, tailwind, cobe, magic-ui]
---

::ComponentViewer{demoFile="GlobeDemo.vue" config="GlobeConfig" componentId="globe" :componentFiles='["Globe.vue"]' dependencies="cobe vue-use-spring"}

#api

## API

| 属性名    | 类型          | 默认值   | 描述                                                                                   |
| --------- | ------------- | -------- | -------------------------------------------------------------------------------------- |
| `class`   | `string`      | `""`     | 用于自定义样式的额外 CSS 类。                                                          |
| `config`  | `COBEOptions` | N/A      | 地球的配置对象，遵循 **[COBE](https://cobe.vercel.app/docs/api)** 库的选项。           |
| `mass`    | `number`      | `1`      | 控制旋转惯性的弹簧质量参数。                                                           |
| `tension` | `number`      | `280`    | 弹簧张力参数，影响响应速度。                                                           |
| `friction`| `number`      | `100`    | 弹簧摩擦参数，影响阻尼。                                                               |
| `precision`| `number`     | `0.001`  | 弹簧计算的精度参数。                                                                   |

#credits

- 基于 [cobe](https://github.com/shuding/cobe) 库实现 WebGL 地球可视化。
- 移植自 [Magic UI](https://magicui.design/docs/components/globe)。

::
