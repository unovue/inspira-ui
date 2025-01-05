<template>
  <Tree
    class="overflow-hidden rounded-md bg-background p-2"
    :initial-selected-id="'1'"
    :initial-expanded-items="[
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
    ]"
    :elements="ELEMENTS"
  >
    <Folder
      id="1"
      name="root"
    >
      <Folder
        id="2"
        name="components"
      >
        <Folder
          id="3"
          name="ui"
        >
          <File
            id="4"
            name="Button.vue"
          />
          <File
            id="5"
            name="Card.vue"
          />
          <File
            id="6"
            name="Input.vue"
          />
        </Folder>
        <File
          id="7"
          name="Header.vue"
        />
        <File
          id="8"
          name="Footer.vue"
        />
      </Folder>
      <Folder
        id="9"
        name="composables"
      >
        <File
          id="10"
          name="useAuth.ts"
          :is-selectable="false"
        />
        <File
          id="11"
          name="useTheme.ts"
        />
      </Folder>
      <Folder
        id="12"
        name="layouts"
      >
        <File
          id="13"
          name="default.vue"
        />
        <File
          id="14"
          name="auth.vue"
          :is-selectable="false"
        />
      </Folder>
      <Folder
        id="15"
        name="pages"
      >
        <File
          id="16"
          name="index.vue"
        />
        <File
          id="17"
          name="about.vue"
        />
        <Folder
          id="18"
          name="auth"
          :is-selectable="false"
        >
          <File
            id="19"
            name="login.vue"
          />
          <File
            id="20"
            name="register.vue"
          />
        </Folder>
      </Folder>
      <File
        id="21"
        name="app.vue"
      />
      <File
        id="22"
        name="nuxt.config.ts"
      />
    </Folder>
  </Tree>
</template>

<script setup lang="ts">
import type { TreeViewElement } from "~/components/content/inspira/ui/file-tree/index";

const ELEMENTS: TreeViewElement[] = [
  {
    id: "1",
    isSelectable: true,
    name: "root",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "ui",
            children: [
              { id: "4", isSelectable: true, name: "Button.vue" },
              { id: "5", isSelectable: true, name: "Card.vue" },
              { id: "6", isSelectable: true, name: "Input.vue" },
            ],
          },
          { id: "7", isSelectable: true, name: "Header.vue" },
          { id: "8", isSelectable: true, name: "Footer.vue" },
        ],
      },
      {
        id: "9",
        isSelectable: true,
        name: "composables",
        children: [
          { id: "10", isSelectable: false, name: "useAuth.ts" },
          { id: "11", isSelectable: true, name: "useTheme.ts" },
        ],
      },
      {
        id: "12",
        isSelectable: true,
        name: "layouts",
        children: [
          { id: "13", isSelectable: true, name: "default.vue" },
          { id: "14", isSelectable: false, name: "auth.vue" },
        ],
      },
      {
        id: "15",
        isSelectable: true,
        name: "pages",
        children: [
          { id: "16", isSelectable: true, name: "index.vue" },
          { id: "17", isSelectable: true, name: "about.vue" },
          {
            id: "18",
            isSelectable: false,
            name: "auth",
            children: [
              { id: "19", isSelectable: true, name: "login.vue" },
              { id: "20", isSelectable: true, name: "register.vue" },
            ],
          },
        ],
      },
      { id: "21", isSelectable: true, name: "app.vue" },
      { id: "22", isSelectable: true, name: "nuxt.config.ts" },
    ],
  },
];
</script>
