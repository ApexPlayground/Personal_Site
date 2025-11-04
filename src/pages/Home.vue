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
  <section class="max-w-3xl mx-auto mt-12">
    <!-- about me -->
    <FadeUpSection :delay="0">
      <div class="text-base leading-relaxed text-gray-800 dark:text-gray-300 space-y-5">
        <p>
          I’m a backend and cloud engineer with a strong interest in understanding how systems
          behave beneath the surface, from the first network request to the final log entry. I enjoy
          building software that’s not just functional, but clear, structured, and maintainable.
        </p>

        <p>
          With a Master's in Cybersecurity and a CS background, I approach development with a
          security-first mindset. I specialize in Go, Python, and Java, building secure cloud-native
          systems and automating workflows.
        </p>

        <p>
          I value consistency, improving through deliberate practice, writing code that shows
          understanding, and leaving every system simpler and stronger than before.
        </p>

        <p>
          Outside of work, I enjoy running, exploring system design, and experimenting with small
          projects that test how things are built and secured.
        </p>
      </div>

      <!-- socials -->
      <div class="flex flex-wrap gap-4 mt-16">
        <a
          href="https://www.linkedin.com/in/divine-eboigbe-a63483205/"
          target="_blank"
          class="px-4 py-2 rounded-full border border-gray-200 dark:border-[#2a2a2a] bg-gray-100 dark:bg-[#222222] hover:bg-gray-200 dark:hover:bg-[#333333] text-gray-800 dark:text-gray-200 shadow-sm transition duration-300 flex items-center gap-2"
        >
          <i class="pi pi-linkedin text-blue-600 dark:text-blue-400"></i>
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/ApexPlayground"
          target="_blank"
          class="px-4 py-2 rounded-full border border-gray-200 dark:border-[#2a2a2a] bg-gray-100 dark:bg-[#222222] hover:bg-gray-200 dark:hover:bg-[#333333] text-gray-800 dark:text-gray-200 shadow-sm transition duration-300 flex items-center gap-2"
        >
          <i class="pi pi-github text-gray-700 dark:text-gray-300"></i>
          <span>GitHub</span>
        </a>
      </div>
    </FadeUpSection>

    <!-- skills -->
    <FadeUpSection :delay="0.2">
      <section class="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
        <h2 class="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400 mb-6">
          Skills & Tools
        </h2>

        <div class="space-y-6">
          <!-- Skills 1 -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-600 dark:text-gray-300"
            >
              <i class="pi pi-code text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-1">Languages</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Python, Go, Java, JavaScript</p>
            </div>
          </div>

          <!-- Skill 2 -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-600 dark:text-gray-300"
            >
              <i class="pi pi-server text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-1">Frameworks & Backend</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Go-Chi, Vue.js, Spring Boot, FastAPI
              </p>
            </div>
          </div>

          <!-- Skill  3 -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-600 dark:text-gray-300"
            >
              <i class="pi pi-cloud text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-1">Cloud</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Google Cloud, AWS, Docker, Linux
              </p>
            </div>
          </div>

          <!-- Skill  4 -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-600 dark:text-gray-300"
            >
              <i class="pi pi-database text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-1">Databases</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">PostgreSQL, MySQL</p>
            </div>
          </div>

          <!-- Skill  5 -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-600 dark:text-gray-300"
            >
              <i class="pi pi-cog text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-1">Tools</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Git, Bash, Postman</p>
            </div>
          </div>
        </div>

        <!-- Footer line -->
        <div
          class="flex justify-between items-center mt-10 border-t border-gray-200 dark:border-gray-800 pt-4 text-sm text-gray-500 dark:text-gray-400"
        >
          <span>© {{ currentYear }} Divine Eboigbe</span>
          <span>{{ greeting }}</span>
        </div>
      </section>
    </FadeUpSection>
  </section>
</template>
