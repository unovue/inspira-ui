---
title: Animated Tabs
description: A tabs component with a shared-layout active pill and a stacked content transition.
category: Miscellaneous
tags: [css, tailwind, tabs, aceternity-ui, motion-v]
badge: New
---

::ComponentViewer{demoFile="AnimatedTabsDemo.vue" config="AnimatedTabsConfig" componentId="animated-tabs" :componentFiles='["AnimatedTabs.vue", "AnimatedTabsFadeInDiv.vue", "types.ts", "index.ts"]' dependencies="motion-v"}

#api

## API

### `<AnimatedTabs />`

Tip: give the wrapper a fixed height (e.g. `h-[20rem] md:h-[40rem]`) so the stacked content can be positioned absolutely.

#### Props

| Prop Name            | Type            | Default | Description                                   |
| -------------------- | --------------- | ------- | --------------------------------------------- |
| `tabs`               | `AnimatedTab[]` | `-`     | Tabs metadata list.                           |
| `modelValue`         | `string`        | `-`     | Controlled active tab value.                  |
| `containerClassName` | `string`        | `""`    | Extra classes for the tablist container.      |
| `tabClassName`       | `string`        | `""`    | Extra classes for each tab button.            |
| `activeTabClassName` | `string`        | `""`    | Extra classes for the active pill background. |
| `contentClassName`   | `string`        | `""`    | Extra classes for each stacked content card.  |

#### Events

| Event Name          | Payload  | Description                                      |
| ------------------- | -------- | ------------------------------------------------ |
| `update:modelValue` | `string` | Fired when active tab changes (controlled mode). |

#### Slots

| Slot Name | Slot Props                  | Description                           |
| --------- | --------------------------- | ------------------------------------- |
| `content` | `tab`, `active`, `hovering` | Render the tab content (recommended). |

#### Types

##### `AnimatedTab`

| Field            | Type                  | Required | Description                                                      |
| ---------------- | --------------------- | -------- | ---------------------------------------------------------------- |
| `title`          | `string`              | yes      | Tab label (used by the default UI).                              |
| `value`          | `string`              | yes      | Unique tab id used for active state.                             |
| `panelClassName` | `string`              | no       | Optional panel background classes (used by demos / consumers).   |
| `content`        | `Component`           | no       | Fallback content component when `#content` slot is not provided. |
| `contentProps`   | `Record<string, any>` | no       | Props passed to the `content` component.                         |

#credits

- Ported from [Aceternity UI Tabs](https://ui.aceternity.com/components/tabs).
- Animations powered by [motion-v](https://motion.dev/docs/vue).

::
