---
title: Infinite Moving Cards
description: A customizable group of cards that move infinitely in a loop. Made with Framer Motion and Tailwind CSS.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="InfiniteMovingCardsDemo" type="examples" id="infinite-moving-cards"}
::

## API

| Prop Name      | Type                                                | Default  | Description                                                      |
| -------------- | --------------------------------------------------- | -------- | ---------------------------------------------------------------- |
| `items`        | `{ quote: string; name: string; title: string; }[]` | `-`      | An array of objects, each containing a quote, name, and title.   |
| `direction`    | `"left" \| "right"`                                 | `"left"` | The direction of the animation.                                  |
| `speed`        | `"fast" \| "normal" \| "slow"`                      | `"fast"` | The speed of the animation.                                      |
| `pauseOnHover` | `boolean`                                           | `true`   | If true, the animation will pause when the mouse hovers over it. |
| `class`        | `string`                                            | `-`      | Optional additional CSS classes to apply to the component.       |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="InfiniteMovingCards.vue" language="vue" componentName="InfiniteMovingCards" type="ui" id="infinite-moving-cards"}
::

## Credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
- Inspired from [Aceternity UI](https://ui.aceternity.com/components/infinite-moving-cards).
