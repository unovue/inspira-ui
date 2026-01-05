---
title: Testimonial Slider
description: A lightweight testimonial slider with image rotation, text transitions, and optional auto‑rotation.
category: Testimonials
tags: [css, tailwind, testimonial]
---

::ComponentViewer{demoFile="TestimonialSliderDemo.vue" config="TestimonialSliderConfig" componentId="testimonial-slider" :componentFiles='["TestimonialSlider.vue"]'}

#api

## API

| Prop Name      | Type                                                                | Default | Description                                                            |
| -------------- | ------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------- |
| `testimonials` | `Array<{ img: string; quote: string; name: string; role: string }>` | `[]`    | Array of testimonial objects displayed by the slider.                  |
| `autoRotate`   | `boolean`                                                           | `true`  | If `true`, the slider advances automatically every `duration` seconds. |
| `duration`     | `number`                                                            | `5`     | Interval in seconds between slides when auto‑rotation is enabled.      |

::
