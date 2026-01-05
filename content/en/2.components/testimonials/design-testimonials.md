---
title: Design Testimonials
description: A premium, design-forward testimonial section featuring cinematic typography, magnetic parallax, word-by-word animations, and auto-cycling navigation.
category: Testimonials
tags: [css, tailwind, motion-v, testimonial, animation]
badge: New
---

::ComponentViewer{demoFile="DesignTestimonialsDemo.vue" config="DesignTestimonialsConfig" componentId="design-testimonials" :componentFiles='["DesignTestimonials.vue"]'}

#api

## API

| Prop Name      | Type                | Default          | Description                                                          |
| -------------- | ------------------- | ---------------- | -------------------------------------------------------------------- |
| `title`        | `string`            | `"Testimonials"` | Vertical label shown on the left side of the layout.                 |
| `duration`     | `number`            | `6000`           | Time (in ms) before automatically switching to the next testimonial. |
| `testimonials` | `TestimonialItem[]` | **required**     | List of testimonial entries to render and animate.                   |

### `TestimonialItem` Object

Each testimonial must follow this structure:

| Property  | Type     | Description                                              |
| --------- | -------- | -------------------------------------------------------- |
| `quote`   | `string` | The testimonial text, animated word-by-word.             |
| `author`  | `string` | Name of the testimonial author.                          |
| `role`    | `string` | Role or designation of the author.                       |
| `company` | `string` | Company or organization name (used in badge and ticker). |

#credits

- Animation powered by `motion-v`
- Ported from [Design Testimonials by Jatin Yadav](https://21st.dev/community/components/jatin-yadav05/design-testimonial/default)

::
