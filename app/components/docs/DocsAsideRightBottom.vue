<script setup lang="ts">
const route = useRoute();
const appConfig = useAppConfig();
const { t } = useDocusI18n();
const { isEnabled, open } = useAssistant();
const showRailAd = useMediaQuery("(min-width: 1024px)");

const pageUrl = computed(() => route.path);
const showExplainWithAi = computed(() => {
  return isEnabled.value && appConfig.assistant?.explainWithAi !== false;
});

const explainIcon = computed(() => appConfig.assistant?.icons?.explain || "i-lucide-brain");
const communityLabels: Record<string, string> = {
  "Star on Github": "GitHub",
  "Create Issue": "Issues",
  "Join Discord": "Discord",
};

const communityLinks = computed(() => {
  return (appConfig.toc?.bottom?.links ?? [])
    .filter((link) => ["Star on Github", "Join Discord"].includes(link.label))
    .map((link) => ({
      ...link,
      label: communityLabels[link.label] ?? link.label,
    }));
});
</script>

<template>
  <div class="hidden lg:flex lg:flex-col lg:gap-0">
    <div
      v-if="showExplainWithAi"
      class="border-default/70 border-b py-3"
    >
      <UButton
        :icon="explainIcon"
        :label="t('assistant.explainWithAi')"
        block
        color="neutral"
        variant="ghost"
        size="sm"
        class="hover:bg-elevated/45 h-9 justify-start rounded-none px-2 transition-colors duration-150 motion-reduce:transition-none"
        :ui="{ leadingIcon: 'size-4 text-muted', label: 'font-medium' }"
        @click="open(`Explain the page ${pageUrl}`, true)"
      />
    </div>

    <HireTheCreator />

    <InspiraProUpsell />

    <div v-if="communityLinks.length">
      <div>
        <div class="flex items-center justify-between gap-3 px-2 py-3">
          <div
            class="text-toned font-mono text-[0.6875rem] font-semibold tracking-[0.12em] uppercase"
          >
            Community
          </div>
        </div>

        <div class="border-default/60 border-t">
          <UButton
            v-for="link in communityLinks"
            :key="link.label"
            v-bind="link"
            color="neutral"
            variant="ghost"
            size="sm"
            class="group border-default/60 hover:bg-elevated/45 h-10 w-full justify-start rounded-none border-b px-2 transition-colors duration-150 last:border-b-0 motion-reduce:transition-none"
            :ui="{
              leadingIcon: 'size-4 text-muted group-hover:text-toned',
              label: 'truncate text-left text-[0.8125rem] font-medium',
            }"
          />
        </div>
      </div>
    </div>

    <ClientOnly v-if="showRailAd">
      <InspiraCarbonAds class="mt-6 w-full max-w-full overflow-hidden [&_.carbon-text]:text-xs" />
    </ClientOnly>
  </div>
</template>
