<script setup lang="ts">
const route = useRoute();
const appConfig = useAppConfig();
const { t } = useDocusI18n();
const { isEnabled, open } = useAssistant();

const showAd = useMediaQuery("(min-width: 1024px)");

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
    .filter((link) =>
      ["Star on Github", "Join Discord", "Create Issue", "Forum"].includes(link.label),
    )
    .map((link) => ({
      ...link,
      label: communityLabels[link.label] ?? link.label,
    }));
});
</script>

<template>
  <div class="hidden lg:flex lg:flex-col lg:gap-4">
    <div
      v-if="showExplainWithAi"
      class="bg-elevated/45 ring-default/70 rounded-2xl p-2 ring"
    >
      <UButton
        :icon="explainIcon"
        :label="t('assistant.explainWithAi')"
        block
        color="neutral"
        variant="ghost"
        size="sm"
        class="justify-start rounded-xl"
        :ui="{ leadingIcon: 'size-4' }"
        @click="open(`Explain the page ${pageUrl}`, true)"
      />
    </div>

    <div
      v-if="communityLinks.length"
      class="bg-elevated/45 ring-default/70 mt-11 gap-4 rounded-2xl p-2 ring"
    >
      <div
        class="text-toned px-2.5 pt-1.5 pb-2 text-[0.65rem] font-medium tracking-[0.18em] uppercase"
      >
        Community
      </div>

      <div class="grid gap-1">
        <UButton
          v-for="link in communityLinks"
          :key="link.label"
          v-bind="link"
          color="neutral"
          variant="ghost"
          size="sm"
          class="justify-start rounded-xl"
          :ui="{
            leadingIcon: 'size-4 text-muted',
            label: 'truncate text-left',
          }"
        />
      </div>
    </div>

    <InspiraProUpsell />

    <HireTheCreator />

    <ClientOnly v-if="showAd">
      <InspiraCarbonAds
        class="bg-elevated/45 text-default ring-default/70 w-full rounded-2xl border-0 ring dark:bg-white/[0.035]"
      />
    </ClientOnly>
  </div>
</template>
