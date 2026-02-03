<template>
  <button
    @click="toggleDarkMode"
    class="px-3 py-1 rounded-2xl bg-gray-200 dark:bg-gray-700 dark:text-white"
  >
    <i v-if="isDark" class="pi pi-sun"></i>
    <i v-else class="pi pi-moon"></i>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function toggleDarkMode() {
  //opposite of isDark
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)

  // remember user choise
  localStorage.setItem('darkMode', isDark.value)
}

onMounted(() => {
  isDark.value = localStorage.getItem('darkMode') === 'true'
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>
