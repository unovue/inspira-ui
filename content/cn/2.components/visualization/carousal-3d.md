---
title: 3D 走马灯
description: 使用 Three.js 和 Motion-V 的动态交互式 3D 走马灯组件，可实现平滑无限旋转和用户控制的交互。
---

::ComponentLoader{label="Preview" componentName="Carousel3dDemo" type="examples" id="carousel-3d"}
::

## API

| Prop Name        | 类型        | 默认值 | 说明                                |
| ---------------- | ----------- | ------ | ----------------------------------- |
| `items`          | `unknown[]` | `[]`   | 要在轮播中显示的图像或元素列表。    |
| `class`          | `string`    | `""`   | 用于设置轮播覆盖样式的附加 CSS 类。 |
| `containerClass` | `string`    | `""`   | 用于设置轮播容器样式的 CSS 类。     |
| `width`          | `number`    | `450`  | 单个轮播项目的宽度。                |
| `height`         | `number`    | `600`  | 单个轮播项目的高度。                |

## 组件源码

您可以复制并粘贴以下代码来创建此组件：

::code-group

    ::CodeViewerTab{label="Carousel3D.vue" language="vue" componentName="Carousel3D" type="ui" id="carousel-3d"}
    ::

::

## 特性

- **3D 旋转轮播**：使用 Three.js 显示一个旋转的 3D 轮播。
- **流畅无限旋转**：轮播持续平滑旋转。
- **用户交互支持**：支持鼠标和触控交互，手动旋转轮播。
- **完全响应式**：动态适应不同的屏幕尺寸。
- **性能优化**：利用 Motion-V 实现流畅的动画和缓动功能。
- **动态项目渲染**：接受一个项目数组，并在轮播中动态渲染。
- **暗黑模式支持**：适配暗黑和亮黑主题，以获得更好的 UI 一致性。

## 致谢

- 使用 Three.js 构建，用于 3D 渲染。
- 利用 Motion-V 实现无缝动画。
- 感谢 [@safakdinc](https://github.com/safakdinc) 分享此组件.
