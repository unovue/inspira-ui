<template>
  <div class="flex min-h-[32rem] w-full items-center justify-center py-4">
    <SpringCalendar :calendar-data="calendarData" />
  </div>
</template>

<script lang="ts" setup>
const calendarData = [
  { month: "APRIL", date: 22, day: "TUE" },
  { month: "APRIL", date: 23, day: "WED" },
  {
    month: "APRIL",
    date: 24,
    day: "THU",
    events: [
      { title: "Team Meeting", day: "Today", time: "2:00 PM" },
      { title: "Project Deliver", day: "Tomorrow", time: "4:00 PM" },
    ],
  },
  {
    month: "APRIL",
    date: 25,
    day: "FRI",
    events: [{ title: "Party", day: "Tomorrow", time: "5:00 PM" }],
  },
  { month: "APRIL", date: 26, day: "SAT" },
  { month: "APRIL", date: 27, day: "SUN" },
  {
    month: "APRIL",
    date: 28,
    day: "MON",
    events: [{ title: "Cry for Monday Blue", day: "Next Week", time: "10:00 AM" }],
  },
];
</script>
