---
title: Text Reveal
description: Animate text line-by-line using GSAP's SplitText for smooth word or line entrance effects.
---

::ComponentLoader{label="Preview" componentName="TextRevealDemo" type="examples" id="text-reveal"}
::

## API

| Prop Name        | Type     | Default | Description                                      |
| ---------------- | -------- | ------- | ------------------------------------------------ |
| `class`          | `string` | `-`     | Additional classes for the inner text container. |
| `containerClass` | `string` | `-`     | Additional classes for the outer container.      |
| `duration`       | `number` | `0.6`   | Animation duration for line reveal.              |
| `delay`          | `number` | `0.2`   | Initial delay before animation starts.           |
| `stagger`        | `number` | `0.1`   | Animation delay between each line reveal.        |

## Installation

This component depends on **GSAP** and **GSAP SplitText**.

::pm-install{name="gsap"}
::

## Install using CLI

::InstallationCli{componentId="text-reveal"}
::

## Install Manually

Copy and paste the following code:

::CodeViewer{filename="TextReveal.vue" language="vue" componentName="TextReveal" type="ui" id="text-reveal"}
::

## Features

- **Line-by-line animation**: Automatically splits and animates lines of text.
- **Staggered entry**: Smooth entrance with staggered reveal timing.
- **Scoped styling**: Ensures each line is masked for clean transitions.
- **Customizable timing**: Control animation duration and delay.

## Credits

- Powered by [GSAP](https://gsap.com/) and [GSAP SplitText](https://gsap.com/docs/v3/Plugins/SplitText/).
