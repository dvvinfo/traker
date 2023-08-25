<template>
  <TheLayout>
    <div class="mt-7">
      <ul>
        <TimelineItem
          v-for="timelineItem in TimelineItems"
          :key="timelineItem.hour"
          :timeline-item="timelineItem"
        />
        
      </ul>
    </div>
  </TheLayout>
</template>

<script setup>
import { generateTimelineItem } from '../functions'
import TheLayout from '../components/TheLayout.vue'
import TimelineItem from '../components/TimelineItem.vue'

const TimelineItems = generateTimelineItem()
</script>

<style scoped></style>
