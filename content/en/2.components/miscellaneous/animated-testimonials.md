---
title: Animated Testimonials
description: An engaging and animated testimonial component showcasing user feedback with transitions and auto-play functionality.
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="AnimatedTestimonialsDemo.vue" config="AnimatedTestimonialsConfig" componentId="animated-testimonials" :componentFiles='["AnimatedTestimonials.vue"]'}

#api

## API

| Prop Name      | Type            | Default | Description                                                                                    |
| -------------- | --------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `testimonials` | `Testimonial[]` | `[]`    | An array of testimonial objects containing quote, name, image, and designation.                |
| `autoplay`     | `boolean`       | `false` | Whether to cycle through testimonials automatically.                                           |
| `duration`     | `number`        | `5000`  | Duration (in milliseconds) to wait before automatically transitioning to the next testimonial. |

### Testimonial Object

Each testimonial object must contain the following fields:

| Property      | Type     | Description                                                       |
| ------------- | -------- | ----------------------------------------------------------------- |
| `quote`       | `string` | The testimonial text.                                             |
| `name`        | `string` | The name of the person or entity providing the testimonial.       |
| `designation` | `string` | The position or role of the testimonial author (e.g., CEO, user). |
| `image`       | `string` | URL of the image or avatar for the testimonial author.            |

#credits

- Ported from (Aceternity UI Animated Testimonials)[https://ui.aceternity.com/components/animated-testimonials].

::
