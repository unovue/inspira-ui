---
title: Pattern Backgrounds
description: Simple animated pattern backgrounds to make your sections stand out.
---

Grid background with dot
::ComponentLoader{label="Preview" componentName="PatternBackgroundDotDemo" type="examples" id="pattern-background"}
::

Grid background with big dot
::ComponentLoader{label="Preview" componentName="PatternBackgroundBigDotDemo" type="examples" id="pattern-background"}
::

## Examples

Grid background without animation
::ComponentLoader{label="Preview" componentName="PatternBackgroundGridDemo" type="examples" id="pattern-background"}
::

Small grid background with animation
::ComponentLoader{label="Preview" componentName="PatternBackgroundGridSmallDemo" type="examples" id="pattern-background"}
::

## API

| Prop Name   | Type                                                                                     | Default | Description                                       |
| ----------- | ---------------------------------------------------------------------------------------- | ------- | ------------------------------------------------- |
| `animate`   | `boolean`                                                                                | false   | Set `true` if you want to animate the background. |
| `direction` | `top \| bottom \| left \| right \| top-left \| top-right \| bottom-left \| bottom-right` | `top`   | Direction of the animation movement.              |

### Utility Types

- **Dot Pattern:** `dark:bg-dot-white/[0.2] bg-dot-black/[0.2]`

- **Grid Pattern:** `dark:bg-grid-white/[0.2] bg-grid-black/[0.2]`

- **Small Grid Pattern:** `dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]`

## Component Code

You can copy and paste the following code to create these components:

::code-group

::CodeViewerTab{label="PatternBackground.vue" language="vue" componentName="PatternBackground" type="ui" id="backgrounds"}
::

#::CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="backgrounds"}
#::
