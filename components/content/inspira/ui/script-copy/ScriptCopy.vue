<template>
  <div :class="cn('mx-auto flex max-w-md items-center justify-center', $props.class)">
    <div class="w-full space-y-2">
      <div class="mb-2 flex items-center justify-between">
        <div
          v-if="showMultiplePackageOptions"
          class="relative"
        >
          <div class="inline-flex overflow-hidden rounded-sm border border-border text-xs">
            <div
              v-for="(pm, index) in packageManagers"
              :key="pm"
              class="flex items-center"
            >
              <div
                v-if="index > 0"
                class="h-4 w-px bg-border"
                aria-hidden="true"
              />
              <button
                type="button"
                :class="[
                  'relative rounded-none bg-background px-2 py-1 hover:bg-background focus:outline-none',
                  packageManager === pm ? 'text-primary' : 'text-muted-foreground',
                ]"
                @click="() => (packageManager = pm)"
              >
                {{ pm }}
                <transition
                  name="tab-underline"
                  type="transition"
                  mode="out-in"
                >
                  <div
                    v-if="packageManager === pm"
                    class="absolute inset-x-0 bottom-px mx-auto h-0.5 w-[90%] bg-primary"
                  />
                </transition>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="relative flex items-center gap-2">
        <div class="min-w-[300px] grow font-mono">
          <!-- eslint-disable vue/no-v-html -->
          <div
            v-if="highlightedCode"
            :class="[
              '[&>pre]:overflow-x-auto [&>pre]:rounded-sm [&>pre]:p-2 [&>pre]:px-4 [&>pre]:font-mono',
              theme === 'dark' ? 'dark' : 'light',
            ]"
            v-html="highlightedCode"
          />
          <!--eslint-enable-->
          <pre
            v-else
            class="rounded-sm border border-border bg-white p-2 px-4 font-mono dark:bg-black"
            >{{ currentCommand }}
          </pre>
        </div>

        <button
          type="button"
          class="relative grid place-items-center rounded-sm border border-border bg-background p-2 hover:bg-accent focus:outline-none"
          :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
          @click="copyToClipboard"
        >
          <span class="sr-only">{{ copied ? "Copied" : "Copy" }}</span>

          <transition
            name="icon-scale"
            mode="in-out"
          >
            <Icon
              v-if="!copied"
              name="lucide:copy"
              size="16"
            />
            <Icon
              v-else
              name="lucide:check"
              size="16"
            />
          </transition>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";
import { codeToHtml } from "shiki";

interface ScriptCopyButtonProps {
  class?: HTMLAttributes["class"];
  commandMap: Record<string, string>;
  showMultiplePackageOptions?: boolean;
  codeLanguage?: string;
  lightTheme?: string;
  darkTheme?: string;
  theme?: "light" | "dark";
}

const props = withDefaults(defineProps<ScriptCopyButtonProps>(), {
  showMultiplePackageOptions: true,
  theme: "dark",
  codeLanguage: "shell",
  lightTheme: "min-light",
  darkTheme: "min-dark",
});

const { showMultiplePackageOptions, codeLanguage, lightTheme, darkTheme, commandMap, theme } =
  toRefs(props);

const packageManagers = Object.keys(commandMap.value);
const packageManager = ref<string>(packageManagers[0]);

const copied = ref<boolean>(false);
const highlightedCode = ref<string>("");
const currentCommand = computed(() => commandMap.value[packageManager.value]);

async function loadHighlightedCode() {
  try {
    const highlighted = await codeToHtml(currentCommand.value, {
      lang: codeLanguage.value,
      themes: {
        light: lightTheme.value,
        dark: darkTheme.value,
      },
      defaultColor: theme.value === "dark" ? "dark" : "light",
    });
    highlightedCode.value = highlighted;
  } catch (error) {
    highlightedCode.value = `<pre>${currentCommand.value}</pre>`;
  }
}

function copyToClipboard() {
  if (!navigator?.clipboard) return;
  navigator.clipboard.writeText(currentCommand.value);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}

watch([currentCommand, theme, codeLanguage, lightTheme, darkTheme], loadHighlightedCode, {
  immediate: true,
});
</script>

<style scoped>
.icon-scale-enter-active,
.icon-scale-leave-active {
  transition: transform 0.3s;
}
.icon-scale-enter-from,
.icon-scale-leave-to {
  transform: scale(0);
}
.icon-scale-enter-to,
.icon-scale-leave-from {
  transform: scale(1);
}

.tab-underline-enter-active,
.tab-underline-leave-active {
  transition: all 0.2s ease;
}
.tab-underline-enter-from,
.tab-underline-leave-to {
  opacity: 0;
  transform: translateY(2px);
}
.tab-underline-enter-to,
.tab-underline-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
