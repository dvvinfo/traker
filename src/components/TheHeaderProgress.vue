<template>
  <RouterLink to="/progress">
    <div v-if="true" class="flex items-center gap-1 text-sm">
      <span class="">day complete!</span>
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1 text-sm">
      <div class="">Progress: <span class="font-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped></style>
