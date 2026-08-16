---
title: Typewriter Text
description: Type and rotate through text with an optional animated cursor.
category: Text Animation
tags: [css, tailwind, motion-v, typewriter]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="TypewriterTextDemo.vue" config="TypewriterTextConfig" componentId="typewriter-text" :componentFiles='["TypewriterText.vue", "index.ts"]'}

#api

## API

| Prop                      | Type                                             | Default     | Description                                       |
| ------------------------- | ------------------------------------------------ | ----------- | ------------------------------------------------- |
| `text`                    | `string \| string[]`                             | —           | Text or text sequence to type.                    |
| `as`                      | `string`                                         | `"div"`     | HTML element used for the root text node.         |
| `speed`                   | `number`                                         | `50`        | Delay between typed characters in milliseconds.   |
| `initialDelay`            | `number`                                         | `0`         | Delay before typing starts in milliseconds.       |
| `waitTime`                | `number`                                         | `2000`      | Pause before deleting or moving to the next text. |
| `deleteSpeed`             | `number`                                         | `30`        | Delay between deleted characters in milliseconds. |
| `loop`                    | `boolean`                                        | `true`      | Continue from the first text after the last text. |
| `showCursor`              | `boolean`                                        | `true`      | Show the animated cursor.                         |
| `hideCursorOnType`        | `boolean`                                        | `false`     | Hide the cursor while text is typing or deleting. |
| `cursorChar`              | `string`                                         | `"\|"`      | Character rendered as the cursor.                 |
| `cursorAnimationVariants` | `{ initial: VariantType; animate: VariantType }` | See default | Motion variants used for cursor blinking.         |
| `cursorClass`             | `string`                                         | `"ml-1"`    | Additional classes applied to the cursor.         |
| `class`                   | `string`                                         | —           | Additional classes merged onto the root element.  |

#credits

- Ported from [Fancy Components Typewriter](https://fancycomponents.dev/docs/components/text/typewriter).

::
