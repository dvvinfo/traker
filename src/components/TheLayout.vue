<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class=" flex-grow flex-col ">
      <slot/>
  </main>
  <TheNavbar/>
  </div>
</template>

<script setup>
import TheHeader from './TheHeader.vue'
import TheNavbar from './TheNavbar.vue';
</script>

<style lang="scss" scoped></style>
