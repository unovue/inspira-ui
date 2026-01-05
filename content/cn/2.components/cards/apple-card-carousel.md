---
title: Apple 卡片轮播
description: 一款流畅的 Apple 风格卡片轮播，支持模糊加载图片、模态展开和平滑滚动控制。
category: Card
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="AppleCardCarouselDemo.vue" config="AppleCardCarouselConfig" componentId="apple-card-carousel" :componentFiles='["AppleCardCarousel.vue", "AppleCarouselItem.vue", "AppleCard.vue", "AppleBlurImage.vue", "AppleCarouselContext.ts"]'}

#api

**Apple Carousel** 由四个相互关联的组件组成：

| 组件                | 用途                                                 |
| ------------------- | ---------------------------------------------------- |
| `AppleCardCarousel` | 带有左右控制的水平滚动容器。                         |
| `AppleCarouselItem` | 为每个卡片添加进入动画和间距的包装组件。             |
| `AppleCard`         | 可点击的精美卡片，可展开为全屏模态。                 |
| `AppleBlurImage`    | 一个 `<img>` 的替代品，图片加载前保持模糊。          |

它们组合在一起，重现 “App Store / Apple TV” 的浏览体验。

---

## `AppleCardCarousel`

| 属性            | 类型     | 默认值 | 描述                               |
| --------------- | -------- | ------ | ---------------------------------- |
| `initialScroll` | `number` | `0`    | 挂载时应用的水平滚动偏移量（px）。 |

### Slots

默认插槽中应包含一个或多个 **`AppleCarouselItem`** 组件。

### Emits

无自定义事件。

---

## `AppleCarouselItem`

| 属性    | 类型     | 必填 | 描述                                   |
| ------- | -------- | ---- | -------------------------------------- |
| `index` | `number` | 是   | 从零开始的索引，用于控制入场动画的交错。 |

### Slots

默认插槽——在此放置 **`AppleCard`**。

---

## `AppleCard`

| 属性     | 类型                                               | 必填 | 默认值 | 描述                         |
| -------- | -------------------------------------------------- | ---- | ------ | ---------------------------- |
| `card`   | `{ src: string; title: string; category: string }` | 是   | —      | 卡片数据对象。               |
| `index`  | `number`                                           | 是   | —      | 卡片在轮播中的位置。         |
| `layout` | `boolean`                                          | 否   | `false`| 启用共享布局的 FLIP 动画。  |

### Slots

当卡片 **展开**（模态打开）时，默认插槽会渲染在模态主体中，你可以插入更多内容，如文本、图片或视频。

### Emits

无自定义事件（依赖注入的 `CarouselKey` 上下文）。

---

## `AppleBlurImage`

| 属性     | 类型               | 默认值                          | 描述                                                     |
| -------- | ------------------ | ------------------------------- | -------------------------------------------------------- |
| `src`    | `string`           | **—**                           | 图片源地址。_必填。_                                     |
| `alt`    | `string`           | "Background of a beautiful view"| 图片的替代文本。                                         |
| `width`  | `number \| string` | 图片自然尺寸                    | 宽度属性；使用 `fill` 时会省略。                         |
| `height` | `number \| string` | 图片自然尺寸                    | 高度属性；使用 `fill` 时会省略。                         |
| `fill`   | `boolean`          | `false`                         | 若为 `true`，通过工具类设置 `width:100%; height:100%`。  |
| `class`  | `string`           | `""`                            | 通过 `cn()` 合并的额外类名。                             |

当图片触发原生 `load` 事件时，会从 `blur-sm` 平滑过渡为无模糊。

---

#credits

- 移植自 [Aceternity UI Apple Card Carousel](https://ui.aceternity.com/components/apple-cards-carousel)。

::
