---
title: Glowing Effect
description: A dynamic proximity-based glow effect that reacts to mouse movements and scroll events, perfect for highlighting interactive elements.
category: Special Effects
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="GlowingEffectDemo.vue" config="GlowingEffectConfig" componentId="glowing-effect" :componentFiles='["GlowingEffect.vue"]'}

#api

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

#credits

- Ported from (Aceternity UI Glowing Effect)[https://ui.aceternity.com/components/glowing-effect]

::
