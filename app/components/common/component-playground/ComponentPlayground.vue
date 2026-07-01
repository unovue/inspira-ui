<script setup lang="ts">
const open = ref(false);
const refreshKey = ref(0);
const configBody = ref<HTMLElement | null>(null);

const isDesktop = useMediaQuery("(min-width: 768px)");
const labelSegmentSeparator = /\./g;
const labelCamelBoundary = /([a-z0-9])([A-Z])/g;
const labelAcronymBoundary = /([A-Z])([A-Z][a-z])/g;
const labelWordSeparator = /[_-]/g;
const labelWhitespace = /\s+/g;
const labelFirstCharacter = /^./;

function refreshPreview() {
  refreshKey.value += 1;
}

function humanizeConfigLabel(value: string) {
  return value
    .replace(labelSegmentSeparator, " / ")
    .replace(labelCamelBoundary, "$1 $2")
    .replace(labelAcronymBoundary, "$1 $2")
    .replace(labelWordSeparator, " ")
    .replace(labelWhitespace, " ")
    .trim()
    .replace(labelFirstCharacter, (char) => char.toUpperCase());
}

function humanizeConfigLabels() {
  const root = configBody.value;
  if (!root) return;

  root.querySelectorAll<HTMLLabelElement>(".form-field label").forEach((label) => {
    label.dataset.rawLabel ||= label.textContent?.trim() ?? "";
    label.textContent = humanizeConfigLabel(label.dataset.rawLabel);
  });
}

watch(open, async (isOpen) => {
  if (!isOpen) return;

  await nextTick();
  humanizeConfigLabels();
});

onUpdated(() => {
  if (!open.value) return;

  nextTick(humanizeConfigLabels);
});
</script>

<template>
  <div class="flex w-full flex-col items-start justify-start gap-4">
    <div
      class="bg-elevated/70 ring-default/70 relative w-full overflow-hidden rounded-[2.5rem] p-2 shadow-[0_28px_90px_-58px_rgba(15,23,42,0.62)] ring dark:bg-white/[0.035] dark:shadow-none"
    >
      <div
        class="bg-default ring-default/70 relative min-h-88 overflow-hidden rounded-4xl ring sm:min-h-96"
      >
        <div
          aria-hidden="true"
          class="bg-primary/8 pointer-events-none absolute top-0 right-12 size-56 rounded-full blur-3xl"
        />

        <div class="absolute top-4 right-4 z-40 flex items-center gap-2">
          <UButton
            icon="i-lucide-refresh-cw"
            color="neutral"
            variant="subtle"
            size="sm"
            aria-label="Refresh preview"
            title="Refresh preview"
            class="grid size-9 place-items-center rounded-full p-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
            :ui="{ leadingIcon: 'size-4 shrink-0' }"
            @click="refreshPreview"
          />
          <UButton
            v-if="$slots.config"
            icon="i-lucide-sliders-horizontal"
            color="neutral"
            variant="subtle"
            size="sm"
            aria-label="Customize props"
            title="Customize props"
            class="grid size-9 place-items-center rounded-full p-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
            :ui="{ leadingIcon: 'size-4 shrink-0' }"
            @click="open = true"
          />
        </div>

        <div
          :key="`stageRefreshKey${refreshKey}`"
          class="relative flex min-h-88 items-center justify-center p-6 sm:min-h-96 sm:p-8"
        >
          <slot name="component" />
        </div>
      </div>
    </div>

    <UDrawer
      v-if="$slots.config"
      v-model:open="open"
      :direction="isDesktop ? 'right' : 'bottom'"
      :overlay="!isDesktop"
      :dismissible="!isDesktop"
      :handle="!isDesktop"
      :modal="!isDesktop"
      :inset="isDesktop"
      :ui="{
        content:
          'bg-default/92 ring-default/70 shadow-[0_32px_120px_-56px_rgba(15,23,42,0.72)] backdrop-blur-xl md:w-108 md:rounded-[1.75rem]',
        container: 'h-full gap-0 overflow-hidden p-0',
        header: 'border-muted/60 shrink-0 border-b px-5 py-4',
        body: 'bg-elevated/15 min-h-0 flex-1 overflow-y-auto',
      }"
    >
      <template #header>
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0 pt-0.5">
            <div class="text-muted mb-1 text-[0.65rem] font-medium tracking-[0.18em] uppercase">
              Playground
            </div>
            <h2 class="text-highlighted text-base leading-tight font-semibold">Fine tune</h2>
            <p class="text-muted mt-1 text-xs">Every change updates the preview.</p>
          </div>

          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-x"
            aria-label="Close customize panel"
            class="grid size-9 shrink-0 place-items-center rounded-full p-0 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
            :ui="{ leadingIcon: 'size-4 shrink-0' }"
            @click="open = false"
          />
        </div>
      </template>
      <template #body>
        <div
          ref="configBody"
          class="config-control-stack"
        >
          <slot name="config" />
        </div>
      </template>
    </UDrawer>
  </div>
