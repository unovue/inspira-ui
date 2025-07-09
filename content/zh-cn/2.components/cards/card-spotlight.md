---
title: 聚光灯卡片
description: A card component with a dynamic spotlight effect that follows the mouse cursor, enhancing visual interactivity.
---

::ComponentLoader{label="预览" componentName="CardSpotlightDemo" type="examples"}  
::

## 通过 CLI 安装

::InstallationCli{componentId="card-spotlight"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="CardSpotlight.vue" language="vue" componentName="CardSpotlight" type="ui" id="card-spotlight"}
::

## API

| Prop 名称         | 类型     | 默认值      | 描述                                                        |
| ----------------- | -------- | ----------- | ----------------------------------------------------------- |
| `gradientSize`    | `number` | `200`       | Radius in pixels of the spotlight effect.                   |
| `gradientColor`   | `string` | `'#262626'` | The color of the spotlight gradient.                        |
| `gradientOpacity` | `number` | `0.8`       | The opacity level of the spotlight gradient effect.         |
| `slotClass`       | `string` | `undefined` | Class to apply to the parent container containing the slot. |

## 功能特性

- **Interactive Spotlight Effect**: Displays a dynamic spotlight that follows the user's mouse cursor, enhancing user engagement and visual appeal.

- **Customizable Appearance**: Easily adjust the `gradientSize`, `gradientColor`, and `gradientOpacity` props to tailor the spotlight effect to your design preferences.

- **Easy Integration**: Wrap any content within the `<CardSpotlight>` component to instantly add the spotlight effect without additional configuration.

- **Responsive Design**: The component adapts smoothly to different container sizes, ensuring a consistent experience across various devices and screen sizes.

- **Performance Optimized**: Utilizes Vue's reactivity for efficient updates, ensuring smooth animations without compromising application performance.

## 感谢

- Inspired by Magic Card component from [Magic UI](https://magicui.design/docs/components/magic-card).
