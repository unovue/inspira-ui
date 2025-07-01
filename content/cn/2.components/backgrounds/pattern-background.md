---
title: Pattern Background
description: Simple animated pattern background to make your sections stand out.
---

Grid background with dot
::ComponentLoader{label="Preview" componentName="PatternBackgroundDotDemo" type="examples" id="pattern-background"}
::

## 使用 CLI 安装

::InstallationCli{componentId="pattern-background"}
::

## 手动安装

将以下代码复制并粘贴到同一文件夹中

::code-group

:CodeViewerTab{label="PatternBackground.vue" language="vue" componentName="PatternBackground" type="ui" id="pattern-background"}
:CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="pattern-background" extension="ts"}

::

## Examples

Grid background with big dot and ellipse on top
::ComponentLoader{label="Preview" componentName="PatternBackgroundBigDotDemo" type="examples" id="pattern-background"}
::

Grid background without animation
::ComponentLoader{label="Preview" componentName="PatternBackgroundGridDemo" type="examples" id="pattern-background"}
::

Small grid background with animation
::ComponentLoader{label="Preview" componentName="PatternBackgroundGridSmallDemo" type="examples" id="pattern-background"}
::

## API

| Prop Name   | 类型                                                                                                   | 默认值    | 说明                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animate`   | `boolean`                                                                                              | `false`   | Set `true` if you want to animate the background.                                                                                                              |
| `direction` | `top` \| `bottom` \| `left` \| `right` \| `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `top`     | Direction of the animation movement. You can use the const `PATTERN_BACKGROUND_DIRECTION.`                                                                     |
| `direction` | `grid` \| `dot`                                                                                        | `grid`    | Type of pattern. You can use the const `PATTERN_BACKGROUND_VARIANT.`                                                                                           |
| `size`      | `xs` \| `sm` \| `md` \| `lg`                                                                           | `md`      | Size of the background pattern.                                                                                                                                |
| `mask`      | `ellipse` \| `ellipse-top`                                                                             | `ellipse` | Add a mask over the background pattern. You can use the const `PATTERN_BACKGROUND_MASK.`                                                                       |
| `speed`     | `number`                                                                                               | `10000`   | Duration of the animation in `ms`, the bigger it is, the slower the animation. (`20000` slower than `5000`). You can use the const `PATTERN_BACKGROUND_SPEED.` |

### Custom variants, values and constants

You can customize your needs directly within the `index.ts` file. See code below.

## 致谢

- Inspired by [Magic UI's Dot Pattern](https://magicui.design/docs/components/dot-pattern) component.
- Inspired by [Magic UI's Grid Pattern](https://magicui.design/docs/components/grid-pattern) component.
- Inspired by [Magic UI's Animated Grid Pattern](https://magicui.design/docs/components/animated-grid-pattern) component.
- Credits to [Nathan De Pachtere](https://nathandepachtere.com/) for porting this component.
