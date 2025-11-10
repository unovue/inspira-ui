---
title: Ripple Button
description: A stylish ripple button component with customizable colors and animation duration.
category: Button
tags: [css, tailwind, button, magic-ui]
---

::ComponentViewer{demoFile="RippleButtonDemo.vue" config="RippleButtonConfig" componentId="ripple-button" :componentFiles='["RippleButton.vue"]'}

#api

## API

| Prop Name     | Type     | Default     | Description                                       |
| ------------- | -------- | ----------- | ------------------------------------------------- |
| `class`       | `string` | -           | Additional CSS classes for custom styling.        |
| `rippleColor` | `string` | `"#ADD8E6"` | Color of the ripple effect.                       |
| `duration`    | `number` | `600`       | Duration of the ripple animation in milliseconds. |

## Emits

| Event Name | Type    | Description |
| ---------- | ------- | ----------- |
| `click`    | `event` | Click event |

#credits

- Inspired by [Magic UI's Ripple Button](https://magicui.design/docs/components/ripple-button) component.
- Credits to [kalix127](https://github.com/kalix127) for porting this component.

::
