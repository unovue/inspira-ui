---
title: Encrypted Text
description: A text reveal effect that starts as scrambled characters and progressively decrypts into the final message when it enters the viewport.
category: Text Animation
tags: [css, tailwind, motion-v, typography, animation, text]
badge: New
---

::ComponentViewer{demoFile="EncryptedTextDemo.vue" config="EncryptedTextConfig" componentId="encrypted-text" :componentFiles='["EncryptedText.vue"]'}

#api

## API

| Prop Name        | Type     | Default                                  | Description                                                  |
| ---------------- | -------- | ---------------------------------------- | ------------------------------------------------------------ |
| `text`           | `string` | **required**                             | The text to render and reveal.                               |
| `class`          | `string` | `""`                                     | Base class applied to the wrapper element.                   |
| `revealDelayMs`  | `number` | `50`                                     | Delay (in ms) between revealing each next character.         |
| `flipDelayMs`    | `number` | `50`                                     | Delay (in ms) between re-scrambling unrevealed characters.   |
| `charset`        | `string` | `A–Z a–z 0–9 !@#$%^&*()_+-={}[];:,.<>/?` | Character set used for the scrambled glyphs.                 |
| `encryptedClass` | `string` | `""`                                     | Class applied to characters while still encrypted/scrambled. |
| `revealedClass`  | `string` | `""`                                     | Class applied to characters once revealed.                   |

#credits

- Ported from [Aceternity UI Encrypted Text](https://ui.aceternity.com/components/encrypted-text).
- Animation powered by `motion-v`.

::
