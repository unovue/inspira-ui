---
title: Halo 搜索
description: 一款未来感十足的搜索输入组件，拥有多重发光环与细腻的动态光晕，为界面带来炫彩、沉浸式体验。
---

::ComponentLoader{label="Preview" componentName="HaloSearchDemo" type="examples" id="halo-search"}
::

## API

| 属性名  | 类型     | 默认值 | 描述                    |
| ------- | -------- | ------ | ----------------------- |
| `class` | `string` | `""`   | 根容器的附加 CSS 类名。 |

## 安装

除 Vue 3 和你的图标系统（用于搜索图标）外，无需额外依赖。

## CLI 安装

::InstallationCli{componentId="halo-search"}
::

## 手动安装

复制并粘贴以下代码

::CodeViewer{filename="HaloSearch.vue" language="vue" componentName="HaloSearch" type="ui" id="halo-search"}
::

## 特色功能

- **发光环**：多层锥形渐变环，带有流畅的旋转动画。
- **极光光晕**：大面积模糊渐变背景，营造环境光晕效果。
- **内外光效**：细腻模糊覆盖层，增强深度与聚焦感。
- **动画搜索按钮**：渐变圆环和无限旋转的搜索图标高光。
- **响应式输入框**：干净、暗色主题的搜索输入，支持自定义占位符样式。
- **交互状态**：悬停和聚焦时，环形旋转与光晕强度动态反馈。
- **作用域样式**：封装 CSS，保证样式隔离和平滑过渡。

## 使用场景

- 可作为仪表盘、音乐/视频应用、创意作品集等的炫酷搜索栏。
- 集成到落地页，为用户留下带动画的深刻第一印象。
- 结合深色或弱光主题界面，放大光环特效的视觉冲击。
- 在 CSS 中自定义光晕色彩与动画时长，适配品牌色或节日氛围。
- 可扩展支持键盘导航、搜索自动补全，提升可访问性。

## 致谢

- 设计灵感源自未来主义 UI 概念和现代网页/应用中流行的环境光效。
- 灵感部分来自 UiVerse Search input challenge。
