---
title: 图案背景
description: 简单的动画图案背景，让版块更突出。
category: 背景
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="PatternBackgroundDotDemo.vue" config="PatternBackgroundConfig" componentId="pattern-background" :componentFiles='["PatternBackground.vue", "index.ts"]' dependencies="class-variance-authority"}

#api

## API

| 属性名    | 类型                                                                                                   | 默认值   | 描述                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------- |
| `animate` | `boolean`                                                                                              | `false`  | 若设为 `true`，背景将有动画。                                                                     |
| `direction`| `top` \| `bottom` \| `left` \| `right` \| `top-left` \| `top-right` \| `bottom-left` \| `bottom-right`| `top`    | 动画移动方向。可使用常量 `PATTERN_BACKGROUND_DIRECTION`。                                         |
| `direction`| `grid` \| `dot`                                                                                        | `grid`   | 图案类型。可使用常量 `PATTERN_BACKGROUND_VARIANT`。                                                |
| `size`    | `xs` \| `sm` \| `md` \| `lg`                                                                           | `md`     | 背景图案的大小。                                                                                  |
| `mask`    | `ellipse` \| `ellipse-top`                                                                             | `ellipse`| 在背景图案上添加遮罩。可使用常量 `PATTERN_BACKGROUND_MASK`。                                      |
| `speed`   | `number`                                                                                               | `10000`  | 动画时长（毫秒），数值越大动画越慢（`20000` 比 `5000` 更慢）。可使用常量 `PATTERN_BACKGROUND_SPEED`。 |

#credits

- 灵感来自 [Magic UI 的 Dot Pattern](https://magicui.design/docs/components/dot-pattern)。
- 灵感来自 [Magic UI 的 Grid Pattern](https://magicui.design/docs/components/grid-pattern)。
- 灵感来自 [Magic UI 的 Animated Grid Pattern](https://magicui.design/docs/components/animated-grid-pattern)。
- 感谢 [Nathan De Pachtere](https://nathandepachtere.com/) 移植该组件。

::