</template>

<style scoped>
.config-control-stack {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.75rem;
}

.config-control-stack :deep(.form-field) {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(8rem, auto);
  align-items: center;
  min-height: 3.5rem;
  gap: 1rem;
  border-radius: 1rem;
  background: linear-gradient(
    180deg,
    color-mix(in oklab, var(--ui-bg-elevated) 62%, transparent),
    color-mix(in oklab, var(--ui-bg-elevated) 36%, transparent)
  );
  box-shadow:
    inset 0 1px 0 color-mix(in oklab, var(--ui-border-muted) 44%, transparent),
    0 1px 0 color-mix(in oklab, var(--ui-bg) 82%, transparent);
  padding: 0.7rem 0.875rem;
  transition:
    background-color 160ms cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 160ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
}

.config-control-stack :deep(.form-field:has(textarea)) {
  grid-template-columns: minmax(0, 1fr);
  align-items: stretch;
}

.config-control-stack :deep(.form-field > div) {
  min-width: 0;
}

.config-control-stack :deep(.form-field > div:last-child) {
  display: flex;
  justify-content: flex-end;
  margin-top: 0;
}

.config-control-stack :deep(.form-field:has(textarea) > div:last-child) {
  justify-content: stretch;
}

.config-control-stack :deep(.form-field label) {
  color: var(--ui-text-muted);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.35;
}

.config-control-stack :deep(.form-field input),
.config-control-stack :deep(.form-field textarea) {
  font-size: 0.8125rem;
}

.config-control-stack :deep(.form-field > div:last-child > .relative.inline-flex),
.config-control-stack :deep(.form-field > div:last-child > button) {
  max-width: min(100%, 13rem);
}

.config-control-stack :deep(.form-field > div:last-child > .relative.inline-flex) {
  border-radius: 9999px;
}

.config-control-stack :deep(.form-field > div:last-child > .relative.inline-flex input),
.config-control-stack :deep(.form-field > div:last-child > button),
.config-control-stack :deep(.form-field textarea) {
  min-height: 2.25rem;
  border-radius: 0.875rem;
}

.config-control-stack :deep(.form-field textarea) {
  min-height: 6.5rem;
  resize: vertical;
}

.config-control-stack :deep(.form-field > div:last-child > .relative.inline-flex) {
  background-color: color-mix(in oklab, var(--ui-bg) 72%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--ui-border-muted) 78%, transparent);
}

@media (hover: hover) and (pointer: fine) {
  .config-control-stack :deep(.form-field:hover) {
    background-color: color-mix(in oklab, var(--ui-bg-elevated) 72%, transparent);
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, var(--ui-border) 58%, transparent),
      0 10px 32px -28px color-mix(in oklab, var(--ui-text) 28%, transparent);
    transform: translateY(-1px);
  }
}

@media (max-width: 480px) {
  .config-control-stack :deep(.form-field) {
    grid-template-columns: minmax(0, 1fr);
    align-items: stretch;
  }

  .config-control-stack :deep(.form-field > div:last-child) {
    justify-content: stretch;
  }

  .config-control-stack :deep(.form-field > div:last-child > .relative.inline-flex),
  .config-control-stack :deep(.form-field > div:last-child > button) {
    width: 100%;
    max-width: none;
  }
}
</style>
