---
title: 文字故障
description: 为文字添加鲜明的故障效果，可自定义速度、阴影颜色，并可选择仅在悬停时触发。
category: 文字动画
tags: [css, tailwind]
---

::ComponentViewer{demoFile="TextGlitchDemo.vue" config="TextGlitchConfig" componentId="text-glitch" :componentFiles='["TextGlitch.vue"]'}

#api

## API

| 属性名        | 类型      | 默认值     | 描述                                       |
| ------------- | --------- | ---------- | ------------------------------------------ |
| `text`        | `string`  | `""`       | 展示故障效果的文字内容。                   |
| `speed`       | `number`  | `0.5`      | 故障动画的速度（秒）。                     |
| `enableShadows`| `boolean`| `true`     | 是否开启彩色阴影以增强故障感。            |
| `enableOnHover`| `boolean`| `false`    | 为 `true` 时仅在悬停时启用故障动画。      |
| `class`       | `string`  | `undefined`| 容器 div 的额外 CSS 类。                  |

#credits

- 灵感与实现参考了以下 YouTube 视频：
  - https://www.youtube.com/watch?v=7Xyg8Ja7dyY
  - https://www.youtube.com/watch?v=9CCkp_El1So

::
