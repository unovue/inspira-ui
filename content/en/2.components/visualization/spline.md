---
title: Spline
description: A Vue wrapper component for the Spline 3D tool, providing events and auto-resizing.
category: Visualization
tags: [css, tailwind, spline]
---

::ComponentViewer{demoFile="SplineDemo.vue" config="SplineConfig" componentId="spline" :componentFiles='["Spline.vue", "ParentSize.vue"]' dependencies="@splinetool/runtime"}

#api

## API

| Prop Name        | Type       | Default     | Description                                                   |
| ---------------- | ---------- | ----------- | ------------------------------------------------------------- |
| `scene`          | `string`   | —           | The URL or path to the Spline scene file. **Required**.       |
| `onLoad`         | `Function` | `undefined` | Callback that fires when the Spline scene loads successfully. |
| `renderOnDemand` | `boolean`  | `true`      | Enables or disables Spline's render-on-demand optimization.   |
| `style`          | `object`   | `{}`        | Custom CSS style applied to the container of the canvas.      |

**Emits**

| Event Name           | Payload | Description                                                   |
| -------------------- | ------- | ------------------------------------------------------------- |
| `error`              | `Error` | Emits if there's an error while loading the Spline scene.     |
| `spline-mouse-down`  | `any`   | Emits when a mouseDown event is detected in the Spline scene. |
| `spline-mouse-up`    | `any`   | Emits when a mouseUp event is detected in the Spline scene.   |
| `spline-mouse-hover` | `any`   | Emits when the mouseHover event is triggered.                 |
| `spline-key-down`    | `any`   | Emits on keyDown within the Spline scene.                     |
| `spline-key-up`      | `any`   | Emits on keyUp within the Spline scene.                       |
| `spline-start`       | `any`   | Emits when the Spline scene starts.                           |
| `spline-look-at`     | `any`   | Emits when a lookAt event occurs.                             |
| `spline-follow`      | `any`   | Emits when a follow event occurs.                             |
| `spline-scroll`      | `any`   | Emits on scroll interactions.                                 |

#credits

- Utilizes Spline’s runtime behind the scenes.
- Inspired by various 3D web experiences using Spline.

::
