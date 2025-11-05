<script setup>
import { ref } from 'vue'
import FadeUpSection from '../components/FadeUpSection.vue'

// get current year
const currentYear = new Date().getFullYear()

// determine greeting based on time
const hour = new Date().getHours()
const greeting = ref('')

if (hour >= 4 && hour < 12) {
  greeting.value = 'Have a nice morning!'
} else if (hour >= 12 && hour < 16) {
  greeting.value = 'Have a nice afternoon!'
} else if (hour >= 16 && hour < 24) {
  greeting.value = 'Have a nice evening!'
} else {
  greeting.value = 'Have a restful night!'
}
</script>
<template>
  <div
    class="flex justify-between items-center mt-10 border-t border-gray-200 dark:border-gray-800 pt-4 text-sm text-gray-800 dark:text-gray-400"
  >
    <span>© {{ currentYear }} Divine Eboigbe</span>
    <span>{{ greeting }}</span>
  </div>
</template>
