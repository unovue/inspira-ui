---
title: 跑马灯
description: 可定制的循环滚动组件，支持水平/垂直方向、悬停暂停与重复次数。
category: Miscellaneous
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="MarqueeDemo.vue" config="MarqueeConfig" componentId="marquee" :componentFiles='["Marquee.vue", "ReviewCard.vue"]'}

#api

## API

| 属性名        | 类型      | 默认值 | 描述                                         |
| ------------- | --------- | ------ | -------------------------------------------- |
| `class`       | `string`  | `''`   | 应用于最外层容器的自定义类。                 |
| `reverse`     | `boolean` | `false`| 设置滚动方向为反向（从右到左或下到上）。     |
| `pauseOnHover`| `boolean` | `false`| 悬停时暂停跑马灯动画。                       |
| `vertical`    | `boolean` | `false`| 将滚动方向设为垂直。                         |
| `repeat`      | `number`  | `4`    | 内容重复的次数。                             |

## CSS 变量

可通过以下 CSS 变量自定义速度与间距：

- **`--duration`**：控制跑马灯动画速度。
- **`--gap`**：设置重复项之间的间距。

#credits

- 灵感来自 [Magic UI](https://magicui.design/docs/components/marquee)。

::
