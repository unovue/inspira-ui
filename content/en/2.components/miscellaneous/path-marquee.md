---
title: Path Marquee
description: Move repeated content along an SVG path with hover slowdown and drag control.
category: Miscellaneous
tags: [svg, motion-v, marquee, drag]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="PathMarqueeDemo.vue" config="PathMarqueeConfig" componentId="path-marquee" :componentFiles='["PathMarquee.vue", "index.ts"]'}

#api

## API

| Prop                       | Type                        | Default                           | Description                                           |
| -------------------------- | --------------------------- | --------------------------------- | ----------------------------------------------------- |
| `path`                     | `string`                    | —                                 | SVG path data used to position each item.             |
| `pathId`                   | `string`                    | Generated                         | ID assigned to the SVG path.                          |
| `showPath`                 | `boolean`                   | `false`                           | Render the path stroke.                               |
| `width`                    | `string \| number`          | `"100%"`                          | SVG width.                                            |
| `height`                   | `string \| number`          | `"100%"`                          | SVG height.                                           |
| `viewBox`                  | `string`                    | `"0 0 100 100"`                   | SVG coordinate system.                                |
| `preserveAspectRatio`      | `string`                    | `"xMidYMid meet"`                 | SVG aspect-ratio behavior.                            |
| `baseVelocity`             | `number`                    | `5`                               | Automatic movement speed.                             |
| `direction`                | `"normal" \| "reverse"`     | `"normal"`                        | Initial movement direction.                           |
| `easing`                   | `(value: number) => number` | —                                 | Optional easing function for path progress.           |
| `slowdownOnHover`          | `boolean`                   | `false`                           | Slow movement while an item is hovered.               |
| `slowDownFactor`           | `number`                    | `0.3`                             | Speed multiplier while hovering.                      |
| `slowDownSpringConfig`     | `object`                    | `{ damping: 50, stiffness: 400 }` | Spring used for hover speed changes.                  |
| `useScrollVelocity`        | `boolean`                   | `false`                           | Add scroll velocity to the movement speed.            |
| `scrollAwareDirection`     | `boolean`                   | `false`                           | Change direction from the latest scroll direction.    |
| `scrollSpringConfig`       | `object`                    | `{ damping: 50, stiffness: 400 }` | Spring used for scroll velocity.                      |
| `repeat`                   | `number`                    | `3`                               | Number of times to repeat slot content.               |
| `draggable`                | `boolean`                   | `false`                           | Allow pointer dragging along the path.                |
| `dragSensitivity`          | `number`                    | `0.2`                             | Multiplier applied to pointer drag velocity.          |
| `dragVelocityDecay`        | `number`                    | `0.96`                            | Decay applied to released drag momentum.              |
| `dragAwareDirection`       | `boolean`                   | `false`                           | Follow the latest drag direction automatically.       |
| `grabCursor`               | `boolean`                   | `false`                           | Use grab and grabbing cursors when draggable.         |
| `enableRollingZIndex`      | `boolean`                   | `true`                            | Layer items based on their current path position.     |
| `zIndexBase`               | `number`                    | `1`                               | Starting z-index value.                               |
| `zIndexRange`              | `number`                    | `10`                              | Range added across the path.                          |
| `cssVariableInterpolation` | `object[]`                  | `[]`                              | Interpolate CSS variables across path progress.       |
| `responsive`               | `boolean`                   | `false`                           | Scale the path coordinate space to fit its container. |
| `class`                    | `string`                    | —                                 | Additional classes merged onto the root element.      |

Pass one or more elements as the default slot. Each slot element is repeated and positioned along the path.

#credits

- Ported from [Fancy Components Marquee Along SVG Path](https://fancycomponents.dev/docs/components/blocks/marquee-along-svg-path).

::
