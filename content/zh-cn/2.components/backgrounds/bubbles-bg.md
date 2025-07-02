---
title: Bubbles Background
description: An animated background with floating bubbles.
---

::ComponentLoader{label="Preview" componentName="BubblesBgDemo2" type="examples" id="backgrounds"}
::

::alert{type="info"}
**Note:** This component uses Three.js & requires `three` npm package as a dependency.
::

## Install using CLI

::InstallationCli{componentId="bubbles-bg"}
::

## Install Manually

::steps{level=4}

#### Install the dependencies

::code-group

```bash [npm]
npm install three
npm install -D @types/three
```

```bash [pnpm]
pnpm install three
pnpm install -D @types/three
```

```bash [bun]
bun add three
bun add -d @types/three
```

```bash [yarn]
yarn add three
yarn add --dev @types/three
```

::

Copy and paste the following code

::CodeViewer{filename="BubblesBg.vue" language="vue" componentName="BubblesBg" type="ui" id="bg-bubbles"}  
::
::

## Example

Without Blur or overlay

::ComponentLoader{label="Preview" componentName="BubblesBgDemo" type="examples" id="backgrounds"}
::

## API

| Prop Name | Type     | Default | Description                                                     |
| --------- | -------- | ------- | --------------------------------------------------------------- |
| `blur`    | `number` | `0`     | Amount of blur to apply to the background, specified in pixels. |

## Features

- **Animated Bubble Background**: Renders a captivating background with animated, floating bubbles using 3D graphics.

- **Dynamic Color Gradients**: The bubbles and background smoothly transition between colors over time, creating a visually engaging effect.

- **Customizable Blur Effect**: Use the `blur` prop to adjust the blur intensity applied over the background, enhancing depth perception.

- **Slot Support**: Easily overlay content on top of the animated background using the default slot.

- **Responsive Design**: The component adjusts to fit the width and height of its parent container, ensuring compatibility across different screen sizes.

## Credits

- Built with the [Three.js](https://threejs.org/) library for 3D rendering and animations.
- Inspired from [Tresjs Experiment](https://lab.tresjs.org/experiments/overlay).
