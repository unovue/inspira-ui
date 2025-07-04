---
title: Sparkles
description: A configurable sparkles component that can be used as a background or as a standalone component.
---

::ComponentLoader{label="预览" componentName="SparklesDemo" type="examples" id="sparkles"}
::

## 通过 CLI 安装

::InstallationCli{componentId="sparkles"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="Sparkles.vue" language="vue" componentName="Sparkles" type="ui" id="sparkles"}
::

## 示例

Sparkles Full Page

::ComponentLoader{label="预览" componentName="SparklesFullPageDemo" type="examples" id="sparkles"}
::

## API

| Prop 名称         | 类型     | 默认值      | 描述                                                                                   |
| ----------------- | -------- | ----------- | -------------------------------------------------------------------------------------- |
| `background`      | `string` | `'#0d47a1'` | Background color of the container. Use 'transparent' to see through to parent element. |
| `particleColor`   | `string` | `'#ffffff'` | Color of the particles. Accepts any valid CSS color value.                             |
| `minSize`         | `number` | `1`         | Minimum size of particles in pixels.                                                   |
| `maxSize`         | `number` | `3`         | Maximum size of particles in pixels.                                                   |
| `speed`           | `number` | `4`         | Movement speed multiplier. Higher values create faster movement.                       |
| `particleDensity` | `number` | `120`       | Number of particles to render. Higher values create denser particle fields.            |

## 感谢

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Sparkles](https://ui.aceternity.com/components/sparkles).
