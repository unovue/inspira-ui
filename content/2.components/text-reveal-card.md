---
title: Text Reveal Card
description: Mousemove effect to reveal text content at the bottom of the card.
---

::ComponentLoader{label="Preview" componentName="TextRevealDemo" type="examples"}  
::

## API

| Prop Name  | Type     | Description                                                      |
| ---------- | -------- | ---------------------------------------------------------------- |
| class      | `String` | Additional classes to be added to the card.                      |
| starsCount | `Number` | Control the number of stars that are generated                   |
| starsClass | `String` | Additional classes to be added to the stars floating on content. |

| Slot Name  | Description                                             |
| ---------- | ------------------------------------------------------- |
| header     | `String`                                                |
| text       | Display default text when the card is not hovered over. |
| revealText | Text to be revealed when hovered over the card.         |

## Component Code

You can copy and paste the following code to create these components:

::code-group

    ::CodeViewerTab{label="TextRevealCard.vue" language="vue" componentName="TextRevealCard" type="ui" id="text-reveal-card"}
    ::
    ::CodeViewerTab{label="TextRevealStars.vue" language="vue" componentName="TextRevealStars" type="ui" id="text-reveal-card"}
    ::

::

## Credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Text Reveal Card](https://ui.aceternity.com/components/text-reveal-card).
