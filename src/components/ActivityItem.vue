<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <AppButton :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </AppButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div >
      <AppSelect
        class="font-mono"
        :select="secondToComplete"
        placeholder="h:mm"
        :options="periodSelectOptions"
        @select="secondToComplete = $event"
      />
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import {BUTTON_TYPE_DANGER} from '../constants'
import {isActivityValid} from '../validators'
import AppButton from './ui/AppButton.vue'
import AppSelect from './ui/AppSelect.vue'

defineProps ({
  activity: {
    required: true,
    type: String,
    validator: isActivityValid
  }
})

const secondToComplete = ref(null)

const periodSelectOptions = [
  {
    value: 15,
    label: '0:15'
  },
  {
    value: 30,
    label: '0:30'
  },

  {
    value: 15,
    label: '0:45'
  }
]
</script>

<style scoped></style>
