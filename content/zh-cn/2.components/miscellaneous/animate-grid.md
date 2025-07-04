---
title: Animate Grid
description: Skew Animation grid with box shadow.
---

::ComponentLoader{label="预览" componentName="AnimateGridDemo" type="examples" id="animate-grid"}
::

## 通过 CLI 安装

::InstallationCli{componentId="animate-grid"}
::

## 手动安装

::steps{level=4}

复制并粘贴以下代码：

::CodeViewer{filename="AnimateGrid.vue" language="vue" componentName="AnimateGrid" type="ui" id="animate-grid"}
::

#### Add SVG file

Add at least one SVG file to the same folder as your component and update the import in your component to use it

::

## API

| Prop 名称            | 类型     | 默认值              | 描述                                                |
| -------------------- | -------- | ------------------- | --------------------------------------------------- |
| `textGlowStartColor` | `string` | `"#38ef7d80"`       | Color of the box shadow start.                      |
| `textGlowEndColor`   | `string` | `"#38ef7d"`         | Color of the box shadow end.                        |
| `perspective`        | `number` | `600`               | You can pass perspective to transform CSS property. |
| `rotateX`            | `number` | `-1`                | You can pass rotateX to transform CSS property.     |
| `rotateY`            | `number` | `-15`               | You can pass rotateY to transform CSS property.     |
| `cards`              | `[]`     | `"[{logo: 'src'}]"` | Cards to display in grid.                           |
| `class`              | `string` | `""`                | Additional tailwind CSS classes for custom styling. |

## 功能特性

- **Slot-Based Content**: Supports a default slot to add content inside the Animate Grid container.

## 感谢

- Thanks to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for providing this component.
