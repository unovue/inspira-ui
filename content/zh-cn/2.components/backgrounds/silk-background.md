---
title: 丝绸背景
description: 一个由着色器驱动的柔和流动背景，灵感来自丝绸布料的运动与质感，使用 ShaderToy 渲染。
navBadges:
  - value: 新
    type: lime
---

::ComponentLoader{label="预览" componentName="SilkBackgroundDemo" type="examples" id="bg-silk"}
::

## API 接口

| 属性名       | 类型     | 默认值 | 描述                                              |
| ------------ | -------- | ------ | ------------------------------------------------- |
| `hue`        | `number` | `300`  | 丝绸纹理的基础色调（单位为度，范围 0–360）。      |
| `saturation` | `number` | `0.5`  | 颜色的饱和度（范围 0–1）。                        |
| `brightness` | `number` | `1`    | 输出颜色的亮度倍增因子（推荐范围 0–2）。          |
| `speed`      | `number` | `1`    | 控制动画速度的倍数（例如 `2` 表示两倍速）。       |
| `class`      | `string` | `—`    | 可选，容器 div 的额外 CSS 类（例如 z-index 等）。 |

> 💡 此组件默认使用全屏绝对定位容器。你可以通过 `class` 属性自定义位置或层级。

## 使用 CLI 安装

::InstallationCli{componentId="bg-silk"}
::

## 手动安装

::CodeViewer{filename="SilkBackground.vue" language="vue" componentName="SilkBackground" type="ui" id="bg-silk"}
::

## 特性

- **着色器驱动的丝绸效果**：基于片段着色器，使用递归三角函数和噪声模拟柔软丝绸的运动。
- **实时动画**：在 GPU 上运行，具有流畅的过渡和自然波动。
- **交互响应**：当鼠标光标活动时，具有微妙的视差和扭曲效果。
- **自定义颜色控制**：通过属性调整色调、饱和度、亮度和动画速度。
- **轻量高性能**：优化的 GLSL 逻辑，适用于现代 GPU 和浏览器。
- **模块化设计**：将 GLSL 着色器嵌入 `ShaderToy` 包装组件中，便于复用。

## 注意事项

- 改编自 [这个 ShaderToy 着色器](https://www.shadertoy.com/view/X3yXRd)，由 Giorgi Azmaipharashvili 创作（MIT 许可证）。
- 主要用于装饰性用途，例如全屏英雄背景或分割区块。
- 着色器结合了正弦波函数、噪声层和基于距离的扭曲。
- 由于对 GPU 要求较高，不推荐在低端设备上使用。

## 致谢

- 嵌入到 Vue 组件中，并根据传入属性实现动态输入。
- 灵感来自丝绸质感与有机材质中的流动运动模式。
