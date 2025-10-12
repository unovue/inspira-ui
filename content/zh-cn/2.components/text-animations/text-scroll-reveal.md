---
title: Text Scroll Reveal
description: A component that reveals text word by word as you scroll, with customizable text and styling.
---

::ComponentLoader{label="预览" componentName="TextScrollRevealDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## 通过 CLI 安装

::InstallationCli{componentId="text-scroll-reveal"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="TextScrollReveal.vue" language="vue" componentName="TextScrollReveal" type="ui" id="text-scroll-reveal"}
:CodeViewerTab{filename="ScrollWord.vue" language="vue" componentName="ScrollWord" type="ui" id="text-scroll-reveal"}
::

## API

| Prop 名称 | 类型     | 默认值 | 描述                                                                |
| --------- | -------- | ------ | ------------------------------------------------------------------- |
| `text`    | `string` | N/A    | The text content to display and reveal word by word during scroll.  |
| `class`   | `string` | `""`   | Additional CSS classes to apply to the component for customization. |

## 功能特性

- **Scroll-Activated Text Reveal**: The component reveals the provided text word by word as the user scrolls, creating an engaging visual effect.

- **Customizable Text Content**: Set the `text` prop to display any text content you wish to reveal during scroll.

- **Smooth Animations**: Each word's opacity transitions smoothly based on scroll position, providing a visually appealing experience.

- **Styling Flexibility**: Use the `class` prop to pass additional CSS classes for custom styling.

- **Reactive Design**: The component uses Vue's reactivity system to update the scroll progress and word visibility in real-time.

## 感谢

- Ported from [Magic UI Text Reveal](https://magicui.design/docs/components/text-reveal).
