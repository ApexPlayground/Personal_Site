<template>
  <!-- Outer wrapper with margin around the whole page -->
  <div class="min-h-screen bg-white dark:bg-[#111111] text-black dark:text-white p-4">
    <div class="max-w-full sm:max-w-2xl mx-auto">
      <HeaderComponent />
      <main class="mt-6">
        <ContentComponent />
      </main>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
</script>
