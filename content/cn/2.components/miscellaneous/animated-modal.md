---
title: Animated Modal
description: 带 3D 入场动画与背景模糊效果的弹窗组件。
category: 杂项
tags: [css, tailwind, modal, motion, aceternity-ui]
---

::ComponentViewer{demoFile="AnimatedModalDemo.vue" config="AnimatedModalConfig" componentId="animated-modal" :componentFiles='["AnimatedModal.vue", "AnimatedModalBody.vue", "AnimatedModalContent.vue", "AnimatedModalFooter.vue", "AnimatedModalTrigger.vue", "AnimatedModalContext.ts", "useAnimatedModal.ts", "index.ts"]' dependencies="motion-v @vueuse/core"}

#api

## API

### `<AnimatedModal />`

#### Props

| 属性名        | 类型      | 默认值  | 描述                 |
| ------------- | --------- | ------- | -------------------- |
| `open`        | `boolean` | `-`     | 受控的打开状态。     |
| `defaultOpen` | `boolean` | `false` | 非受控初始打开状态。 |
| `closeOnEsc`  | `boolean` | `true`  | 按 `Esc` 关闭弹窗。  |

#### Events

| 事件名        | 负载      | 描述                               |
| ------------- | --------- | ---------------------------------- |
| `update:open` | `boolean` | 打开状态变化时触发。               |
| `open`        | -         | 调用 `openModal()` 时触发。        |
| `close`       | -         | 调用 `closeModal()` 时触发。       |

#### Slots

| 插槽名     | 插槽参数                              |
| ---------- | ------------------------------------- |
| `default`  | `open`, `openModal`, `closeModal`, `toggle` |

#### Composable

- `useAnimatedModal()` — 在任意子组件中获取弹窗状态/方法（必须在 `<AnimatedModal />` 内使用）。

### `<AnimatedModalBody />`

#### Props

| 属性名           | 类型                      | 默认值    | 描述                         |
| ---------------- | ------------------------- | --------- | ---------------------------- |
| `class`          | `string`                  | `""`      | 弹窗面板额外类名。           |
| `overlayClass`   | `string`                  | `""`      | 遮罩层额外类名。             |
| `contentClass`   | `string`                  | `""`      | 内容容器额外类名。           |
| `showClose`      | `boolean`                 | `true`    | 是否显示关闭按钮。           |
| `closeOnOutside` | `boolean`                 | `true`    | 点击弹窗外部是否关闭。       |
| `lockScroll`     | `boolean`                 | `true`    | 打开时是否锁定页面滚动。     |
| `zIndex`         | `number`                  | `10000`   | 弹窗层级。                   |
| `teleportTo`     | `string \| HTMLElement`   | `"body"`  | Teleport 目标容器。          |

#credits

- 移植自 [Aceternity UI 的 Animated Modal](https://ui.aceternity.com/components/animated-modal)。
- 动画基于 [motion-v](https://motion.dev/)。

::
