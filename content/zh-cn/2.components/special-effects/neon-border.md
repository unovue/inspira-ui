---
title: Neon Border
description: A visually appealing neon border component with customizable animations and colors.
---

::ComponentLoader{label="预览" componentName="NeonBorderDemo" type="examples" id="neon-border"}
::

## API

| Prop 名称       | 类型                         | 默认值      | 描述                                            |
| --------------- | ---------------------------- | ----------- | ----------------------------------------------- |
| `color1`        | `string`                     | `"#0496ff"` | Primary color of the neon border.               |
| `color2`        | `string`                     | `"#ff0a54"` | Secondary color of the neon border.             |
| `animationType` | `"none" \| "half" \| "full"` | `"half"`    | 类型 of animation effect applied to the border. |
| `duration`      | `number`                     | `6`         | Duration of the animation effect in seconds.    |
| `class`         | `string`                     | `""`        | Additional CSS classes for styling.             |

## Installation

::alert
Add following entry to inline theme in your `main.css` file.

```css
@theme inline {
  --animate-neon-border: neon-border var(--neon-border-duration) linear infinite;
  @keyframes neon-border {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
```

::

## 通过 CLI 安装

::InstallationCli{componentId="neon-border"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group
::CodeViewerTab{label="NeonBorder.vue" language="vue" componentName="NeonBorder" type="ui" id="neon-border"}
::
::

## 功能特性

- **Customizable Colors**: Allows setting primary and secondary neon colors.
- **Three Animation Modes**: Supports `none`, `half`, and `full` animation effects.
- **Adjustable Animation Duration**: Duration can be fine-tuned for different effects.
- **Reactive Design**: Uses Vue’s reactivity system for dynamic updates.
- **Scoped Styles**: Ensures styles do not interfere with other components.

## 感谢

- Inspired by modern neon border effects.
