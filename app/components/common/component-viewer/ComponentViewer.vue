<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui";

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

const items = ref<TabsItem[]>([
  {
    label: "Preview",
    icon: "tabler:eye",
    slot: "preview",
  },
  {
    label: "Code",
    icon: "tabler:code",
    slot: "code",
  },
]);

if (showInstallation) {
  items.value.push({
    label: "Installation",
    icon: "si:lightning-line",
    slot: "installation",
  });

  items.value.push({
    label: "Credits",
    icon: "tabler:heart-handshake",
    slot: "creditsTab",
  });
}

const demoCode = ref<string>("");
const componentCode = ref<string>("");
const componentsList = ref<{ ext: string; fileName: string; code: string }[]>([]);

const installationItems = ref<TabsItem[]>([
  {
    label: "CLI",
    icon: "tabler:terminal",
    slot: "cli",
  },
  {
    label: "Manually",
    icon: "tabler:notes",
    slot: "manual",
  },
]);

async function loadDemoCode() {
  const codeGetter = getComponentCode({
    fileName: demoFile,
    id: componentId,
    type: "examples",
  });

  if (codeGetter) {
    demoCode.value = (await codeGetter()) as unknown as string;
    demoCode.value = `
## Component Usage


::code-collapse

\`\`\`${demoFile.split(".").at(-1)} [${demoFile}]
${demoCode.value}
\`\`\`

::
    `;
  }
}

async function loadComponentCodes() {
  if (!componentFiles) return;

  const promises = componentFiles.map(async (fileName) => {
    const codeGetter = getComponentCode({
      fileName,
      id: componentId,
      type: "ui",
    });

    if (codeGetter) {
      const code = (await codeGetter()) as unknown as string;
      componentsList.value.push({
        fileName,
        ext: fileName.split(".").at(-1)!,
        code,
      });
    }
  });

  // Wait for all async operations to complete
  await Promise.all(promises);

  componentCode.value = `
::code-group
${componentsList.value.map((item) => `\`\`\`${item.ext} [${item.fileName}]\n${item.code}\n\`\`\`\n`).join("\n")}
::`;
}

onMounted(() => {
  loadDemoCode();
  loadComponentCodes();
});
</script>

<template>
  <UTabs
    size="xl"
    variant="pill"
    :items="items"
    class="min-h-[60vh] w-full"
    :ui="{
      list: 'w-fit max-sm:w-full bg-transparent gap-4 self-start overflow-scroll',
      trigger: 'w-fit outline outline-neutral-200 dark:outline-neutral-800',
      content: 'py-4',
    }"
    :unmount-on-hide="false"
  >
    <template #preview>
      <ClientOnly>
        <component :is="config" />
      </ClientOnly>

      <slot
        name="api"
        class="my-4"
      />
    </template>

    <template #code>
      <MDC
        :key="demoCode"
        :value="demoCode"
        class="-mt-12"
      />
    </template>

    <template
      v-if="showInstallation"
      #installation
    >
      <div class="mb-4 text-lg italic">
        Install component by either CLI or Manually copy-pasting.
      </div>
      <UTabs :items="installationItems">
        <template #cli>
          <RegistryTabs :component-id="componentId" />
        </template>

        <template #manual>
          <div
            v-if="devDependencies || dependencies"
            class="my-4 text-base"
          >
            This component requires following dependencies to be installed.
          </div>
          <PmTabs
            v-if="devDependencies"
            :is-dev="true"
            :package-name="devDependencies"
          />

          <PmTabs
            v-if="dependencies"
            :package-name="dependencies"
          />

          <slot name="instructions" />

          <div class="mt-8 mb-4 text-base">
            Copy and paste the following code in your project. Update imports according to your
            project.
          </div>

          <MDC
            v-if="componentCode"
            :key="componentCode"
            :value="componentCode"
          />
        </template>
      </UTabs>
    </template>

    <template
      v-if="showInstallation"
      #creditsTab
    >
      <UPageCard class="bg-default/15">
        <slot name="credits" />
      </UPageCard>
    </template>
  </UTabs>
</template>
