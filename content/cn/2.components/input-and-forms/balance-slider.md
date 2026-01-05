---
title: 平衡滑块
description: 具备可调颜色、限制和交互提示的动态平衡滑块。
category: Forms & Input
tags: [css, tailwind, input]
---

::ComponentViewer{demoFile="BalanceSliderDemo.vue" config="BalanceSliderConfig" componentId="balance-slider" :componentFiles='["BalanceSlider.vue"]'}

#api

## API

| 属性名          | 类型     | 默认值      | 描述                                   |
| --------------- | -------- | ----------- | -------------------------------------- |
| `initialValue`  | `number` | `50`        | 滑块的初始位置（0-100）。              |
| `leftColor`     | `string` | `"#e68a00"` | 滑块左侧的背景色。                     |
| `rightColor`    | `string` | `"#ffffff"` | 滑块右侧的背景色。                     |
| `minShiftLimit` | `number` | `40`        | 启动位移动画的最小阈值。               |
| `maxShiftLimit` | `number` | `68`        | 关闭位移动画的最大阈值。               |
| `leftContent`   | `string` | `"LEFT"`    | 左侧提示中显示的文本。                 |
| `rightContent`  | `string` | `"RIGHT"`   | 右侧提示中显示的文本。                 |
| `indicatorColor`| `string` | `"#FFFFFF"` | 滑块中央指示器的颜色。                 |

#credits

- 灵感与移植来自 [Jhey 的 CSS 版 Balance Slider](https://x.com/jh3yy/status/1748809599598399792?s=46)。
- 原始概念由 [Malay Vasa](https://x.com/MalayVasa/status/1748726374079381930) 提出。

::
