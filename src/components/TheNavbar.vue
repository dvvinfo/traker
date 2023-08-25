<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <li v-for="page in navItems" :key="page.title" class="flex-1">
        <RouterLink :to="page.to" class="flex flex-col p-2 text-xs capitalize items-center">
          <component :is="page.icon" class="h-6 w-6" />
          {{ page.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = [
  {
    title: 'TimeLine',
    to: '/',
    icon: ClockIcon
  },
  {
    title: 'Activities',
    to: '/activities',
    icon: ListBulletIcon
  },
  {
    title: 'Progress',
    to: '/progress',
    icon: ChartBarIcon
  }
]
</script>

<style  scoped>
.router-link-active{
  @apply bg-gray-200
}
</style>
