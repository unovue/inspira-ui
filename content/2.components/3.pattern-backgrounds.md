---
title: Pattern Backgrounds
description: Simple animated pattern backgrounds to make your sections stand out.
---

::ComponentLoader{label="Preview" componentName="DotBackgroundDemo" type="examples" id="backgrounds"}
::

## Examples

Grid background without animation
::ComponentLoader{label="Preview" componentName="GridBackgroundDemo" type="examples" id="backgrounds"}
::

Small grid background with animation
::ComponentLoader{label="Preview" componentName="GridSmallBackgroundDemo" type="examples" id="backgrounds"}
::

## API

| Prop Name  | Type                                                                                     | Default | Description                                       |
| ---------- | ---------------------------------------------------------------------------------------- | ------- | ------------------------------------------------- |
| `animate`  | `boolean`                                                                                | false   | Set `true` if you want to animate the background. |
| `duration` | `top \| bottom \| left \| right \| top-left \| top-right \| bottom-left \| bottom-right` | `top`   | Direction of the animation movement.              |

### Utility Classes

- **Dot Pattern:** `dark:bg-dot-white/[0.2] bg-dot-black/[0.2]`

- **Grid Pattern:** `dark:bg-grid-white/[0.2] bg-grid-black/[0.2]`

- **Small Grid Pattern:** `dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]`

## Component Code

You can copy and paste the following code to create these components:

::code-group

::CodeViewerTab{label="PatternBackground.vue" language="vue" componentName="PatternBackground" type="ui" id="backgrounds"}
::

::CodeViewerTab{filename="DotBackground.vue" language="vue" componentName="DotBackground" type="ui" id="backgrounds"}
::

::CodeViewerTab{filename="GridBackground.vue" language="vue" componentName="GridBackground" type="ui" id="backgrounds"}
::

::CodeViewerTab{filename="GridSmallBackground.vue" language="vue" componentName="GridSmallBackground" type="ui" id="backgrounds"}
::
::
