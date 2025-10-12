---
title: Shader Toy 预览器
description: 一个强大且灵活的组件，可在浏览器中渲染来自 ShaderToy 的交互式 GLSL 着色器。
---

::ComponentLoader{label="预览" componentName="ShaderToyDemo" type="examples" id="shader-toy"}
::

## API

| 属性名       | 类型                 | 默认值    | 描述                                    |
| ------------ | -------------------- | --------- | --------------------------------------- |
| `shaderCode` | `string`             | `-`       | 来自 ShaderToy 的 GLSL 片段着色器源码。 |
| `mouseMode`  | `'click' \| 'hover'` | `'click'` | 鼠标跟踪模式：点击触发或持续悬停触发。  |
| `hue`        | `number`             | `0`       | 调整着色器输出的色相（Hue）。           |
| `saturation` | `number`             | `1`       | 调整着色器输出的饱和度（Saturation）。  |
| `brightness` | `number`             | `1`       | 调整着色器输出的亮度（Brightness）。    |
| `speed`      | `number`             | `1`       |                                         |
| `class`      | `string`             | `-`       | 应用于容器的自定义类名。                |

## 安装

请确保在项目中安装并引入 `ogl`（用于渲染）。

::pm-install{name="ogl"}
::

## 使用 CLI 安装

::InstallationCli{componentId="shader-toy"}
::

## 手动安装

复制并粘贴以下代码：

::code-group
::CodeViewerTab{filename="ShaderToy.vue" language="vue" componentName="ShaderToy" type="ui" id="shader-toy"}
::
::CodeViewerTab{filename="InspiraShaderToy.ts" language="typescript" icon="vscode-icons:file-type-typescript" componentName="InspiraShaderToy" type="ui" id="shader-toy" extension="ts"}
::
::

## 功能特性

- **兼容 ShaderToy**：支持 ShaderToy 风格的 `mainImage`、`iTime`、`iResolution`、`iMouse` 等变量。
- **GLSL 着色器渲染**：支持完整的 ShaderToy 式片段着色器渲染。
- **iMouse 交互支持**：支持实时鼠标交互（点击或悬停）。
- **HSV 颜色控制**：动态调整着色器的色相、饱和度和亮度。
- **响应式设计**：画布尺寸会随容器大小自动调整。
- **运行时控制**：支持动态播放、暂停和重置着色器。

## 注意事项

- 将 ShaderToy 风格的着色器封装并转换为适用于 WebGL2 环境。
- 颜色控制（`hue`、`saturation`、`brightness`）通过后处理步骤实现 HSV 调整效果。

## 致谢

- 基于 [OGL](https://github.com/oframe/ogl) 构建。
- 灵感来源于 [Shadertoy](https://shadertoy.com/)，并进行了 Vue 兼容性适配。
