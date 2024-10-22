---
title: Pattern Background
description: Simple animated pattern background to make your sections stand out.
---

Grid background with dot
::ComponentLoader{label="Preview" componentName="PatternBackgroundDotDemo" type="examples" id="pattern-background"}
::

Grid background with big dot and ellipse on top
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

| Prop Name   | Type                                                                                     | Default                            | Description                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animate`   | `boolean`                                                                                | false                              | Set `true` if you want to animate the background.                                                                                                           |
| `direction` | `top \| bottom \| left \| right \| top-left \| top-right \| bottom-left \| bottom-right` | `PATTERN_BACKGROUND_DIRECTION.Top` | Direction of the animation movement. Use can use the variable `PATTERN_BACKGROUND_DIRECTION.<direction>`                                                    |
| `direction` | `grid \| dot`                                                                            | `PATTERN_BACKGROUND_VARIANT.Grid`  | Type of pattern. Use can use the variable `PATTERN_BACKGROUND_VARIANT.<variant>`                                                                            |
| `size`      | `xs \| sm \| md \| lg`                                                                   | `md`                               | Size of the background pattern.                                                                                                                             |
| `mask`      | `ellipse \| ellipse-top`                                                                 | `PATTERN_BACKGROUND_MASK.Ellipse`  | Add a mask over the background pattern. Use can use the variable `PATTERN_BACKGROUND_MASK.<mask>`                                                           |
| `speed`     | string                                                                                   | `PATTERN_BACKGROUND_SPEED.Default` | Duration of the animation, the bigger it is, the slower the animation. (`20s` slower than `5s`) Use can use the variable `PATTERN_BACKGROUND_SPEED.<speed>` |

### Custom variants

You can customize your needs directly within the `index.vue` file.

::CodeViewer{filename="index.ts" language="typescript" componentName="index" type="ui" id="pattern-background"}
::

## Component Code

You can copy and paste the following code to create these components:

::code-group

::CodeViewerTab{label="PatternBackground.vue" language="vue" componentName="PatternBackground" type="ui" id="pattern-background"}
::

#::CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="pattern-background"}
#::
