---
title: Apple Card Carousel
description: A sleek, Apple‑style card carousel with blur‑loading images, modal expansion, and smooth scrolling controls.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="AppleCardCarouselDemo" type="examples" id="apple-card-carousel"}
::

## Overview

The **Apple Carousel** suite is composed of four inter‑related components:

| Component           | Purpose                                                                  |
| ------------------- | ------------------------------------------------------------------------ |
| `AppleCardCarousel` | The horizontal scroll container with left / right controls.              |
| `AppleCarouselItem` | A wrapper that adds enter‑animation and spacing to each card.            |
| `AppleCard`         | A richly styled, clickable card that can expand into a fullscreen modal. |
| `AppleBlurImage`    | An `<img>` replacement that starts blurred until the image loads.        |

Together they reproduce the interactive “App Store / Apple TV” browsing experience.

---

## `AppleCardCarousel`

| Prop            | Type     | Default | Description                                        |
| --------------- | -------- | ------- | -------------------------------------------------- |
| `initialScroll` | `number` | `0`     | Horizontal scroll offset applied on mount (in px). |

### Slots

The default slot should contain one or more **`AppleCarouselItem`** components.

### Emits

_No custom events._

---

## `AppleCarouselItem`

| Prop    | Type     | Required | Description                                             |
| ------- | -------- | -------- | ------------------------------------------------------- |
| `index` | `number` | ✓        | Zero‑based index; used to stagger the appear animation. |

### Slots

Default slot — place an **`AppleCard`** here.

---

## `AppleCard`

| Prop     | Type                                               | Required | Default | Description                           |
| -------- | -------------------------------------------------- | -------- | ------- | ------------------------------------- |
| `card`   | `{ src: string; title: string; category: string }` | ✓        | —       | Data object for the card.             |
| `index`  | `number`                                           | ✓        | —       | Position within the carousel.         |
| `layout` | `boolean`                                          | ✕        | `false` | Enables shared‑layout FLIP animation. |

### Slots

When the card is **expanded** (modal open) the default slot renders inside the modal body; you can inject extended content such as text, images, or videos.

### Emits

_No custom events (relies on injected `CarouselKey` context)._

---

## `AppleBlurImage`

| Prop     | Type               | Default                          | Description                                                    |
| -------- | ------------------ | -------------------------------- | -------------------------------------------------------------- |
| `src`    | `string`           | **—**                            | Image source URL. _Required._                                  |
| `alt`    | `string`           | "Background of a beautiful view" | Alt text.                                                      |
| `width`  | `number \| string` | _img natural_                    | Width attribute; omitted when using `fill`.                    |
| `height` | `number \| string` | _img natural_                    | Height attribute; omitted when using `fill`.                   |
| `fill`   | `boolean`          | `false`                          | If `true`, sets `width:100%; height:100%` via utility classes. |
| `class`  | `string`           | `""`                             | Additional classes merged via `cn()`.                          |

When the image fires the native `load` event it gracefully transitions from `blur-sm` to no‑blur.

---

## Install using CLI

::InstallationCli{componentId="apple-card-carousel"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{filename="AppleCardCarousel.vue" language="vue" componentName="AppleCardCarousel" type="ui" id="apple-card-carousel"}
:CodeViewerTab{filename="AppleCarouselItem.vue" language="vue" componentName="AppleCarouselItem" type="ui" id="apple-card-carousel"}
:CodeViewerTab{filename="AppleCard.vue" language="vue" componentName="AppleCard" type="ui" id="apple-card-carousel"}
:CodeViewerTab{filename="AppleBlurImage.vue" language="vue" componentName="AppleBlurImage" type="ui" id="apple-card-carousel"}
:CodeViewerTab{filename="AppleCarouselContext.ts" language="ts" componentName="AppleCarouselContext" type="ui" id="apple-card-carousel" extension="ts"}

::

---

## Features

- **Blur‑Up Images** &mdash; Pleasant loading for card thumbnails.
- **Shared Layout Animation** &mdash; Optional FLIP animation between thumbnail and modal using `layoutId`.
- **Keyboard & Click Outside Close** &mdash; ⌘‑style modal dismissal (Esc key or outside click).
- **Accessible Scrolling Controls** &mdash; Prev / next buttons with disabled state.
- **Mobile‑Aware Scroll Calculations** &mdash; Ensures cards recentre correctly when closed on small screens.

## Credits

- Ported from [Aceternity UI Apple Card Carousel](https://ui.aceternity.com/components/apple-cards-carousel).
