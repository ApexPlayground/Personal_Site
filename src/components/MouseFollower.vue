<template>
  <div
    ref="cursor"
    class="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none bg-gray-800/70 dark:bg-white/20 backdrop-blur-sm mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out z-[9999]"
  ></div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

const cursor = ref(null)

onMounted(() => {
  const el = cursor.value

  const move = (e) => {
    el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  }

  // use requestAnimationFrame for smoother animation
  const handleMove = (e) => requestAnimationFrame(() => move(e))

  window.addEventListener('mousemove', handleMove)
  onUnmounted(() => window.removeEventListener('mousemove', handleMove))
})
</script>
