<template>
  <div class="flex flex-col gap-2 w-full min-h-96">
    <div class="w-full border mt-4 rounded-lg p-4 flex items-center justify-center h-96 relative">
      <span class="absolute inset-0 flex items-center justify-center text-4xl">Hover Here</span>
      <ImageTrailCursor
        :key="selectedVariant"
        :images="images"
        :variant="selectedVariant"
      />
    </div>
    <Select v-model="selectedVariant">
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select Variant" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="variant in Object.keys(variants)"
            :key="variant"
            :value="variant"
          >
            {{ (variants as any)[variant] }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<script lang="ts" setup>
import type { VariantType } from "../../ui/image-trail-cursor/ImageTrailCursor.vue";

const images = [
  "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/16245254/pexels-photo-16245254/free-photo-of-chatgpt-a-chatbot-for-your-website.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2333293/pexels-photo-2333293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const variants = {
  type1: "Type 1",
  type2: "Type 2",
  type3: "Type 3",
  type4: "Type 4",
  type5: "Type 5",
  type6: "Type 6",
  type7: "Type 7",
};

const selectedVariant = ref<VariantType>("type2");
</script>
