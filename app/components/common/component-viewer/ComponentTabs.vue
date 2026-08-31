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
  showCredits?: boolean;
}

const {
  devDependencies = undefined,
  dependencies = undefined,
  showInstallation = true,
  componentId,
  componentFiles = [],
  demoFile,
  config,
  showCredits = false,
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

  if (showInstallation && showCredits) {
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
const componentsList = ref<{ ext: string; fileName: string; code: string }[]>([]);

const componentCodeItems = computed(() =>
  componentsList.value.map((item) => ({
    label: item.fileName,
    filename: item.fileName,
    language: item.ext,
    code: item.code,
  })),
);

type ComponentCodeType = "ui" | "examples" | "configs";

const getClientComponentCode = import.meta.client
  ? async (args: { id: string; fileName: string; type: ComponentCodeType }) => {
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
  }

  isDemoCodeLoading.value = false;
}

async function loadComponentCodes() {
  if (!componentFiles.length || componentsList.value.length || isComponentCodeLoading.value) return;

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
    variant="link"
    color="neutral"
    :items="items"
    class="mt-12 w-full"
    :ui="{
      list: 'border-default/70 w-fit max-w-full gap-0 overflow-x-auto border bg-elevated/20',
      indicator: 'h-px rounded-none',
      trigger:
        'h-11 min-w-fit rounded-none border-e border-default/60 px-4 text-sm transition-colors duration-150 last:border-e-0 hover:bg-elevated/45 motion-reduce:transition-none',
      content: 'pt-8 focus:outline-none',
    }"
  >
    <template #code>
      <div
        v-if="demoCode"
        class="space-y-5"
      >
        <h2 class="text-highlighted text-xl font-semibold tracking-[-0.02em]">Component Usage</h2>

        <ProseCodeCollapse>
          <RuntimeCodeBlock
            :code="demoCode"
            :filename="demoFile"
            :language="demoFile.split('.').at(-1)"
          />
        </ProseCodeCollapse>
      </div>
      <div
        v-else
        class="border-default/70 bg-elevated/20 text-muted flex min-h-40 items-center justify-center gap-3 rounded-none border"
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
          list: 'border-default/70 w-fit gap-5 border-b',
          trigger:
            'rounded-none px-0 text-sm transition-colors duration-150 motion-reduce:transition-none',
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

          <div
            v-if="componentFiles.length"
            class="text-muted mt-8 mb-4 text-sm"
          >
            Source files
          </div>

          <RuntimeCodeGroup
            v-if="componentCodeItems.length"
            :items="componentCodeItems"
          />
          <div
            v-else-if="isComponentCodeLoading"
            class="border-default/70 bg-elevated/20 text-muted flex min-h-40 items-center justify-center gap-3 rounded-none border"
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
      <div class="py-2">
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
      <div class="py-2">
        <slot name="credits" />
      </div>
    </template>
  </UTabs>
</template>
