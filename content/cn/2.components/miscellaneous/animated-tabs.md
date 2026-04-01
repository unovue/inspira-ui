---
title: Animated Tabs
description: 带共享布局选中态胶囊与堆叠内容切换动画的 Tabs 组件。
category: Miscellaneous
tags: [css, tailwind, tabs, aceternity-ui, motion-v]
badge: New
---

::ComponentViewer{demoFile="AnimatedTabsDemo.vue" config="AnimatedTabsConfig" componentId="animated-tabs" :componentFiles='["AnimatedTabs.vue", "AnimatedTabsFadeInDiv.vue", "types.ts", "index.ts"]' dependencies="motion-v"}

#api

## API

### `<AnimatedTabs />`

提示：建议给外层容器一个固定高度（例如 `h-[20rem] md:h-[40rem]`），因为内容区使用了 absolute 堆叠定位。

#### Props

| 属性名               | 类型            | 默认值 | 说明                         |
| -------------------- | --------------- | ------ | ---------------------------- |
| `tabs`               | `AnimatedTab[]` | `-`    | Tabs 元数据列表。            |
| `modelValue`         | `string`        | `-`    | 受控的当前激活 tab value。   |
| `containerClassName` | `string`        | `""`   | tablist 容器额外类名。       |
| `tabClassName`       | `string`        | `""`   | 每个 tab 按钮的额外类名。    |
| `activeTabClassName` | `string`        | `""`   | 选中态胶囊背景的额外类名。   |
| `contentClassName`   | `string`        | `""`   | 每个堆叠内容卡片的额外类名。 |

#### Events

| 事件名              | 参数     | 说明                              |
| ------------------- | -------- | --------------------------------- |
| `update:modelValue` | `string` | 激活 tab 变化时触发（受控模式）。 |

#### Slots

| 插槽名    | 插槽参数                    | 说明                    |
| --------- | --------------------------- | ----------------------- |
| `content` | `tab`, `active`, `hovering` | 渲染 tab 内容（推荐）。 |

#### Types

##### `AnimatedTab`

| 字段             | 类型                  | 必填 | 说明                                        |
| ---------------- | --------------------- | ---- | ------------------------------------------- |
| `title`          | `string`              | 是   | tab 文案（默认 UI 会使用它）。              |
| `value`          | `string`              | 是   | tab 唯一标识，用于激活态。                  |
| `panelClassName` | `string`              | 否   | 内容面板背景类名（示例/使用方可自行使用）。 |
| `content`        | `Component`           | 否   | 未提供 `#content` 插槽时的兜底内容组件。    |
| `contentProps`   | `Record<string, any>` | 否   | 传给 `content` 组件的 props。               |

#credits

- 移植自 [Aceternity UI Tabs](https://ui.aceternity.com/components/tabs)。
- 动画由 [motion-v](https://motion.dev/docs/vue) 提供支持。

::
