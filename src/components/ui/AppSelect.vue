<template>
  <div class="flex gap-2">
    <AppButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </AppButton>
    <select
      @change="emit('select', +$event.target.value)"
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
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
import { computed } from 'vue'
import { validateSelectOptions, isNumberOrNull, isUndefinedOrNull } from '../../validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import AppButton from './AppButton.vue'

const props = defineProps({
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

const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => {
  return isUndefinedOrNull(props.selected)
})
</script>

<style scoped></style>
