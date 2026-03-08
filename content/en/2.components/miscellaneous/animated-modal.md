---
title: Animated Modal
description: A modal dialog with a 3D entrance animation and blurred backdrop.
category: Miscellaneous
tags: [css, tailwind, modal, motion, aceternity-ui]
---

::ComponentViewer{demoFile="AnimatedModalDemo.vue" config="AnimatedModalConfig" componentId="animated-modal" :componentFiles='["AnimatedModal.vue", "AnimatedModalBody.vue", "AnimatedModalContent.vue", "AnimatedModalFooter.vue", "AnimatedModalTrigger.vue", "AnimatedModalContext.ts", "useAnimatedModal.ts", "index.ts"]' dependencies="motion-v @vueuse/core"}

#api

## API

### `<AnimatedModal />`

#### Props

| Prop Name     | Type      | Default | Description                     |
| ------------- | --------- | ------- | ------------------------------- |
| `open`        | `boolean` | `-`     | Controlled open state.          |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial state.     |
| `closeOnEsc`  | `boolean` | `true`  | Close modal when pressing `Esc` |

#### Events

| Event Name    | Payload   | Description                          |
| ------------- | --------- | ------------------------------------ |
| `update:open` | `boolean` | Fired when open state changes.       |
| `open`        | -         | Fired when `openModal()` is called.  |
| `close`       | -         | Fired when `closeModal()` is called. |

#### Slots

| Slot Name | Slot Props                                  |
| --------- | ------------------------------------------- |
| `default` | `open`, `openModal`, `closeModal`, `toggle` |

#### Composable

- `useAnimatedModal()` — access modal state/methods from any nested child component (must be used within `<AnimatedModal />`).

### `<AnimatedModalBody />`

#### Props

| Prop Name        | Type                    | Default  | Description                               |
| ---------------- | ----------------------- | -------- | ----------------------------------------- |
| `class`          | `string`                | `""`     | Extra classes for the modal panel.        |
| `overlayClass`   | `string`                | `""`     | Extra classes for the overlay.            |
| `contentClass`   | `string`                | `""`     | Extra classes for the content wrapper.    |
| `showClose`      | `boolean`               | `true`   | Show close button.                        |
| `closeOnOutside` | `boolean`               | `true`   | Close when clicking outside the dialog.   |
| `lockScroll`     | `boolean`               | `true`   | Lock page scroll while the modal is open. |
| `zIndex`         | `number`                | `10000`  | Z-index for the modal layer.              |
| `teleportTo`     | `string \| HTMLElement` | `"body"` | Teleport target for the modal layer.      |

#credits

- Ported from [Aceternity UI's Animated Modal](https://ui.aceternity.com/components/animated-modal).
- Animations powered by [motion-v](https://motion.dev/).

::
