<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour"/>
    <AppSelect
      :selected="selectedActivityId"
      :options="options"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>

<script setup>
import {ref} from 'vue'
import { isTimelineItemValid } from '../validators'
import AppSelect from './ui/AppSelect.vue'
import TimelineHour from './TimelineHour.vue';

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Reading' }
]

const selectedActivityId = ref(1)

</script>

<style scoped></style>
