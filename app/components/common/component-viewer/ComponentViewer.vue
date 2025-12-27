<script lang="ts" setup>
import ComponentTabs from "./ComponentTabs.vue";

interface Props {
  devDependencies?: string;
  dependencies?: string;
  componentId: string;
  showInstallation?: boolean;
  demoFile: string;
  componentFiles?: string[];
  config: string;
}

const {
  devDependencies = undefined,
  dependencies = undefined,
  showInstallation = true,
  componentId,
  componentFiles = [],
  demoFile,
  config,
} = defineProps<Props>();
</script>

<template>
  <Suspense>
    <ClientOnly>
      <ComponentTabs
        :dev-dependencies="devDependencies"
        :dependencies="dependencies"
        :show-installation="showInstallation"
        :component-id="componentId"
        :component-files="componentFiles"
        :demo-file="demoFile"
        :config="config"
      >
        <template #api>
          <slot name="api" />
        </template>

        <template #credits>
          <slot name="credits" />
        </template>

        <template #instructions>
          <slot name="instructions" />
        </template>
      </ComponentTabs>
    </ClientOnly>
    <template #fallback>
      <div class="flex h-32 items-center justify-center gap-3 text-lg">
        <UIcon
          name="line-md:loading-twotone-loop"
          size="28"
        />
        <span> Loading component info </span>
      </div>
    </template>
  </Suspense>
</template>
