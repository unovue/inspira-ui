<script lang="ts" setup>
import { useSlots } from "vue";
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

const slots = useSlots();
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
        :show-credits="Boolean(slots.credits)"
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
      <div
        class="border-default/70 text-muted flex h-32 items-center justify-center gap-3 border text-sm"
      >
        <UIcon
          name="line-md:loading-twotone-loop"
          size="28"
        />
        <span> Loading component info </span>
      </div>
    </template>
  </Suspense>
</template>
