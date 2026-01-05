---
title: 视频文字
description: 带有视频背景的文字组件。
category: Background
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="VideoTextDemo.vue" config="VideoTextConfig" componentId="video-text" :componentFiles='["VideoText.vue"]'}

#api

## API

| 属性名             | 类型                             | 默认值        | 描述                               |
| ------------------ | -------------------------------- | ------------- | ---------------------------------- |
| `src`              | `string`                         | `Required`    | 视频源地址。                       |
| `class`            | `string`                         | `""`          | 容器的额外类名。                   |
| `autoPlay`         | `boolean`                        | `true`        | 是否自动播放视频。                 |
| `muted`            | `boolean`                        | `true`        | 是否静音播放。                     |
| `loop`             | `boolean`                        | `true`        | 是否循环播放。                     |
| `preload`          | `"auto" \| "metadata" \| "none"` | `"auto"`      | 是否预加载视频。                   |
| `fontSize`         | `string \| number`               | `"120"`       | 文字蒙版的字体大小。               |
| `fontWeight`       | `string \| number`               | `"bold"`      | 文字蒙版的字重。                   |
| `textAnchor`       | `string`                         | `"middle"`    | 文字蒙版的锚点。                   |
| `dominantBaseline` | `string`                         | `"middle"`    | 文字蒙版的基线对齐。               |
| `fontFamily`       | `string`                         | `"sans-serif"`| 文字蒙版的字体族。                 |

#credits

- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 提供该组件。
- 移植自 [Magic UI 的 Video Text](https://magicui.design/docs/components/video-text)。

::
