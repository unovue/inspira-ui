---
title: 取色器
description: 全功能的取色组件，支持多种颜色格式、无障碍特性与自定义色板。
category: 表单与输入
tags: [css, tailwind, input, color-picker, uplusion23]
---

::ComponentViewer{demoFile="ColorPickerDemo.vue" config="ColorPickerConfig" componentId="color-picker" :componentFiles='["ColorPicker.vue", "ObjectColorInput.vue", "ContrastRatio.vue", "index.ts"]' dependencies="@uiw/color-convert"}

#api

## API

### ColorPicker Props

| 属性名                 | 类型                                            | 默认值     | 描述                                        |
| ---------------------- | ----------------------------------------------- | ---------- | ------------------------------------------- |
| `value`                | `string \| HsvaColor \| HslaColor \| RgbaColor` | `undefined`| 当前颜色值，支持多种格式。                  |
| `type`                 | `'hsl' \| 'hsla' \| 'rgb' \| 'rgba' \| 'hex'`   | `'hsl'`    | 输入中默认显示的颜色格式。                  |
| `swatches`             | `HexColor[]`                                    | `[]`       | 预设色板数组。                              |
| `hideContrastRatio`    | `boolean`                                       | `false`    | 隐藏无障碍对比度区域。                      |
| `hideDefaultSwatches`  | `boolean`                                       | `false`    | 隐藏默认色板。                              |
| `class`                | `string`                                        | `""`       | 用于弹出内容的额外 CSS 类。                 |
| `open`                 | `boolean`                                       | `false`    | 控制取色器的打开/关闭状态。                 |

### ColorPicker Events

| 事件名         | 类型                                | 描述                         |
| -------------- | ----------------------------------- | ---------------------------- |
| `value-change` | `(value: ColorPickerValue) => void` | 当所选颜色变化时触发。       |
| `update:open`  | `(value: boolean) => void`          | 当弹出层打开状态改变时触发。 |

### ColorPickerValue 类型

```typescript
interface ColorPickerValue {
  hex: string; // 十六进制颜色（例如 "#ff0000"）
  hsl: HslaColor; // 具有 h、s、l、a 属性的 HSL 颜色对象
  hsla: HslaColor; // 具有 h、s、l、a 属性的 HSLA 颜色对象
  rgb: RgbaColor; // 具有 r、g、b、a 属性的 RGB 颜色对象
  rgba: RgbaColor; // 具有 r、g、b、a 属性的 RGBA 颜色对象
}
```

#credits

- 感谢 [kalix127](https://github.com/kalix127) 移植该组件。
- 灵感来自 [@uplusion23](https://21st.dev/uplusion23/color-picker/color-picker-with-swatches-and-onchange)。

::
