---
title: 容器滚动
description: 根据滚动进度变换内部内容的滚动效果，包含缩放与旋转的平滑过渡。
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="ContainerScrollDemo.vue" config="ContainerScrollConfig" componentId="container-scroll" :componentFiles='["ContainerScroll.vue", "ContainerScrollTitle.vue", "ContainerScrollCard.vue"]'}

#api

## API

### `ContainerScroll`

`ContainerScroll` 创建 3D 滚动效果。用户滚动时，容器内的内容会随滚动进行缩放、旋转与位移。

| 属性名     | 类型   | 默认值 | 描述                                             |
| ---------- | ------ | ------ | ------------------------------------------------ |
| `rotate`   | Number | `0`    | 控制滚动时内层内容的旋转。                      |
| `scale`    | Number | `1`    | 控制滚动时内容的缩放。                          |
| `translateY`| Number | `0`   | 控制滚动时标题的垂直位移。                      |

### `ContainerScrollTitle`

`ContainerScrollTitle` 处理标题的垂直平移效果。

| 属性名    | 类型   | 默认值 | 描述                          |
| --------- | ------ | ------ | ----------------------------- |
| `translate`| Number| `0`    | 控制标题的垂直位移。          |

### `ContainerScrollCard`

`ContainerScrollCard` 在滚动中为卡片应用缩放与旋转效果。

| 属性名  | 类型   | 默认值 | 描述                             |
| ------- | ------ | ------ | -------------------------------- |
| `rotate`| Number | `0`    | 控制卡片的旋转效果。             |
| `scale` | Number | `1`    | 控制卡片的缩放效果。             |

## CSS 变量

可通过以下 CSS 变量自定义滚动动画与响应表现：

- **`--scale-start`**：卡片的初始缩放值。
- **`--scale-end`**：滚动过程中卡片的最终缩放值。
- **`--rotate-start`**：卡片的初始旋转值。
- **`--rotate-end`**：滚动过程中卡片的最终旋转值。

#credits

- 灵感来自 [Aceternity UI Container Scroll Animation](https://ui.aceternity.com/components/container-scroll-animation)。

::
