---
title: 环形画廊
description: 让插槽内容沿圆周排列，并支持持续旋转和悬停暂停。
category: 杂项
tags: [css, tailwind, gallery]
badge: New
---

::ComponentViewer{demoFile="CircularGalleryDemo.vue" config="CircularGalleryConfig" componentId="circular-gallery" :componentFiles='["CircularGallery.vue", "index.ts"]'}

#api

## API

| 属性名         | 类型                  | 默认值   | 说明                           |
| -------------- | --------------------- | -------- | ------------------------------ |
| `radius`       | `number`              | `100`    | 子元素距离圆心的像素距离。     |
| `duration`     | `number`              | `10`     | 完成一整圈旋转所需的秒数。     |
| `easing`       | `string`              | `linear` | 旋转使用的 CSS 缓动函数。      |
| `direction`    | `normal` \| `reverse` | `normal` | 旋转方向。                     |
| `class`        | `string`              | —        | 根元素的额外类名。             |
| `pauseOnHover` | `boolean`             | `false`  | 鼠标悬停在子元素上时暂停旋转。 |

## 使用方式

通过默认插槽传入需要沿圆周排列的元素：

```vue
<CircularGallery :radius="140" :duration="12" pause-on-hover>
  <img src="/images/one.jpg" alt="One" class="size-24 object-cover" />
  <img src="/images/two.jpg" alt="Two" class="size-24 object-cover" />
  <img src="/images/three.jpg" alt="Three" class="size-24 object-cover" />
</CircularGallery>
```

#credits

- 移植自 [Fancy Components Circling Elements](https://fancycomponents.dev/docs/components/blocks/circling-elements)。

::
