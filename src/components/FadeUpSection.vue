<script setup>
import { ref, onMounted } from 'vue'

// allow delay customization per section
const props = defineProps({
  delay: {
    type: Number,
    default: 0, // in seconds
  },
})

const elRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
        observer.unobserve(entries[0].target)
      }
    },
    { threshold: 0.15 },
  )

  if (elRef.value) {
    observer.observe(elRef.value)
  }
})
</script>

<template>
  <div
    ref="elRef"
    class="transition-all duration-700 ease-out transform"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    :style="isVisible ? `transition-delay: ${props.delay}s;` : ''"
  >
    <slot />
  </div>
</template>
