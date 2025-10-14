---
title: Spinning Text
description: The Spinning Text component animates text in a circular motion with customizable speed, direction, color, and transitions for dynamic and engaging effects.
---

::ComponentLoader{label="Preview" componentName="SpinningTextDemo" type="examples" id="spinning-text"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Examples

reverse

::ComponentLoader{label="Preview" componentName="SpinningTextDemoReverse" type="examples" id="spinning-text"}
::

## API

| Prop Name    | Type                                                    | Default | Description                                             |
| ------------ | ------------------------------------------------------- | ------- | ------------------------------------------------------- |
| `duration`   | `number`                                                | `10`    | The duration of the full circular rotation animation.   |
| `reverse`    | `boolean`                                               | `false` | Determines if the animation should rotate in reverse.   |
| `radius`     | `number`                                                | `5`     | The radius of the circular path for the text animation. |
| `transition` | `motion-v Transition`                                   | ``      | Custom transition effects for the animation.            |
| `variants`   | `{container: motion-v Variant, item: motion-v Variant}` | ``      | Variants for container and item animations.             |
| `class`      | `string`                                                | `""`    | A custom class name for the text container.             |

## Install using CLI

::InstallationCli{componentId="spinning-text"}
::

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="SpinningText.vue" language="vue" componentName="SpinningText" type="ui" id="spinning-text"}
::

## Credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Magic UI Spinning Text](https://magicui.design/docs/components/spinning-text).
