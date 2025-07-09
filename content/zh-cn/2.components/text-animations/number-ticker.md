---
title: 数字增长
description: 向上或向下计数到目标数字的数字动画。
---

::ComponentLoader{label="预览" componentName="NumberTickerDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="number-ticker"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="NumberTicker.vue" language="vue" componentName="NumberTicker" type="ui" id="number-ticker"}
::

---

## API

| Prop 名称       | 类型                | 默认值         | 描述                                                              |
| --------------- | ------------------- | -------------- | ----------------------------------------------------------------- |
| `value`         | `int`               | `0`            | Value to count to                                                 |
| `direction`     | `up \| down`        | `up`           | Direction to count in                                             |
| `decimalPlaces` | `number`            | `0`            | Number of decimal places to show                                  |
| `delay`         | `number`            | `0`            | Delay before counting (in milliseconds)                           |
| `duration`      | `number`            | `1000`         | Total duration for the entire animation (in milliseconds).        |
| `transition`    | `TransitionPresets` | `easeOutCubic` | Name of transition preset (https://vueuse.org/core/useTransition) |

## 感谢

- Credits to [Grzegorz Krol](https://github.com/Grzechu335) for porting this component.
- Ported from [Magic UI NumberTicker](https://magicui.design/docs/components/number-ticker).
