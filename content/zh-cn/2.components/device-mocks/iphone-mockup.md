---
title: iPhone 模拟
description: iPhone手机的SVG模型。
---

::ComponentLoader{label="预览" componentName="iPhone15ProMockupDemo" type="examples" id="mockups"}
::

## 通过 CLI 安装

::InstallationCli{componentId="iphone-mockup"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="iPhone15ProMockup.vue" language="vue" componentName="iPhone15ProMockup" type="ui" id="iphone-mockup"}
::

## API

| Prop 名称 | 类型     | 默认值 | 描述                                           |
| --------- | -------- | ------ | ---------------------------------------------- |
| `width`   | `number` | `433`  | Width of the mockup SVG in pixels.             |
| `height`  | `number` | `882`  | Height of the mockup SVG in pixels.            |
| `src`     | `string` | `null` | URL of the image to display inside the mockup. |

## 功能特性

- **Realistic iPhone 15 Pro Mockup**: Provides an accurate SVG representation of the iPhone 15 Pro, perfect for showcasing mobile app designs or website previews.
- **Customizable Dimensions**: Adjust the `width` and `height` props to fit your specific design requirements.
- **Image Display Support**: Use the `src` prop to insert any image into the mockup screen area, allowing for dynamic content display.
- **Light and Dark Mode Compatibility**: The mockup adapts its colors based on the theme, ensuring consistency in both light and dark modes.
- **Easy Integration**: Simple to include in your Vue projects with minimal setup.

## 感谢

- Ported from [Magic UI](https://magicui.design/docs/components/iphone-15-pro).
