---
title: Text Reveal Card
description: Mousemove effect to reveal text content at the bottom of the card.
---

::ComponentLoader{label="Preview" componentName="TextRevealDemo" type="examples"}  
::

::alert{type="info"}
**Note:** This component uses `@vueuse/motion` npm package as a dependency.

See the [installation guide](https://motion.vueuse.org/getting-started/introduction) for more information on how to install the package.

::

## API

| Prop Name        | Type     | Description                                             |
| ---------------- | -------- | ------------------------------------------------------- |
| title            | `String` | Title of the card.                                      |
| description      | `String` | Description of the card.                                |
| text             | `String` | Text to be revealed.                                    |
| revealText       | `String` | Text to be revealed when hovered over the card.         |
| class            | `String` | Additional classes to be added to the card.             |
| titleClass       | `String` | Additional classes to be added to the card title.       |
| descriptionClass | `String` | Additional classes to be added to the card description. |

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
