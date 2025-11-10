<script setup lang="ts">
import type { Controls } from "@/types/control";
import { ref } from "vue";

interface Props {
  config: Controls;
  values: any;
  title?: string;
  onUpdate: (key: string, value: any) => void;
  onReset: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Controls",
});

const collapsed = ref(false);

const updateValue = (key: string, event: Event) => {
  const target = event.target as HTMLInputElement | HTMLSelectElement;
  let value: any;

  if (target.type === "checkbox") {
    value = (target as HTMLInputElement).checked;
  } else if (target.type === "number") {
    value = Number.parseFloat(target.value) || 0;
  } else if (target.type === "range") {
    value = Number.parseFloat(target.value) || 0;
  } else {
    value = target.value;
  }

  props.onUpdate(key, value);
};

const getOptionValue = (option: any): string => {
  return typeof option === "object" ? option.value : option;
};

const getOptionLabel = (option: any): string => {
  return typeof option === "object" ? option.label : option;
};

const reset = () => {
  props.onReset();
};
</script>

<template>
  <div
    class="controls-panel"
    :class="{ collapsed }"
  >
    <div
      class="panel-header"
      @click="collapsed = !collapsed"
    >
      <h3>{{ title }}</h3>
      <span class="toggle-icon">{{ collapsed ? "▶" : "▼" }}</span>
    </div>

    <div>
      <div
        v-for="(control, key) in config"
        :key="String(key)"
        class="control-item"
      >
        <ULabel :for="String(key)">
          {{ control.label || String(key) }}
        </ULabel>

        <div class="control-input">
          <!-- Number Input -->
          <UInput
            v-if="control.type === 'number'"
            :id="String(key)"
            type="number"
            :value="values[key]"
            :step="control.step || 1"
            class="control-number"
            @input="updateValue(key, $event)"
          />

          <!-- Range Input -->
          <input
            v-else-if="control.type === 'range'"
            :id="String(key)"
            type="range"
            :value="values[key]"
            :min="control.min || 0"
            :max="control.max || 100"
            :step="control.step || 1"
            class="control-range"
            @input="updateValue(key, $event)"
          >

          <!-- Color Input -->
          <input
            v-else-if="control.type === 'color'"
            :id="String(key)"
            type="color"
            :value="values[key]"
            class="control-color"
            @input="updateValue(key, $event)"
          >

          <!-- Text Input -->
          <input
            v-else-if="control.type === 'text'"
            :id="String(key)"
            type="text"
            :value="values[key]"
            class="control-text"
            @input="updateValue(key, $event)"
          >

          <!-- Boolean Input -->
          <input
            v-else-if="control.type === 'boolean'"
            :id="String(key)"
            type="checkbox"
            :checked="values[key]"
            class="control-checkbox"
            @change="updateValue(key, $event)"
          >

          <!-- Select Input -->
          <select
            v-else-if="control.type === 'select'"
            :id="String(key)"
            :value="values[key]"
            class="control-select"
            @change="updateValue(key, $event)"
          >
            <option
              v-for="option in control.options"
              :key="getOptionValue(option)"
              :value="getOptionValue(option)"
            >
              {{ getOptionLabel(option) }}
            </option>
          </select>
        </div>

        <!-- Value display for range -->
        <span
          v-if="control.type === 'range'"
          class="range-value"
        >
          {{ values[key] }}
        </span>
      </div>

      <button
        class="reset-button"
        @click="reset"
      >
        Reset
      </button>
    </div>
  </div>
</template>
