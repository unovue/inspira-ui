---
title: Input
description: A versatile and visually dynamic input field with radial hover effects, styled for modern web applications.
---

::ComponentLoader{label="Preview" componentName="InputDemo" type="examples" id="input"}
::

## 使用 CLI 安装

::InstallationCli{componentId="input"}
::

## 手动安装

复制并粘贴以下代码

::CodeViewer{filename="IInput.vue" language="vue" componentName="IInput" type="ui" id="input"}
::

## API

| Prop Name        | 类型                | 默认值 | 说明                                                        |
| ---------------- | ------------------- | ------ | ----------------------------------------------------------- |
| `defaultValue`   | `string  \| number` | `""`   | Default value of the input field.                           |
| `class`          | `string`            | `""`   | Additional CSS classes for custom styling.                  |
| `containerClass` | `string`            | `""`   | Additional CSS classes for custom styling of the container. |

## Features

- **Radial Hover Effect**: Displays a dynamic radial gradient background that follows mouse movements when hovering over the input container.
- **Two-Way Binding**: Supports `v-model` for seamless integration with Vue's two-way data binding.
- **Dark Mode Compatibility**: Automatically adapts to dark mode styles using Tailwind's `dark:` utilities.
- **Customizable Styles**: Easily extend or override styles using the `class` prop.
- **Accessible Focus Ring**: Includes focus-visible styles for enhanced accessibility and usability.
- **Responsive Design**: Works well across different screen sizes and devices.

## Styles

This component inherits base styles from ShadCN Vue’s Input component and applies additional functionality, including hover effects and shadow styling.

## 致谢

- Built on ShadCN Vue's Input component foundation, with extended functionality for modern UI/UX needs.
- Ported from [Aceternity UI's Signup Form Input Component](https://ui.aceternity.com/components/signup-form)
