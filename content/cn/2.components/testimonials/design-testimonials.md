---
title: 设计感评价
description: 一个高级、设计优先的评价版块，包含电影感排版、磁性视差、逐词动画与自动轮播导航。
category: 杂项
tags: [css, tailwind, motion-v, testimonial, animation]
badge: New
---

::ComponentViewer{demoFile="DesignTestimonialsDemo.vue" config="DesignTestimonialsConfig" componentId="design-testimonials" :componentFiles='["DesignTestimonials.vue"]'}

#api

## API

| 属性名         | 类型                | 默认值           | 描述                                   |
| -------------- | ------------------- | ---------------- | -------------------------------------- |
| `title`        | `string`            | `"Testimonials"` | 布局左侧显示的垂直标签。               |
| `duration`     | `number`            | `6000`           | 自动切换到下一条评价前的时间（毫秒）。 |
| `testimonials` | `TestimonialItem[]` | **必填**         | 要渲染并动画化的评价列表。             |

### `TestimonialItem` 对象

每条评价需包含以下字段：

| 属性      | 类型     | 描述                                   |
| --------- | -------- | -------------------------------------- |
| `quote`   | `string` | 评价文本，逐词动画显示。               |
| `author`  | `string` | 评价作者姓名。                         |
| `role`    | `string` | 作者的角色或职务。                     |
| `company` | `string` | 公司或组织名称（用于徽章和滚动字幕）。 |

#credits

- 动画由 `motion-v` 提供支持
- 移植自 [Jatin Yadav 的 Design Testimonials](https://21st.dev/community/components/jatin-yadav05/design-testimonial/default)

::
