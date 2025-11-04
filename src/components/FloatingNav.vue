<template>
  <div class="fixed bottom-8 left-1/2 -translate-x-1/2">
    <nav
      class="flex items-center justify-around w-50 px-2 rounded-full shadow-md border backdrop-blur-md bg-gray-100/90 dark:bg-[#1a1a1a]/90 text-black dark:text-white border-gray-100 dark:border-[#2a2a2a] transition-colors duration-300"
    >
      <component
        v-for="(item, i) in links"
        :key="i"
        :is="item.path.startsWith('mailto:') ? 'a' : 'router-link'"
        :href="item.path.startsWith('mailto:') ? item.path : null"
        :to="!item.path.startsWith('mailto:') ? item.path : null"
        :target="item.path.startsWith('mailto:') ? '_blank' : null"
        class="flex items-center justify-center p-2 text-xl rounded-2xl transition-all duration-300 m-1"
        :class="
          $route.path === item.path
            ? 'bg-gray-200 dark:bg-[#333333] text-black dark:text-white'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333333]'
        "
      >
        <i :class="item.icon"></i>
      </component>
    </nav>
  </div>
</template>

<script setup>
const links = [
  { icon: 'pi pi-home', path: '/' },
  { icon: 'pi pi-folder', path: '/projects' },
  { icon: 'pi pi-id-card', path: '/experience' },
  { icon: 'pi pi-envelope', path: 'mailto:ogbedivine7@gmail.com' },
]
</script>
