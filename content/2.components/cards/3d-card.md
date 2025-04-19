---
title: 3D Card Effect
description: A card perspective effect, hover over the card to elevate card elements.
---

::ComponentLoader{label="Preview" componentName="CardDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

::alert{type="info"}
If you are using `CardItem` inside a `div`, add `style="transform-style: preserve-3d;"` to the div to make `translate-z` prop to work.
::

## Install using CLI

::InstallationCli{componentId="card-3d"}
::

## Install Manually

Copy and paste the following code in the same folder

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

## Examples

With rotation

::ComponentLoader{label="Preview" componentName="CardDemo2" type="examples"}
::

## API

### `CardContainer`

The `CardContainer` component serves as a wrapper for the 3D card effect. It manages mouse events to create a 3D perspective.

#### Props

| Prop Name        | Type   | Default | Description                                                 |
| ---------------- | ------ | ------- | ----------------------------------------------------------- |
| `class`          | String | `null`  | Additional classes for styling the inner container element. |
| `containerClass` | String | `null`  | Additional classes for styling the outer container element. |

#### Usage

```vue [MyCardComponent.vue]
<CardContainer containerClass="additional-class">
  <!-- Your content here -->
</CardContainer>
```

### `CardBody`

The `CardBody` component is a flexible container with preserved 3D styling. It is intended to be used within a `CardContainer` to hold content with a 3D transformation effect.

#### Props

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | String | `null`  | Additional classes for custom styling. |

#### Usage

```vue [MyCardComponent.vue]
<CardBody class="custom-class">
  <!-- Your content here -->
</CardBody>
```

### `CardItem`

The `CardItem` component represents individual items within the 3D card. It supports various transformations (translation and rotation) to create dynamic 3D effects.

#### Props

| Prop Name    | Type          | Default | Description                                                     |
| ------------ | ------------- | ------- | --------------------------------------------------------------- |
| `as`         | String        | `"div"` | The HTML tag or component to use for the item.                  |
| `class`      | String        | `null`  | Additional classes for styling the item.                        |
| `translateX` | Number/String | `0`     | X-axis translation in pixels.                                   |
| `translateY` | Number/String | `0`     | Y-axis translation in pixels.                                   |
| `translateZ` | Number/String | `0`     | Z-axis translation in pixels, used to control the depth effect. |
| `rotateX`    | Number/String | `0`     | X-axis rotation in degrees.                                     |
| `rotateY`    | Number/String | `0`     | Y-axis rotation in degrees.                                     |
| `rotateZ`    | Number/String | `0`     | Z-axis rotation in degrees.                                     |

#### Usage

```vue [MyCardComponent.vue]
<CardItem as="p" translateZ="50" class="custom-item-class">
  Your text or content here
</CardItem>
```
