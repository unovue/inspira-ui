---
title: Pattern Background
description: Simple animated pattern background to make your sections stand out.
---

Grid background with dot
::ComponentLoader{label="预览" componentName="PatternBackgroundDotDemo" type="examples" id="pattern-background"}
::

## 通过 CLI 安装

::InstallationCli{componentId="pattern-background"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="PatternBackground.vue" language="vue" componentName="PatternBackground" type="ui" id="pattern-background"}
:CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="pattern-background" extension="ts"}

::

## 示例

Grid background with big dot and ellipse on top
::ComponentLoader{label="预览" componentName="PatternBackgroundBigDotDemo" type="examples" id="pattern-background"}
::

Grid background without animation
::ComponentLoader{label="预览" componentName="PatternBackgroundGridDemo" type="examples" id="pattern-background"}
::

Small grid background with animation
::ComponentLoader{label="预览" componentName="PatternBackgroundGridSmallDemo" type="examples" id="pattern-background"}
::

## API

| Prop 名称   | 类型                                                                                                   | 默认值    | 描述                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animate`   | `boolean`                                                                                              | `false`   | Set `true` if you want to animate the background.                                                                                                              |
| `direction` | `top` \| `bottom` \| `left` \| `right` \| `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `top`     | Direction of the animation movement. You can use the const `PATTERN_BACKGROUND_DIRECTION.`                                                                     |
| `direction` | `grid` \| `dot`                                                                                        | `grid`    | 类型 of pattern. You can use the const `PATTERN_BACKGROUND_VARIANT.`                                                                                           |
| `size`      | `xs` \| `sm` \| `md` \| `lg`                                                                           | `md`      | Size of the background pattern.                                                                                                                                |
| `mask`      | `ellipse` \| `ellipse-top`                                                                             | `ellipse` | Add a mask over the background pattern. You can use the const `PATTERN_BACKGROUND_MASK.`                                                                       |
| `speed`     | `number`                                                                                               | `10000`   | Duration of the animation in `ms`, the bigger it is, the slower the animation. (`20000` slower than `5000`). You can use the const `PATTERN_BACKGROUND_SPEED.` |

### Custom variants, values and constants

You can customize your needs directly within the `index.ts` file. See code below.

## 感谢

- Inspired by [Magic UI's Dot Pattern](https://magicui.design/docs/components/dot-pattern) component.
- Inspired by [Magic UI's Grid Pattern](https://magicui.design/docs/components/grid-pattern) component.
- Inspired by [Magic UI's Animated Grid Pattern](https://magicui.design/docs/components/animated-grid-pattern) component.
- Credits to [Nathan De Pachtere](https://nathandepachtere.com/) for porting this component.
