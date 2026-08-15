---
title: Parallax Float
description: Add cursor-driven depth to layered content with independent floating elements.
category: Miscellaneous
tags: [motion, parallax, images]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="ParallaxFloatDemo.vue" config="ParallaxFloatConfig" componentId="parallax-float" :componentFiles='["ParallaxFloat.vue", "ParallaxFloatElement.vue", "ParallaxFloatContext.ts", "index.ts"]'}

#api

## API

### ParallaxFloat

| Prop Name      | Type     | Default | Description                                      |
| -------------- | -------- | ------- | ------------------------------------------------ |
| `sensitivity`  | `number` | `1`     | Multiplier applied to each element's depth.      |
| `easingFactor` | `number` | `0.05`  | Per-frame interpolation toward the target point. |
| `class`        | `string` | —       | Additional classes for the container.            |

### ParallaxFloatElement

| Prop Name | Type     | Default | Description                                   |
| --------- | -------- | ------- | --------------------------------------------- |
| `depth`   | `number` | `1`     | Relative movement depth for the element.      |
| `class`   | `string` | —       | Positioning and styling classes for the item. |

## Usage

Use `ParallaxFloat` as the container and place each independently moving layer inside `ParallaxFloatElement`:

```vue
<ParallaxFloat :sensitivity="-1">
  <ParallaxFloatElement :depth="2" class="top-1/4 left-1/3">
    <img src="/images/portrait.jpg" alt="Portrait" class="size-32 object-cover" />
  </ParallaxFloatElement>
</ParallaxFloat>
```

#credits

- Ported from [Fancy Components Parallax Floating](https://fancycomponents.dev/docs/components/image/parallax-floating).

::
