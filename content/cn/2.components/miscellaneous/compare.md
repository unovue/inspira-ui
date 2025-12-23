---
title: 对比
description: 通过滑动比较两组内容——图像、设计、代码或自定义元素。
category: 杂项
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="CompareDemo.vue" config="CompareConfig" componentId="compare" :componentFiles='["Compare.vue", "StarField.vue"]'}

#api

## API

### Props

| 属性名                  | 类型                | 默认值          | 描述                               |
| ----------------------- | ------------------- | --------------- | ---------------------------------- |
| `firstImage`            | `string`            | `""`            | 第一张图片的 URL。                 |
| `secondImage`           | `string`            | `""`            | 第二张图片的 URL。                 |
| `firstImageAlt`         | `string`            | `"First image"` | 第一张图片的替代文本。             |
| `secondImageAlt`        | `string`            | `"Second image"`| 第二张图片的替代文本。             |
| `class`                 | `string`            | `""`            | 组件的额外类名。                   |
| `firstContentClass`     | `string`            | `""`            | 应用于第一侧内容包装器的类。       |
| `secondContentClass`    | `string`            | `""`            | 应用于第二侧内容包装器的类。       |
| `initialSliderPercentage`| `number`           | `50`            | 滑块初始位置（0-100）。            |
| `slideMode`             | `"hover" \| "drag"` | `"hover"`       | 滑块的交互模式。                   |
| `showHandlebar`         | `boolean`           | `true`          | 是否显示手柄。                     |
| `autoplay`              | `boolean`           | `false`         | 是否启用自动播放。                 |
| `autoplayDuration`      | `number`            | `5000`          | 自动播放周期（毫秒）。             |

### Events

| 事件名             | 负载    | 描述                                   |
| ------------------ | ------- | -------------------------------------- |
| `update:percentage`| `number`| 滑块位置变化时触发（0-100）。          |
| `drag:start`       | -       | 开始拖动时触发。                       |
| `drag:end`         | -       | 结束拖动时触发。                       |
| `hover:enter`      | -       | 鼠标进入组件时触发。                   |
| `hover:leave`      | -       | 鼠标离开组件时触发。                   |

### Slots

| 插槽名           | 默认内容                                           | 描述                                                         |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| `first-content`  | 若提供 `firstImage` 则为 `<img>` 元素             | 左/第一侧展示的内容，拥有容器的全部宽高。                    |
| `second-content` | 若提供 `secondImage` 则为 `<img>` 元素            | 右/第二侧展示的内容，拥有容器的全部宽高。                    |
| `handle`         | 默认带圆点图标的滑块手柄                          | 自定义滑块手柄，需自行使用绝对定位放在分割线处。             |

#credits

- 感谢 [M Atif](https://github.com/atif0075) 提供该组件。
- 灵感来自 [Aceternity UI's Compare](https://ui.aceternity.com/components/compare)。

::
