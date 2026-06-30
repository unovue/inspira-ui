<script lang="ts" setup>
import type { Props as FloatingCardProps } from "../../ui/floating-card/FloatingCard.vue";
import FloatingCard from "../../ui/floating-card/FloatingCard.vue";

const config = ref<Required<Pick<FloatingCardProps, "rotateDepth" | "translateDepth">>>({
  rotateDepth: 17.5,
  translateDepth: 20,
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <FloatingCard
        :key="JSON.stringify(config)"
        v-bind="config"
      >
        <button
          type="button"
          class="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
          aria-label="View invite F7RA"
          :style="{
            transformStyle: 'preserve-3d',
            transform: 'none',
            opacity: 1,
          }"
        >
          <div class="mx-2 flex-1">
            <div class="relative mt-2 aspect-3/4 w-full">
              <span
                aria-hidden="true"
                class="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] bg-cover bg-center contrast-75"
                :style="{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 6px 0px',
                  opacity: 1,
                }"
              />
            </div>
          </div>
          <div class="mt-2 flex shrink-0 items-center justify-between p-4 font-mono text-white">
            <div class="text-xs">Comet Invitation</div>
            <div class="text-xs text-gray-300 opacity-50">#F7RA</div>
          </div>
        </button>
      </FloatingCard>
    </template>

    <template #config>
      <UFormField
        label="rotateDepth"
        class="form-field"
      >
        <UInputNumber
          v-model="config.rotateDepth"
          class="w-full max-w-32"
          :min="0"
          :max="360"
          :step="0.5"
        />
      </UFormField>

      <UFormField
        label="translateDepth"
        class="form-field"
      >
        <UInputNumber
          v-model="config.translateDepth"
          class="w-full max-w-32"
          :min="0"
          :max="100"
          :step="1"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
