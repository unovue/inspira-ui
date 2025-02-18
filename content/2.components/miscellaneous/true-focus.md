---
title: True Focus
description: The real Focus！
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="TrueFocusDemo" type="examples" id="true-focus"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Examples

### Manual Mode And Other color

::ComponentLoader{label="Preview" componentName="TrueFocusManualModeDemo" type="examples" id="true-focus"}
::

## API

| Prop Name              | Type    | Default      | Description                                                 |
| ---------------------- | ------- | ------------ | ----------------------------------------------------------- |
| sentence               | string  | `True Focus` | The text to display with the focus animation.               |
| manualMode             | boolean | `false`      | Disables automatic animation when set to true.              |
| blurAmount             | number  | `5`          | The amount of blur applied to non-active words.             |
| borderColor            | string  | `green`      | The color of the focus borders.                             |
| animationDuration      | number  | `0.5`        | The duration of the animation for each word.                |
| pauseBetweenAnimations | number  | `1`          | Time to pause between focusing on each word (in auto mode). |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="TrueFocus.vue" language="vue" componentName="TrueFocus" type="ui" id="true-focus"}
::

## Credits

- Inspired by [reactbits](https://www.reactbits.dev/text-animations/true-focus).
- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
