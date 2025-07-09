---
title: 走马灯
description: A customizable scrolling component that loops its content horizontally or vertically, with configurable direction, hover pause, and repeat options.
---

::ComponentLoader{label="预览" componentName="MarqueeDemo" type="examples" id="marquee"}  
::

## 通过 CLI 安装

::InstallationCli{componentId="marquee"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="Marquee.vue" language="vue" componentName="Marquee" type="ui" id="marquee"}
:CodeViewerTab{label="ReviewCard.vue" language="vue" componentName="ReviewCard" type="examples" id="marquee"}

::

## API

| Prop 名称      | 类型      | 默认值  | 描述                                                                      |
| -------------- | --------- | ------- | ------------------------------------------------------------------------- |
| `class`        | `string`  | `''`    | Custom CSS classes to apply to the outermost container of the marquee.    |
| `reverse`      | `boolean` | `false` | Sets the scrolling direction to reverse (right to left or bottom to top). |
| `pauseOnHover` | `boolean` | `false` | Pauses the marquee animation when hovered.                                |
| `vertical`     | `boolean` | `false` | Sets the scrolling direction to vertical instead of horizontal.           |
| `repeat`       | `number`  | `4`     | Number of times the content inside the marquee should be repeated.        |

## 功能特性

- **Horizontal & Vertical Scrolling**: You can scroll the content horizontally (default) or vertically with the `vertical` prop.
- **Reverse Direction**: Enable reverse scrolling for dynamic effects using the `reverse` prop.
- **Pause on Hover**: Pauses the scrolling animation when the user hovers over the marquee.
- **Content Repetition**: The `repeat` prop controls how many times the content inside the marquee will loop.
- **Custom Duration and Gap**: You can control the animation duration and gap between the repeated items using CSS variables `--duration` and `--gap`.

## CSS Variables

You can customize the speed and gap between the items by setting the following CSS variables:

- **`--duration`**: Controls the speed of the marquee animation.
- **`--gap`**: Sets the space between repeated items in the marquee.

## 功能特性

- **Fully Customizable**: Easily adjust the duration, gap, direction, and hover behavior to suit your needs.
- **Smooth Transitions**: The component uses CSS keyframes to achieve smooth scrolling and transitions.
- **Multi-Directional**: Scroll content either horizontally or vertically with a simple prop change.
- **Content Flexibility**: Place any Vue components or HTML elements inside the marquee slot for dynamic content scrolling.

## 感谢

- Inspired by [Magic UI](https://magicui.design/docs/components/marquee).
