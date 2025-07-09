---
title: 放大镜
description: A lens component to zoom into images, videos, or practically anything.
---

::ComponentLoader{label="预览" componentName="LensDemo" type="examples" id="lens"}
::

## 通过 CLI 安装

::InstallationCli{componentId="lens"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="Lens.vue" language="vue" componentName="Lens" type="ui" id="lens"}
:CodeViewerTab{label="Rays.vue" language="vue" componentName="Rays" type="examples" id="lens"}
:CodeViewerTab{label="Beams.vue" language="vue" componentName="Beams" type="examples" id="lens"}

::

## 示例

Lens are static in center

::ComponentLoader{label="预览" componentName="StaticLensDemo" type="examples" id="lens"}
::

## API

| Prop 名称    | 类型                       | 默认值               | 描述                                                                         |
| ------------ | -------------------------- | -------------------- | ---------------------------------------------------------------------------- |
| `zoomFactor` | `number`                   | `1.5`                | The magnification factor for the lens.                                       |
| `lensSize`   | `number`                   | `170`                | The diameter of the lens in pixels.                                          |
| `position`   | `{ x: number, y: number }` | `{ x: 200, y: 150 }` | The static position of the lens (when isStatic is true).                     |
| `isStatic`   | `boolean`                  | `false`              | If true, the lens stays in a fixed position; if false, it follows the mouse. |
| `hovering`   | `boolean`                  | `"false"`            | External control for the hover state.                                        |

## 功能特性

- **Slot Support**: Easily add any content inside the component using the default slot.

## 感谢

- Credits to [Aceternity UI](https://ui.aceternity.com/components/lens).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
