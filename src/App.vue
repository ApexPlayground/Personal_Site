<template>
  <!-- Outer wrapper with margin around the whole page -->
  <div class="min-h-screen bg-white dark:bg-[#111111] text-black dark:text-white p-4">
    <div class="max-w-full font-semibold sm:max-w-3xl mx-auto">
      <HeaderComponent />
    </div>
    <div class="mb-20 sm:mb-5">
      <router-view />
    </div>

    <FloatingNav />

    <div class="max-w-3xl mx-auto mb-36">
      <Footer />
    </div>

    <MouseFollower />
  </div>
</template>

<script setup>
import FloatingNav from './components/FloatingNav.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import MouseFollower from './components/MouseFollower.vue'
import Footer from './components/Footer.vue'
</script>
