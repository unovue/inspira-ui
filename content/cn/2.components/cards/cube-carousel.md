---
title: 立方体轮播
description: 使用四个立方体面，在图片和视频之间拖动切换的 3D 轮播组件。
category: 卡片
tags: [css, tailwind, motion-v, carousel, 3d]
badge: New
---

::ComponentViewer{demoFile="CubeCarouselDemo.vue" config="CubeCarouselConfig" componentId="cube-carousel" :componentFiles='["CubeCarousel.vue", "index.ts"]'}

#api

## API

### `CubeCarousel`

| 属性名             | 类型                                     | 默认值                                            | 说明                                         |
| ------------------ | ---------------------------------------- | ------------------------------------------------- | -------------------------------------------- |
| `items`            | `CubeCarouselItem[]`                     | —                                                 | 放置在立方体面上的图片或视频，建议至少四项。 |
| `width`            | `number`                                 | —                                                 | 每个面的宽度，单位为像素。                   |
| `height`           | `number`                                 | —                                                 | 每个面的高度，单位为像素。                   |
| `class`            | `string`                                 | —                                                 | 轮播根元素的额外类名。                       |
| `debug`            | `boolean`                                | `false`                                           | 显示面颜色和项目 ID，用于检查立方体结构。    |
| `perspective`      | `number`                                 | `600`                                             | CSS 透视距离，单位为像素。                   |
| `direction`        | `"top" \| "bottom" \| "left" \| "right"` | `"left"`                                          | 旋转轴和方向。                               |
| `transition`       | `Record<string, unknown>`                | `{ duration: 1.25, ease: [...] }`                 | 按钮和键盘旋转使用的 Motion 过渡。           |
| `snapTransition`   | `Record<string, unknown>`                | `{ type: "spring", damping: 30, stiffness: 200 }` | 拖动释放后吸附到面的过渡。                   |
| `dragSpring`       | `CubeCarouselSpringConfig`               | `{ stiffness: 200, damping: 30 }`                 | 跟随指针拖动时使用的弹簧配置。               |
| `autoPlay`         | `boolean`                                | `false`                                           | 自动切换项目。                               |
| `autoPlayInterval` | `number`                                 | `3000`                                            | 自动切换间隔，单位为毫秒。                   |
| `onIndexChange`    | `(index: number) => void`                | —                                                 | 每次旋转完成后调用。                         |
| `enableDrag`       | `boolean`                                | `true`                                            | 启用指针和触摸拖动。                         |
| `dragSensitivity`  | `number`                                 | `0.5`                                             | 指针移动产生的旋转量。                       |

### `CubeCarouselItem`

| 属性名   | 类型                 | 必填 | 说明                   |
| -------- | -------------------- | ---- | ---------------------- |
| `id`     | `string`             | 是   | 项目的稳定标识符。     |
| `type`   | `"image" \| "video"` | 是   | 选择图片或视频渲染器。 |
| `src`    | `string`             | 是   | 图片或视频地址。       |
| `alt`    | `string`             | 否   | 图片的替代文本。       |
| `poster` | `string`             | 否   | 视频的封面图片地址。   |

## 交互

沿着轮播轴拖动即可旋转立方体，松开后会吸附到最近的四分之一转角。聚焦后可以使用对应轴向的方向键，也可以通过暴露的 `next`、`prev` 和 `getCurrentItemIndex` 方法控制轮播。

#credits

- 移植自 [Fancy Components Box Carousel](https://fancycomponents.dev/docs/components/carousel/box-carousel)。
- Demo 图片来自 [Daniel Petho](https://www.cosmos.so/danielpetho/box-carousel-demo)。
- 灵感来自 [Framer University](https://framer.university/resources/3d-box-carousel-in-framer)。

::
