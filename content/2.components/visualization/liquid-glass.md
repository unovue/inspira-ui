---
title: Liquid Glass Effect
description: A visually striking glassmorphism effect using SVG displacement filters similar to Apple Liquid Glass.
---

::ComponentLoader{label="Preview" componentName="LiquidGlassDemo" type="examples" id="liquid-glass"}
::

## API

| Prop Name        | Type                | Default        | Description                                                                             |
| ---------------- | ------------------- | -------------- | --------------------------------------------------------------------------------------- |
| `radius`         | `number`            | `16`           | Border radius for the glass container corners (in pixels).                              |
| `border`         | `number`            | `0.07`         | Relative border thickness affecting displacement filter inner margin.                   |
| `lightness`      | `number`            | `50`           | Lightness (0-100) of the overlay color in HSL scale.                                    |
| `blend`          | `string`            | `"difference"` | CSS blend mode used between red and blue displacement layers for the distortion effect. |
| `xChannel`       | `"R" \| "G" \| "B"` | `"R"`          | Channel from displacement image to use for horizontal displacement.                     |
| `yChannel`       | `"R" \| "G" \| "B"` | `"B"`          | Channel from displacement image to use for vertical displacement.                       |
| `alpha`          | `number`            | `0.93`         | Alpha transparency of the overlay color (0-1).                                          |
| `blur`           | `number`            | `11`           | Gaussian blur radius applied to the overlay.                                            |
| `rOffset`        | `number`            | `0`            | Additional scale offset for red displacement map.                                       |
| `gOffset`        | `number`            | `10`           | Additional scale offset for green displacement map.                                     |
| `bOffset`        | `number`            | `20`           | Additional scale offset for blue displacement map.                                      |
| `scale`          | `number`            | `-180`         | Base scale factor for displacement effects, combined with individual channel offsets.   |
| `frost`          | `number`            | `0.05`         | Opacity factor controlling the frosted glass background overlay strength.               |
| `class`          | `string`            | `""`           | Additional CSS classes applied to the inner slot container wrapping content.            |
| `containerClass` | `string`            | `""`           | Additional CSS classes applied to the outer container div.                              |

## Installation

::alert{type="warning"}
This component uses SVG filters, for backdrop blur. These are not supported in Safari and have very limited support in Firefox.

It is recommended to use this component when you are targeting Chromium based browsers, and use a fallback component in case user is on Safari or Firefox.

For example, Inspira UI landing page, uses Liquid Glass component on Chromium based browsers but fallback to Frosted Glass effect on Safari and Mozilla.
::

## Install using CLI

::InstallationCli{componentId="liquid-glass"}
::

## Install Manually

Copy and paste the following code:

::code-group
::CodeViewerTab{filename="LiquidGlass.vue" language="vue" componentName="LiquidGlass" type="ui" id="liquid-glass"}
::
::

## Features

- **Customizable glass effect**: Control blur, displacement, color channels, and blend modes for a unique glass morphism style.
- **Responsive SVG displacement filter**: Dynamically adjusts to container size changes using ResizeObserver.
- **Multi-channel displacement**: Applies independent displacement maps for red, green, and blue channels for rich distortion.
- **Backdrop-filter integration**: Uses CSS backdrop-filter for real-time background blurring with filter fallback.
- **Scoped styling**: Encapsulated styles prevent bleed and ensure smooth border-radius and shadows.
- **Flexible content wrapper**: Slot container for any nested content with custom class support.

## Credits

- Inspired by Apple Liquid Glass.
