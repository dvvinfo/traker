<template>
  <li class="flex-1">
    <RouterLink :to="to" class="flex flex-col p-2 text-xs capitalize items-center">
      <slot></slot>
      {{ title }}
    </RouterLink>
  </li>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    navItems: {
        type: Object
    }
})
</script>

<style scoped></style>
