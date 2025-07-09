---
title: 3D效果卡片
description: 一个3D透视效果卡片，将鼠标悬停在卡片上以提升卡片元素。
---

::ComponentLoader{label="预览" componentName="CardDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

::alert{type="info"}
If you are using `CardItem` inside a `div`, add `style="transform-style: preserve-3d;"` to the div to make `translate-z` prop to work.
::

## 通过 CLI 安装

::InstallationCli{componentId="card-3d"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{filename="CardContainer.vue" language="vue" componentName="CardContainer" type="ui" id="card-3d"}
:CodeViewerTab{filename="CardBody.vue" language="vue" componentName="CardBody" type="ui" id="card-3d"}
:CodeViewerTab{filename="CardItem.vue" language="vue" componentName="CardItem" type="ui" id="card-3d"}

```ts [useMouseState.ts]
import { ref, readonly } from "vue";

export function useMouseState() {
  const isMouseEntered = ref(false);

  function setMouseEntered(value: boolean) {
    isMouseEntered.value = value;
  }

  return {
    isMouseEntered: readonly(isMouseEntered),
    setMouseEntered,
  };
}
```

::

## 示例

With rotation

::ComponentLoader{label="预览" componentName="CardDemo2" type="examples"}
::

## API

### `CardContainer`

The `CardContainer` component serves as a wrapper for the 3D card effect. It manages mouse events to create a 3D perspective.

#### Props

| Prop 名称        | 类型   | 默认值 | 描述                                                        |
| ---------------- | ------ | ------ | ----------------------------------------------------------- |
| `class`          | String | `null` | Additional classes for styling the inner container element. |
| `containerClass` | String | `null` | Additional classes for styling the outer container element. |

#### 用例

```vue [MyCardComponent.vue]
<CardContainer containerClass="additional-class">
  <!-- Your content here -->
</CardContainer>
```

### `CardBody`

The `CardBody` component is a flexible container with preserved 3D styling. It is intended to be used within a `CardContainer` to hold content with a 3D transformation effect.

#### Props

| Prop 名称 | 类型   | 默认值 | 描述                                   |
| --------- | ------ | ------ | -------------------------------------- |
| `class`   | String | `null` | Additional classes for custom styling. |

#### 用例

```vue [MyCardComponent.vue]
<CardBody class="custom-class">
  <!-- Your content here -->
</CardBody>
```

### `CardItem`

The `CardItem` component represents individual items within the 3D card. It supports various transformations (translation and rotation) to create dynamic 3D effects.

#### Props

| Prop 名称    | 类型          | 默认值  | 描述                                                            |
| ------------ | ------------- | ------- | --------------------------------------------------------------- |
| `as`         | String        | `"div"` | The HTML tag or component to use for the item.                  |
| `class`      | String        | `null`  | Additional classes for styling the item.                        |
| `translateX` | Number/String | `0`     | X-axis translation in pixels.                                   |
| `translateY` | Number/String | `0`     | Y-axis translation in pixels.                                   |
| `translateZ` | Number/String | `0`     | Z-axis translation in pixels, used to control the depth effect. |
| `rotateX`    | Number/String | `0`     | X-axis rotation in degrees.                                     |
| `rotateY`    | Number/String | `0`     | Y-axis rotation in degrees.                                     |
| `rotateZ`    | Number/String | `0`     | Z-axis rotation in degrees.                                     |

#### 用例

```vue [MyCardComponent.vue]
<CardItem as="p" translateZ="50" class="custom-item-class">
  Your text or content here
</CardItem>
```
