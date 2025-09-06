---
title: 图片轨迹光标
description: 一个交互式光标效果，创建动态的图片轨迹，跟随鼠标移动，支持多种动画变体。
navBadges:
  - value: 新
    type: lime
---

::ComponentLoader{label="预览" componentName="ImageTrailCursorDemo" type="examples" id="image-trail-cursor"}
::

## API 接口

| 属性名    | 类型          | 默认值    | 描述                                        |
| --------- | ------------- | --------- | ------------------------------------------- |
| `images`  | `string[]`    | `[]`      | 用于轨迹效果显示的一组图片 URL。            |
| `variant` | `VariantType` | `"type1"` | 动画变体类型（从 `"type1"` 到 `"type7"`）。 |

> 💡 该组件创建一个全宽全高的容器，拥有较高的 z-index 用于光标跟踪。每张图片宽度为190px，宽高比为1.1，带有圆角。

## 使用 CLI 安装

::InstallationCli{componentId="image-trail-cursor"}
::

## 手动安装

::code-group

::CodeViewerTab{label="ImageTrailCursor.vue" language="vue" componentName="ImageTrailCursor" type="ui" id="image-trail-cursor"}
::
::CodeViewerTab{label="trail-variants.ts" language="typescript" componentName="trail-variants" language="ts" type="ui" id="image-trail-cursor" extension="ts"}
::
::

## 特性

- **多种动画变体**：提供7种不同的轨迹动画样式和行为选择。
- **动态图片渲染**：平滑过渡图片的不透明度和变换效果。
- **响应式设计**：图片自动缩放，带圆角并处理溢出显示。
- **内存管理**：变体切换时自动销毁并重建实例，防止内存泄漏。
- **性能优化**：使用 `will-change` CSS 属性，实现流畅的 GPU 加速动画。
- **灵活的图片支持**：接受任意数组的图片 URL，支持自定义视觉内容。

## 注意事项

- 组件使用变体系统，动画类在 `trail-variants.ts` 中映射。
- 图片采用绝对定位，带有轻微溢出效果（尺寸大20px，偏移-10px），以实现更流畅的视觉过渡。
- 容器保持较高的 z-index（100），确保轨迹效果显示在其他内容之上。
- 在组件卸载和变体切换时，正确清理实例，避免内存泄漏。

## 致谢

- 灵感来自现代光标轨迹效果和图片悬停交互。
- 基于 Vue 3 组合式 API 构建，实现最佳响应性和性能。
- 移植自 [Codrops 文章](https://tympanus.net/codrops/2023/10/18/ideas-for-image-motion-trail-animations/)
