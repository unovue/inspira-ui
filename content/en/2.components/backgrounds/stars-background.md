---
title: Stars Background
description: A parallax-animated starfield background using layered motion and randomized star positions.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="StarsBackgroundDemo" type="examples" id="bg-stars"}
::

## API

| Prop Name    | Type            | Default                          | Description                                                             |
| ------------ | --------------- | -------------------------------- | ----------------------------------------------------------------------- |
| `factor`     | `number`        | `0.05`                           | Multiplier for mouse parallax movement.                                 |
| `speed`      | `number`        | `50`                             | Base speed (in seconds) for vertical looping animation of star layers.  |
| `transition` | `SpringOptions` | `{ stiffness: 50, damping: 20 }` | Spring physics config for smooth motion response to cursor movement.    |
| `starColor`  | `string`        | `"#fff"`                         | Color of the stars. Accepts any valid CSS color value.                  |
| `class`      | `string`        | `—`                              | Optional additional classes for container div. Useful for z-index, etc. |

> 💡 This component wraps a slot for children, so you can place other UI elements over the background.

## Install using CLI

::InstallationCli{componentId="bg-stars"}
::

## Install Manually

::CodeViewer{filename="StarsBackground.vue" language="vue" componentName="StarsBackground" type="ui" id="bg-stars"}
::

## Features

- **Animated starfield**: Renders three independently scrolling layers of stars with varying sizes and density.
- **Parallax effect**: Responds to mouse movement with smooth spring physics, adding depth and realism.
- **Customizable star density**: Each layer uses a different number of stars for natural variation.
- **Slot support**: Acts as a visual container, allowing foreground UI or content to be layered on top.
- **Responsive**

## Credits

- Ported from [Animate UI](https://animate-ui.com/docs/backgrounds/stars)
