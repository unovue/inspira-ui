---
title: Animated Testimonials
description: An engaging and animated testimonial component showcasing user feedback with transitions and auto-play functionality.
---

::ComponentLoader{label="Preview" componentName="AnimatedTestimonialsDemo" type="examples" id="animated-testimonials"}
::

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

## Install using CLI

::InstallationCli{componentId="animated-testimonials"}
::

## Install Manually

You can copy and paste the following code to create this component:

::CodeViewer{filename="AnimatedTestimonials.vue" language="vue" componentName="AnimatedTestimonials" type="ui" id="animated-testimonials"}
::

## Features

- **Animated Slides**: Utilizes Motion-V to animate transitions between testimonials.
- **Auto-Play Support**: Automatically transitions to the next testimonial after a specified duration.
- **Random Rotation Effects**: Adds a subtle randomized rotation for each new slide.
- **Navigation Buttons**: Manually cycle through testimonials using previous and next controls.
- **Responsive and Modular**: Adapts well to different screen sizes, allowing easy integration into various layouts.

## Credits

- Ported from (Aceternity UI Animated Testimonials)[https://ui.aceternity.com/components/animated-testimonials].
