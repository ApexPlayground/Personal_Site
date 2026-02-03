<template>
  <div class="flex justify-between">
    <router-link to="/" class="inline-block hover:opacity-80 transition-opacity duration-200">
      <h2 class="text-sm">
        Divine Eboigbe<br />
        <span class="text-gray-500">Software Engineer</span>
      </h2>
    </router-link>

    <DarkModeToggle></DarkModeToggle>
  </div>
</template>

<script setup>
import DarkModeToggle from './DarkModeToggle.vue'
</script>
