---
title: Tracing Beam
description: A component that renders a tracing beam effect with dynamic scrolling animations and gradient strokes.
---

::ComponentLoader{label="Preview" componentName="TracingBeamDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="tracing-beam"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="TracingBeam.vue" language="vue" componentName="TracingBeam" type="ui" id="tracing-beam"}
::

## API

| Prop Name | Type     | Default | Description                                |
| --------- | -------- | ------- | ------------------------------------------ |
| `class`   | `string` | `""`    | Additional CSS classes for custom styling. |

## Features

- **Dynamic Tracing Beam**: Renders a gradient tracing beam that follows the scroll position, adding a modern visual effect.
- **Scroll-Based Animation**: As the user scrolls, the beam animates along a path with varying gradients, responding to scroll depth.
- **Gradient Transition**: Smoothly transitions colors along the beam from cyan to purple with fading edges for a subtle effect.
- **Slot-Based Content**: Supports a default slot to add content inside the tracing beam container.

## Credits

- Ported from [Aceternity UI](https://ui.aceternity.com/components/tracing-beam);
