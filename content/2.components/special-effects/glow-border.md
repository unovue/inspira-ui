---
title: Glow Border
description: An animated border effect.
---

::ComponentLoader{label="Preview" componentName="GlowBorderDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Installation

::alert
Add following entry to inline theme in your `main.css` file.

```css
@theme inline {
  --animate-glow: glow var(--duration) infinite linear;
  @keyframes glow {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
}
```

::

## Install using CLI

::InstallationCli{componentId="glow-border"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="GlowBorder.vue" language="vue" componentName="GlowBorder" type="ui" id="glow-border"}
::

## API

| Prop Name      | Type                 | Default | Description                                                |
| -------------- | -------------------- | ------- | ---------------------------------------------------------- |
| `duration`     | `number`             | `10`    | Duration of the glowing border animation.                  |
| `color`        | `string \| string[]` | `#FFF`  | Color or array of colors to applied on the glowing border. |
| `borderRadius` | `number`             | `10`    | Radius of the border.                                      |
| `borderWidth`  | `number`             | `2`     | Width of the border.                                       |

## Credits

- Credits to [Magic UI](https://magicui.design/docs/components/shine-border) for this fantastic component.
