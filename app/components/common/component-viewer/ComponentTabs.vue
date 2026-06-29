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

const activeTab = ref("code");
const activeInstallationTab = ref("cli");
const isDemoCodeLoading = ref(false);
const isComponentCodeLoading = ref(false);

const items = computed<TabsItem[]>(() => {
  const tabs: TabsItem[] = [
    {
      label: "Code",
      icon: "tabler:code",
      slot: "code",
      value: "code",
    },
  ];

  if (showInstallation) {
    tabs.push({
      label: "Install",
      icon: "si:lightning-line",
      slot: "installation",
      value: "install",
    });
  }

  tabs.push({
    label: "API",
    icon: "tabler:list-details",
    slot: "apiTab",
    value: "api",
  });

  if (showInstallation) {
    tabs.push({
      label: "Credits",
      icon: "tabler:heart-handshake",
      slot: "creditsTab",
      value: "credits",
    });
  }

  return tabs;
});

const demoCode = ref<string>("");
const componentCode = ref<string>("");
const componentsList = ref<{ ext: string; fileName: string; code: string }[]>([]);

type ComponentCodeType = "ui" | "examples" | "configs";

const getClientComponentCode = import.meta.client
  ? async (args: {
      id: string;
      fileName: string;
      type: ComponentCodeType;
    }) => {
      const { getComponentCode } = await import("~/lib/getComponentCode.client");
      return getComponentCode(args);
    }
  : async () => undefined;

const installationItems = ref<TabsItem[]>([
  {
    label: "CLI",
    icon: "tabler:terminal",
    slot: "cli",
    value: "cli",
  },
  {
    label: "Manual",
    icon: "tabler:notes",
    slot: "manual",
    value: "manual",
  },
]);

async function loadDemoCode() {
  if (demoCode.value || isDemoCodeLoading.value) return;

  isDemoCodeLoading.value = true;

  const codeGetter = await getClientComponentCode({
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

  isDemoCodeLoading.value = false;
}

async function loadComponentCodes() {
  if (!componentFiles.length || componentCode.value || isComponentCodeLoading.value) return;

  isComponentCodeLoading.value = true;

  const promises = componentFiles.map(async (fileName) => {
    const codeGetter = await getClientComponentCode({
      fileName,
      id: componentId,
      type: "ui",
    });

    if (codeGetter) {
      const code = (await codeGetter()) as unknown as string;
      return {
        fileName,
        ext: fileName.split(".").at(-1)!,
        code,
      };
    }
  });

  componentsList.value = (await Promise.all(promises)).filter((item) => !!item);

  componentCode.value = `
::code-group
${componentsList.value.map((item) => `\`\`\`${item.ext} [${item.fileName}]\n${item.code}\n\`\`\`\n`).join("\n")}
::`;

  isComponentCodeLoading.value = false;
}

watch(
  activeTab,
  (tab) => {
    if (tab === "code") {
      loadDemoCode();
    }

    if (tab === "install" && activeInstallationTab.value === "manual") {
      loadComponentCodes();
    }
  },
  { immediate: true },
);

watch(activeInstallationTab, (tab) => {
  if (activeTab.value === "install" && tab === "manual") {
    loadComponentCodes();
  }
});
</script>

<template>
  <ClientOnly>
    <component :is="config" />
  </ClientOnly>

  <UTabs
    v-model="activeTab"
    size="lg"
    variant="pill"
    color="neutral"
    :items="items"
    class="mt-5 w-full"
    :ui="{
      list: 'w-fit max-w-full gap-1 overflow-auto rounded-full bg-elevated/70 p-1 ring ring-default/70',
      indicator: 'rounded-full',
      trigger:
        'h-10 min-w-fit rounded-full px-4 text-sm transition-[color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]',
      content: 'pt-6 focus:outline-none',
    }"
  >
    <template #code>
      <MDC
        v-if="demoCode"
        :key="demoCode"
        :value="demoCode"
      />
      <div
        v-else
        class="text-muted bg-elevated/35 ring-default/70 flex min-h-40 items-center justify-center gap-3 rounded-3xl ring"
      >
        <UIcon
          name="line-md:loading-twotone-loop"
          class="size-5"
        />
        <span>Loading code</span>
      </div>
    </template>

    <template
      v-if="showInstallation"
      #installation
    >
      <UTabs
        v-model="activeInstallationTab"
        :items="installationItems"
        variant="link"
        color="neutral"
        :ui="{
          root: 'gap-4',
          list: 'w-fit gap-5 border-muted',
          trigger:
            'px-0 text-sm transition-[color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]',
          content: 'pt-4',
        }"
      >
        <template #cli>
          <RegistryTabs :component-id="componentId" />
        </template>

        <template #manual>
          <div
            v-if="devDependencies || dependencies"
            class="text-muted mb-4 text-sm"
          >
            Install required dependencies first.
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

          <div class="text-muted mt-8 mb-4 text-sm">Source files</div>

          <MDC
            v-if="componentCode"
            :key="componentCode"
            :value="componentCode"
          />
          <div
            v-else-if="isComponentCodeLoading"
            class="text-muted bg-elevated/35 ring-default/70 flex min-h-40 items-center justify-center gap-3 rounded-3xl ring"
          >
            <UIcon
              name="line-md:loading-twotone-loop"
              class="size-5"
            />
            <span>Loading source</span>
          </div>
        </template>
      </UTabs>
    </template>

    <template #apiTab>
      <div class="bg-default/55 ring-default/70 rounded-3xl p-5 ring">
        <slot
          name="api"
          class="my-4"
        />
      </div>
    </template>

    <template
      v-if="showInstallation"
      #creditsTab
    >
      <UPageCard class="bg-default/55 ring-default/70 ring">
        <slot name="credits" />
      </UPageCard>
    </template>
  </UTabs>
</template>
