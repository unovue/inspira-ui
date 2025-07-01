---
title: Testimonial Slider
description: A lightweight testimonial slider with image rotation, text transitions, and optional auto‑rotation.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="TestimonialSliderDemo" type="examples" id="testimonial-slider"}
::

## API

| Prop Name      | Type                                                                | Default | Description                                                            |
| -------------- | ------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------- |
| `testimonials` | `Array<{ img: string; quote: string; name: string; role: string }>` | `[]`    | Array of testimonial objects displayed by the slider.                  |
| `autoRotate`   | `boolean`                                                           | `true`  | If `true`, the slider advances automatically every `duration` seconds. |
| `duration`     | `number`                                                            | `5`     | Interval in seconds between slides when auto‑rotation is enabled.      |

## Install using CLI

::InstallationCli{componentId="spinning-text"}
::

## Install Manually

You can copy and paste the following code to create this component:

::code-group

::CodeViewerTab{label="TestimonialSlider.vue" language="vue" componentName="TestimonialSlider" type="ui" id="testimonial-slider"}
::

::

## Features

- **Avatar & Quote Pairing** — Images animate with a subtle rotation while quotes fade/slide in.
- **Auto‑Rotation** — Enable continuous cycling with the `autoRotate` prop.
- **Height Fix Utility** — Ensures the container height remains stable during transitions.
- **Manual Navigation** — Prev / next arrow buttons for user control.
- **CSS‑Driven Animations** — Uses Vue `<transition-group>` and custom CSS for smooth effects, no extra libraries required.
- **Fully Responsive** — Adjusts gracefully across screen sizes.
