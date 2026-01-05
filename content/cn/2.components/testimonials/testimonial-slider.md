---
title: 评价滑块
description: 轻量的评价滑块，包含图片旋转、文字过渡与可选自动轮播。
category: 杂项
tags: [css, tailwind]
---

::ComponentViewer{demoFile="TestimonialSliderDemo.vue" config="TestimonialSliderConfig" componentId="testimonial-slider" :componentFiles='["TestimonialSlider.vue"]'}

#api

## API

| 属性名         | 类型                                                                | 默认值 | 描述                                         |
| -------------- | ------------------------------------------------------------------- | ------ | -------------------------------------------- |
| `testimonials` | `Array<{ img: string; quote: string; name: string; role: string }>` | `[]`   | 滑块中显示的评价对象数组。                   |
| `autoRotate`   | `boolean`                                                           | `true` | 若为 `true`，滑块每隔 `duration` 秒自动切换。|
| `duration`     | `number`                                                            | `5`    | 启用自动轮播时的切换间隔（秒）。             |

::
