---
title: Text Scroll Reveal
description: A component that reveals text word by word as you scroll, with customizable text and styling.
---

::ComponentLoader{label="Preview" componentName="TextScrollRevealDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Install using CLI

::InstallationCli{componentId="text-scroll-reveal"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="TextScrollReveal.vue" language="vue" componentName="TextScrollReveal" type="ui" id="text-scroll-reveal"}
:CodeViewerTab{filename="ScrollWord.vue" language="vue" componentName="ScrollWord" type="ui" id="text-scroll-reveal"}
::

## API

| Prop Name | Type     | Default | Description                                                         |
| --------- | -------- | ------- | ------------------------------------------------------------------- |
| `text`    | `string` | N/A     | The text content to display and reveal word by word during scroll.  |
| `class`   | `string` | `""`    | Additional CSS classes to apply to the component for customization. |

## Features

- **Scroll-Activated Text Reveal**: The component reveals the provided text word by word as the user scrolls, creating an engaging visual effect.

- **Customizable Text Content**: Set the `text` prop to display any text content you wish to reveal during scroll.

- **Smooth Animations**: Each word's opacity transitions smoothly based on scroll position, providing a visually appealing experience.

- **Styling Flexibility**: Use the `class` prop to pass additional CSS classes for custom styling.

- **Reactive Design**: The component uses Vue's reactivity system to update the scroll progress and word visibility in real-time.

## Credits

- Ported from [Magic UI Text Reveal](https://magicui.design/docs/components/text-reveal).
