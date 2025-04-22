<template>
  <MotionConfig :transition="{ duration: 0.7, type: 'spring', bounce: 0.5 }">
    <Motion
      layout
      as="div"
      class="flex w-full max-w-lg flex-col gap-6 overflow-hidden rounded-3xl border bg-muted/50 p-8"
      :animate="{
        height: calendarData[activeIndex].events ? 'auto' : 'fit',
      }"
    >
      <TextMorph
        :text="calendarData[activeIndex].day"
        class="w-fit font-bold"
        :morph-time="0.5"
        :cool-down-time="0.1"
      />

      <Motion
        v-if="calendarData[activeIndex].events"
        :key="'event-container' + Math.random()"
        layout
        as="div"
        class="flex flex-col gap-4"
        :initial="{ x: 10, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
      >
        <Motion
          as="div"
          class="flex items-center gap-2"
          layout
          :initial="{ x: 10, opacity: 0 }"
          :animate="{ x: 0, opacity: 1 }"
        >
          <Icon name="lucide:calendar" />
          <span class="font-medium">Upcoming Events</span>
        </Motion>

        <div class="flex flex-wrap gap-4">
          <Motion
            v-for="event in calendarData[activeIndex].events"
            :key="event.title + event.time + Math.random()"
            as="div"
            layout
            class="w-full max-w-44 rounded-lg border p-3"
            :initial="{ x: 10, opacity: 0 }"
            :animate="{ x: 0, opacity: 1 }"
          >
            <p class="text-sm font-medium">{{ event.title }}</p>
            <p class="text-xs text-muted-foreground">{{ event.day }}, {{ event.time }}</p>
          </Motion>
        </div>
      </Motion>

      <div class="flex flex-wrap gap-3">
        <Motion
          v-for="(day, index) in calendarData"
          :key="day.date + '-' + index"
          as="button"
          layout
          class="flex flex-col rounded-2xl border border-border p-3 text-center opacity-100 duration-200 hover:bg-muted-foreground/10"
          :class="activeIndex === index ? 'bg-muted-foreground/5' : ''"
          :while-hover="{ scale: 1.1 }"
          :while-press="{ scale: 0.8 }"
          :transition="{ duration: 0.01 }"
          @click="setActive(index)"
        >
          <span class="text-xs font-medium uppercase">{{ day.month }}</span>
          <span class="font-semibold">{{ day.date }}</span>
          <span class="text-xs font-medium uppercase text-primary duration-200">
            {{ day.day }}
          </span>
        </Motion>
      </div>
    </Motion>
  </MotionConfig>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Motion, MotionConfig } from "motion-v";

interface CalendarEvent {
  title: string;
  day: string;
  time: string;
}

interface CalendarDay {
  month: string;
  date: number;
  day: string;
  events?: CalendarEvent[];
}

const props = defineProps<{
  calendarData: CalendarDay[];
  initialIndex?: number;
}>();

const emit = defineEmits<{
  (e: "update:activeIndex", value: number): void;
}>();

const activeIndex = ref(props.initialIndex ?? 0);

function setActive(index: number) {
  activeIndex.value = index;
  emit("update:activeIndex", index);
}
</script>
