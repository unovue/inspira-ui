---
title: Card Spotlight
description: A card component with a dynamic spotlight effect that follows the mouse cursor, enhancing visual interactivity.
---

::ComponentLoader{label="Preview" componentName="CardSpotlightDemo" type="examples"}  
::

## Install using CLI

::InstallationCli{componentId="card-spotlight"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="CardSpotlight.vue" language="vue" componentName="CardSpotlight" type="ui" id="card-spotlight"}
::

## API

| Prop Name         | Type     | Default     | Description                                                 |
| ----------------- | -------- | ----------- | ----------------------------------------------------------- |
| `gradientSize`    | `number` | `200`       | Radius in pixels of the spotlight effect.                   |
| `gradientColor`   | `string` | `'#262626'` | The color of the spotlight gradient.                        |
| `gradientOpacity` | `number` | `0.8`       | The opacity level of the spotlight gradient effect.         |
| `slotClass`       | `string` | `undefined` | Class to apply to the parent container containing the slot. |

## Features

- **Interactive Spotlight Effect**: Displays a dynamic spotlight that follows the user's mouse cursor, enhancing user engagement and visual appeal.

- **Customizable Appearance**: Easily adjust the `gradientSize`, `gradientColor`, and `gradientOpacity` props to tailor the spotlight effect to your design preferences.

- **Easy Integration**: Wrap any content within the `<CardSpotlight>` component to instantly add the spotlight effect without additional configuration.

- **Responsive Design**: The component adapts smoothly to different container sizes, ensuring a consistent experience across various devices and screen sizes.

- **Performance Optimized**: Utilizes Vue's reactivity for efficient updates, ensuring smooth animations without compromising application performance.

## Credits

- Inspired by Magic Card component from [Magic UI](https://magicui.design/docs/components/magic-card).
