---
title: 3D Card Effect
description: A card perspective effect, hover over the card to elevate card elements.
---

::ComponentLoader{label="Preview" componentName="CardDemo" type="examples"}
::

## Examples

With rotation

::ComponentLoader{label="Preview" componentName="CardDemo2" type="examples"}
::

## API

::steps

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

::

## Component Code

You can copy and paste the following code to create these components:

::code-group
::CodeViewerTab{label="CardContainer.vue" icon="vscode-icons:file-type-vue" componentName="CardContainer" type="ui" id="card-3d"}
::

::CodeViewerTab{label="CardBody.vue" icon="vscode-icons:file-type-vue" componentName="CardBody" type="ui" id="card-3d"}
::

::CodeViewerTab{label="CardItem.vue" icon="vscode-icons:file-type-vue" componentName="CardItem" type="ui" id="card-3d"}
::

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
