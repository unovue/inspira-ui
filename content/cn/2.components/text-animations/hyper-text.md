---
title: 超能文字
description: 悬停时快速变化的文字动画。
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="HyperTextDemo.vue" config="HyperTextConfig" componentId="hyper-text" :componentFiles='["HyperText.vue"]'}

#api

## API

| 属性名        | 类型      | 默认值  | 描述                                   |
| ------------- | --------- | ------- | -------------------------------------- |
| `class`       | `string`  | `""`    | 应用于组件的额外 CSS 类。              |
| `text`        | `string`  | Required| 要做动画的文字。                       |
| `duration`    | `number`  | `0.8`   | 整个动画的持续时间（秒）。             |
| `animateOnLoad`| `boolean`| `true`  | 是否在加载时自动播放动画。             |

#credits

- 灵感来自 [Magic UI 的 Hyper Text](https://magicui.design/docs/components/hyper-text) 组件。
- 感谢 [Prem](https://github.com/premdasvm) 移植该组件。

::
