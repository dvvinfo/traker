<template>
  <a href="#" :class="hourLinkClasses">{{ hour.toString().padStart(2, 0) }}:00</a>
</template>

<script setup>
import { isHourValid } from '../validators'
const props = defineProps({
  hour: {
    type: Number,
    required: true,
    validator: isHourValid()
  }
})

const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg ',
  props.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]
</script>

<style scoped></style>
