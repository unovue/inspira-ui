---
title: Balance Slider
description: A dynamic balance slider with adjustable colors, limits, and interactive tooltip.
category: Forms & Input
tags: [css, tailwind, input]
---

::ComponentViewer{demoFile="BalanceSliderDemo.vue" config="BalanceSliderConfig" componentId="balance-slider" :componentFiles='["BalanceSlider.vue"]'}

#api

## API

| Prop Name        | Type     | Default     | Description                                         |
| ---------------- | -------- | ----------- | --------------------------------------------------- |
| `initialValue`   | `number` | `50`        | Initial position of the slider (0-100).             |
| `leftColor`      | `string` | `"#e68a00"` | Background color for the left side of the slider.   |
| `rightColor`     | `string` | `"#ffffff"` | Background color for the right side of the slider.  |
| `minShiftLimit`  | `number` | `40`        | Minimum limit where shifting animation activates.   |
| `maxShiftLimit`  | `number` | `68`        | Maximum limit where shifting animation deactivates. |
| `leftContent`    | `string` | `"LEFT"`    | Text displayed in the tooltip for the left side.    |
| `rightContent`   | `string` | `"RIGHT"`   | Text displayed in the tooltip for the right side.   |
| `indicatorColor` | `string` | `"#FFFFFF"` | Color of the central indicator on the slider.       |

#credits

- Inspired and ported from code shared in [Jhey's CSS only version of Balance Slider](https://x.com/jh3yy/status/1748809599598399792?s=46)
- Original concept by [Malay Vasa](https://x.com/MalayVasa/status/1748726374079381930).

::
