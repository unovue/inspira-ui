---
title: Stractium 背景
description: 一个基于着色器的背景，灵感来自复杂的分形图案和有机纹理，使用光线行进（raymarching）和 GLSL 创建。该效果旨在模拟复杂且不断演变的视觉纹理。
navBadges:
  - value: 新
    type: lime
---

::ComponentLoader{label="预览" componentName="StractiumBackgroundDemo" type="examples" id="bg-stractium"}
::

## API 接口

| 属性名             | 类型     | 默认值 | 描述                                              |
| ------------------ | -------- | ------ | ------------------------------------------------- |
| `hue`              | `number` | `0`    | 分形纹理的基础色调（0–360 度）。                  |
| `saturation`       | `number` | `1`    | 颜色的饱和度（0–1）。                             |
| `brightness`       | `number` | `1`    | 输出颜色的亮度倍增因子（推荐范围 0–2）。          |
| `speed`            | `number` | `1`    | 纹理动画的速度倍数。                              |
| `mouseSensitivity` | `number` | `0.5`  | 控制纹理对鼠标移动响应的灵敏度（0–1）。           |
| `damping`          | `number` | `1`    | 阻尼系数，用于控制纹理变形的平滑程度（0–1）。     |
| `class`            | `string` | `—`    | 可选，容器 div 的附加 CSS 类（例如 z-index 等）。 |

> 💡 此组件适用于全屏或大型背景区块。它针对现代 GPU 进行了优化，但在低端设备上可能性能较差。

## 使用 CLI 安装

::InstallationCli{componentId="bg-stractium"}
::

## 手动安装

::CodeViewer{filename="StractiumBackground.vue" language="vue" componentName="StractiumBackground" type="ui" id="bg-stractium"}
::

## 特性

- **分形与有机视觉效果**：基于光线行进技术，创建复杂演化的分形纹理，模拟自然现象。
- **动态鼠标交互**：根据鼠标移动产生微妙的纹理变形与位移，增强沉浸感。
- **颜色控制**：可完全控制色调、饱和度、亮度和动画速度，以契合设计风格。
- **性能优化**：尽管效果复杂，该着色器已针对现代浏览器和 GPU 实时性能进行优化。
- **可扩展性强**：既可用于全屏背景，也可应用于小型模块，支持缩放与运动参数调整。
- **着色器驱动动画**：实时演化的分形效果，拥有流畅的过渡与动画表现。

## 注意事项

- 基于原作者在 ShaderToy 上发布的片段着色器（MIT 许可证）。
- 着色器使用光线行进技术生成高度精细的有机纹理，包含微妙光照与环境光遮蔽效果。
- 不推荐在低端设备上使用，因着色器复杂性可能导致性能下降。
- 最佳使用场景为全屏 hero 区块或大型设计区域。

## 致谢

- 嵌入为 Vue 组件，并通过 props 实现动态输入控制。
- 灵感来源于分形图案、自然纹理及高级光线行进技术。
