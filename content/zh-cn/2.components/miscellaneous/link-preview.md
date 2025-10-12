---
title: 链接预览
description: 鼠标放置到链接上可动态预览该链接。
---

::ComponentLoader{label="预览" componentName="LinkPreviewDemo" type="examples"}  
::

::alert{type="info"}
**注意:** This component uses `qss` npm package as a dependency.
::

## 通过 CLI 安装

::InstallationCli{componentId="link-preview"}
::

## 手动安装

::steps{level=4}

#### Install the dependencies

::code-group

```bash [npm]
npm install qss
```

```bash [pnpm]
pnpm install qss
```

```bash [bun]
bun add qss
```

```bash [yarn]
yarn add qss
```

::

复制并粘贴以下代码：

::CodeViewer{filename="LinkPreview.vue" language="vue" componentName="LinkPreview" type="ui" id="link-preview"}  
::
::

## API

| Prop 名称   | 类型      | 默认值  | 描述                                                                                        |
| ----------- | --------- | ------- | ------------------------------------------------------------------------------------------- |
| `class`     | `string`  | `""`    | Custom class applied to the main element.                                                   |
| `linkClass` | `string`  | `""`    | Custom class applied to the link element.                                                   |
| `width`     | `number`  | `200`   | Width of the preview image.                                                                 |
| `height`    | `number`  | `125`   | Height of the preview image.                                                                |
| `isStatic`  | `boolean` | `false` | Determines if the preview image is static or a URL preview (set to `true` for static mode). |
| `imageSrc`  | `string`  | `""`    | The source of the image to display (required if `isStatic` is `true`).                      |
| `url`       | `string`  | `""`    | URL for the link and for generating the preview image (required if `isStatic` is `false`).  |

## 感谢

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Link Preview](https://ui.aceternity.com/components/link-preview).
