---
title: 波纹按钮
description: 一款带有可自定义颜色和动画时长的时尚波纹按钮组件。
category: Button
tags: [css, tailwind, button, magic-ui]
---

::ComponentViewer{demoFile="RippleButtonDemo.vue" config="RippleButtonConfig" componentId="ripple-button" :componentFiles='["RippleButton.vue"]'}

#api

## API

| 属性名        | 类型     | 默认值       | 描述                              |
| ------------- | -------- | ------------ | --------------------------------- |
| `class`       | `string` | -            | 用于自定义样式的额外 CSS 类。     |
| `rippleColor` | `string` | `"#ADD8E6"`  | 波纹效果的颜色。                  |
| `duration`    | `number` | `600`        | 波纹动画的持续时间（毫秒）。      |

## Emits

| 事件名  | 类型    | 描述     |
| ------- | ------- | -------- |
| `click` | `event` | 点击事件 |

#credits

- 灵感来自 [Magic UI 的 Ripple Button](https://magicui.design/docs/components/ripple-button) 组件。
- 感谢 [kalix127](https://github.com/kalix127) 对该组件的移植。

::
