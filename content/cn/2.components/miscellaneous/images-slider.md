---
title: 图片滑块
description: 全屏图片滑块，可使用键盘导航。
category: Miscellaneous
tags: [css, tailwind, images, aceternity-ui]
---

::ComponentViewer{demoFile="ImagesSliderDemo.vue" config="ImagesSliderConfig" componentId="images-slider" :componentFiles='["ImagesSlider.vue"]'}

#api

## API

| 属性名            | 类型                       | 默认值                                           | 描述                                                        |
| ----------------- | -------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| `images`          | `string[]`                 | `[]`                                             | 要在滑块中展示的图片 URL 数组。                             |
| `hideOverlay`     | `boolean`                  | `false`                                          | 是否隐藏图片滑块的覆盖层（槽位将不会渲染）。                |
| `overlayClass`    | `string`                   | `''`                                             | 应用于覆盖层容器的类名。                                   |
| `imageClass`      | `string`                   | `'bg-cover bg-center bg-no-repeat'`              | 应用于每张图片的类名。                                     |
| `enterFromClass`  | `string`                   | `'scale-0 origin-center'`                        | 进入过渡的初始类名。                                       |
| `enterActiveClass`| `string`                   | `'transition-transform duration-300 ease-in-out'`| 进入过渡的激活类名。                                       |
| `leaveActiveClass`| `string`                   | `'transition-transform duration-300 ease-in-out'`| 离开过渡的激活类名。                                       |
| `autoplay`        | `boolean\|number`          | `false`                                          | 自动播放间隔（毫秒），或 `false` 禁用。                     |
| `direction`       | `'vertical'\|'horizontal'` | `'vertical'`                                     | 滑块运行的轴向。                                           |
| `perspective`     | `string`                   | `'1000px'`                                       | 应用于滑块容器的透视值。                                   |
| `modelValue`      | `number`                   | `0`                                              | 当前幻灯片索引的双向绑定。                                  |

#credits

- 由 [Craig Riley](https://github.com/craigrileyuk) 移植此组件。
- 灵感来自 [Aceternity UI](https://ui.aceternity.com/components/images-slider)。

::
