<template>
  <div class="fixed bottom-8 left-1/2 -translate-x-1/2">
    <nav
      class="flex items-center justify-around px-2 rounded-full shadow-md border backdrop-blur-md bg-gray-100/70 dark:bg-[#1a1a1a]/70 text-black dark:text-white border-gray-100 dark:border-[#2a2a2a] transition-colors duration-300">
      <template v-for="(item, i) in links" :key="i">

        <!-- Download button -->
        <a v-if="item.download" :href="item.path" download
          class="flex items-center justify-center p-2 text-xl rounded-2xl transition-all duration-300 m-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333333]">
          <i :class="item.icon"></i>
        </a>

        <!-- Mailto -->
        <a v-else-if="item.path.startsWith('mailto:')" :href="item.path" target="_blank"
          class="flex items-center justify-center p-2 text-xl rounded-2xl transition-all duration-300 m-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333333]">
          <i :class="item.icon"></i>
        </a>

        <!-- Router link -->
        <router-link v-else :to="item.path"
          class="flex items-center justify-center p-2 text-xl rounded-2xl transition-all duration-300 m-1" :class="$route.path === item.path
            ? 'bg-gray-200 dark:bg-[#333333] text-black dark:text-white'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333333]'">
          <i :class="item.icon"></i>
        </router-link>

      </template>
    </nav>
  </div>
</template>

<script setup>
const links = [
  { icon: 'pi pi-home', path: '/' },
  { icon: 'pi pi-folder', path: '/projects' },
  { icon: 'pi pi-envelope', path: 'mailto:ogbedivine7@gmail.com' },
  { icon: 'pi pi-download', path: '/divine_eboigbe_cv.pdf', download: true },
]
</script>