<template>
  <TheLayout>
    <div class="">
      <ul class="divide-y">
        <ActivityItem v-for="activity in activities" :key="activity" :activity="activity" />
      </ul>
    </div>
  </TheLayout>
</template>

<script setup>
import TheLayout from '../components/TheLayout.vue'
import ActivityItem from '../components/ActivityItem.vue'

const activities = ['Coding', 'Reading', 'Trading']
</script>

<style scoped></style>
