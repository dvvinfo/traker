<template>
  <div class="flex gap-2">
    <AppButton>
      <XMarkIcon class="h-8" />
    </AppButton>
    <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
      <option selected disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { validateSelectOptions } from '../../validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import AppButton from './AppButton.vue'

defineProps({
  selected: Number,
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  },
  placeholder: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>
