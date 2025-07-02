---
title: Glowing Effect
description: A dynamic proximity-based glow effect that reacts to mouse movements and scroll events, perfect for highlighting interactive elements.
---

::ComponentLoader{label="Preview" componentName="GlowingEffectDemo" type="examples" id="glowing-effect"}
::

## API

| Prop Name          | Type                   | Default     | Description                                                                                           |
| ------------------ | ---------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `blur`             | `number`               | `0`         | The blur radius applied to the glow layer.                                                            |
| `inactiveZone`     | `number`               | `0.7`       | Defines the inner radius (as a fraction of the smallest dimension) within which the glow is inactive. |
| `proximity`        | `number`               | `0`         | Additional proximity distance (in pixels) to trigger the glow when the cursor is near the element.    |
| `spread`           | `number`               | `20`        | Size of the spread of the glow effect around the element.                                             |
| `variant`          | `"default" \| "white"` | `"default"` | Variant of the glow style (e.g., a white-themed version).                                             |
| `glow`             | `boolean`              | `false`     | Controls the visibility of the static glow border.                                                    |
| `class`            | `string`               | `""`        | Additional CSS classes for custom styling.                                                            |
| `disabled`         | `boolean`              | `true`      | Disables the proximity detection and glow animations when `true`.                                     |
| `movementDuration` | `number`               | `2`         | Duration (in seconds) of the smooth rotation animation.                                               |
| `borderWidth`      | `number`               | `1`         | Width (in pixels) of the border applied to the glow effect.                                           |

## Install using CLI

::InstallationCli{componentId="glowing-effect"}
::

## Install Manually

You can copy and paste the following code to create this component:

::code-group

::CodeViewerTab{label="GlowingEffect.vue" language="vue" componentName="GlowingEffect" type="ui" id="glowing-effect"}
::

::

## Features

- **Proximity-Based Activation**: The glow effect is only active when the cursor is within a certain distance of the element.
- **Smooth Angle Animation**: Gradually animates rotation based on pointer movement for an appealing dynamic glow.
- **Configurable Glow Properties**: Fine-tune blur, spread, and proximity to achieve various visual effects.
- **Variant Support**: Choose between default or white glow styling.
- **Performance Optimizations**: Event listeners and animation frames are managed efficiently.

## Credits

- Ported from (Aceternity UI Glowing Effect)[https://ui.aceternity.com/components/glowing-effect]
