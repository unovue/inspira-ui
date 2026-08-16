---
title: 媒体文字
description: 在两段文字之间显示图片或视频，并支持悬停、进入视口或 ref 触发。
category: Miscellaneous
tags: [media, image, video, motion-v]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="MediaTextDemo.vue" config="MediaTextConfig" componentId="media-text" :componentFiles='["MediaText.vue", "index.ts"]'}

#api

## API

| 属性名                | 类型                           | 默认值                        | 描述                             |
| --------------------- | ------------------------------ | ----------------------------- | -------------------------------- |
| `firstText`           | `string`                       | —                             | 媒体前显示的文字。               |
| `secondText`          | `string`                       | —                             | 媒体后显示的文字。               |
| `mediaUrl`            | `string`                       | —                             | 图片或视频地址。                 |
| `mediaType`           | `"image" \| "video"`           | —                             | 要渲染的媒体类型。               |
| `mediaContainerClass` | `string`                       | —                             | 应用于媒体动画容器的 class。     |
| `fallbackUrl`         | `string`                       | —                             | 视频使用的封面地址。             |
| `as`                  | `string`                       | `p`                           | 文字片段使用的 HTML 元素。       |
| `autoPlay`            | `boolean`                      | `true`                        | 视频是否自动播放。               |
| `loop`                | `boolean`                      | `true`                        | 视频是否循环播放。               |
| `muted`               | `boolean`                      | `true`                        | 视频是否静音。                   |
| `playsInline`         | `boolean`                      | `true`                        | 是否在移动设备中以内联方式播放。 |
| `alt`                 | `string`                       | 自动生成                      | 图片的替代文本。                 |
| `triggerType`         | `"hover" \| "ref" \| "inView"` | `hover`                       | 媒体显示的触发方式。             |
| `useInViewOptions`    | `UseInViewOptions`             | `{ once: true, amount: 0.5 }` | 传给视口触发器的配置。           |
| `animationVariants`   | `object`                       | 宽度弹簧展开                  | 媒体容器使用的 Motion variants。 |
| `class`               | `string`                       | —                             | 合并到根元素的 class。           |
| `leftTextClass`       | `string`                       | —                             | 第一个文字片段的 class。         |
| `rightTextClass`      | `string`                       | —                             | 第二个文字片段的 class。         |

使用 `ref` 触发时，组件会暴露 `animate()` 和 `reset()` 方法。

#credits

- 移植自 [Fancy Components Media Between Text](https://fancycomponents.dev/docs/components/blocks/media-between-text)。

::
