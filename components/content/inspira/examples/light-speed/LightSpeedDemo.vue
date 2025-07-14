<template>
  <div class="flex flex-col w-full font-heading gap-4">
    <div
      class="relative h-96 w-full border border-zinc-800 rounded-xl overflow-clip flex flex-col items-center justify-center gap-4"
    >
      <LightSpeed
        :key="preset"
        :effect-options="selectedPreset"
      />
      <div class="absolute top-6 text-2xl text-neutral-500">Click to speed up</div>
    </div>
    <Select v-model="preset">
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select an effect" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="effect in Object.keys(lightSpeedPresets)"
            :key="effect"
            :value="effect"
          >
            {{ getName(effect) }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { lightSpeedPresets } from "../../ui/light-speed";

const preset = ref("one");

const selectedPreset = computed(() => lightSpeedPresets[preset.value]);

function getName(key: string) {
  const names = {
    one: "Light 1",
    two: "Light 2",
    three: "Light 3",
    four: "Light 4",
    five: "Light 5",
    six: "Light 6",
  };

  return names[key];
}
</script>
