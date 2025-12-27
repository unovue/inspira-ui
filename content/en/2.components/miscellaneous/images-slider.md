---
title: Images Slider
description: A full page slider with images that can be navigated with the keyboard.
category: Miscellaneous
tags: [css, tailwind, images, aceternity-ui]
---

::ComponentViewer{demoFile="ImagesSliderDemo.vue" config="ImagesSliderConfig" componentId="images-slider" :componentFiles='["ImagesSlider.vue"]'}

#api

## API

| Prop Name          | Type                       | Default                                           | Description                                                                    |
| ------------------ | -------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| `images`           | `string[]`                 | `[]`                                              | An array of image URLs to show in the slider.                                  |
| `hideOverlay`      | `boolean`                  | `false`                                           | Don't create an overlay for the image slider. Slot won't be rendered.          |
| `overlayClass`     | `string`                   | `''`                                              | A class string to be applied to the overlay container.                         |
| `imageClass`       | `string`                   | `'bg-cover bg-center bg-no-repeat'`               | Class string to apply to each of the images.                                   |
| `enterFromClass`   | `string`                   | `'scale-0 origin-center'`                         | Class string applied to the 'enter-from-class' prop on the image transition.   |
| `enterActiveClass` | `string`                   | `'transition-transform duration-300 ease-in-out'` | Class string applied to the 'enter-active-class' prop on the image transition. |
| `leaveActiveClass` | `string`                   | `'transition-transform duration-300 ease-in-out'` | Class string applied to the 'leave-active-class' prop on the image transition. |
| `autoplay`         | `boolean\|number`          | `false`                                           | Autoplay interval in ms, or `false` to disable.                                |
| `direction`        | `'vertical'\|'horizontal'` | `'vertical'`                                      | The axis on which the slider should operate.                                   |
| `perspective`      | `string`                   | `'1000px'`                                        | The perspective to apply to the slider container.                              |
| `modelValue`       | `number`                   | `0`                                               | Two-way binding for the current slide image index.                             |

#credits

- Component by [Craig Riley](https://github.com/craigrileyuk) for porting this component.
- Credits to [Aceternity UI](https://ui.aceternity.com/components/images-slider) for inspiring this component.

::
