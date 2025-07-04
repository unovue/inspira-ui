---
title: Animated Testimonials
description: An engaging and animated testimonial component showcasing user feedback with transitions and auto-play functionality.
---

::ComponentLoader{label="预览" componentName="AnimatedTestimonialsDemo" type="examples" id="animated-testimonials"}
::

## API

| Prop 名称      | 类型            | 默认值  | 描述                                                                                           |
| -------------- | --------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `testimonials` | `Testimonial[]` | `[]`    | An array of testimonial objects containing quote, name, image, and designation.                |
| `autoplay`     | `boolean`       | `false` | Whether to cycle through testimonials automatically.                                           |
| `duration`     | `number`        | `5000`  | Duration (in milliseconds) to wait before automatically transitioning to the next testimonial. |

### Testimonial Object

Each testimonial object must contain the following fields:

| Property      | 类型     | 描述                                                              |
| ------------- | -------- | ----------------------------------------------------------------- |
| `quote`       | `string` | The testimonial text.                                             |
| `name`        | `string` | The name of the person or entity providing the testimonial.       |
| `designation` | `string` | The position or role of the testimonial author (e.g., CEO, user). |
| `image`       | `string` | URL of the image or avatar for the testimonial author.            |

## 通过 CLI 安装

::InstallationCli{componentId="animated-testimonials"}
::

## 手动安装

You can 复制并粘贴以下代码： to create this component:

::CodeViewer{filename="AnimatedTestimonials.vue" language="vue" componentName="AnimatedTestimonials" type="ui" id="animated-testimonials"}
::

## 功能特性

- **Animated Slides**: Utilizes Motion-V to animate transitions between testimonials.
- **Auto-Play Support**: Automatically transitions to the next testimonial after a specified duration.
- **Random Rotation Effects**: Adds a subtle randomized rotation for each new slide.
- **Navigation Buttons**: Manually cycle through testimonials using previous and next controls.
- **Responsive and Modular**: Adapts well to different screen sizes, allowing easy integration into various layouts.

## 感谢

- Ported from (Aceternity UI Animated Testimonials)[https://ui.aceternity.com/components/animated-testimonials].
