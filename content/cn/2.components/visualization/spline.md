---
title: Spline
description: Spline 3D 工具的 Vue 包装组件，提供事件与自动缩放。
category: Visualization
tags: [css, tailwind, spline]
---

::ComponentViewer{demoFile="SplineDemo.vue" config="SplineConfig" componentId="spline" :componentFiles='["Spline.vue", "ParentSize.vue"]' dependencies="@splinetool/runtime"}

#api

## API

| 属性名         | 类型       | 默认值     | 描述                                            |
| -------------- | ---------- | ---------- | ----------------------------------------------- |
| `scene`        | `string`   | —          | Spline 场景文件的 URL 或路径。**必填**。        |
| `onLoad`       | `Function` | `undefined`| Spline 场景成功加载时触发的回调。               |
| `renderOnDemand`| `boolean` | `true`     | 是否启用 Spline 的按需渲染优化。                |
| `style`        | `object`   | `{}`       | 应用于画布容器的自定义 CSS 样式。               |

**Emits**

| 事件名              | 负载   | 描述                                               |
| ------------------- | ------ | -------------------------------------------------- |
| `error`             | `Error`| 加载 Spline 场景出错时触发。                       |
| `spline-mouse-down` | `any`  | Spline 场景内捕获到 mouseDown 事件时触发。        |
| `spline-mouse-up`   | `any`  | 捕获到 mouseUp 事件时触发。                       |
| `spline-mouse-hover`| `any`  | 触发 mouseHover 事件时发出。                      |
| `spline-key-down`   | `any`  | 在 Spline 场景中捕获到 keyDown 时触发。           |
| `spline-key-up`     | `any`  | 捕获到 keyUp 时触发。                             |
| `spline-start`      | `any`  | Spline 场景开始时触发。                           |
| `spline-look-at`    | `any`  | 发生 lookAt 事件时触发。                          |
| `spline-follow`     | `any`  | 发生 follow 事件时触发。                          |
| `spline-scroll`     | `any`  | 发生滚动交互时触发。                              |

#credits

- 底层使用 Spline 的 runtime。
- 灵感来自多种基于 Spline 的 3D Web 体验。

::
