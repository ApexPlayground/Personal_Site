<template>
  <section class="max-w-3xl mx-auto mt-12">
    <!-- about me -->
    <FadeUpSection :delay="0">
      <div class="text-base leading-relaxed text-gray-800 dark:text-gray-300 space-y-5">
        <p>
          Software Engineer with over 2 years of experience building and deploying cloud-based applications. Skilled in
          backend development across Java, Go, and Python,
          with production experience on AWS and GCP Infrastructure.
        </p>

        <p>
          Currently completing an MSc in Cyber Security at TU Dublin, with a focus on networking
          and application security. I approach development with a security-first mindset, and enjoy
          building software that is clear, structured, and maintainable.
        </p>

      </div>

      <!-- socials -->
      <div class="flex flex-wrap gap-4 mt-16">
        <a href="https://www.linkedin.com/in/divine-eboigbe-a63483205/" target="_blank"
          class="px-4 py-2 rounded-full border border-gray-200 dark:border-[#2a2a2a] bg-gray-100 dark:bg-[#222222] hover:bg-gray-200 dark:hover:bg-[#333333] text-gray-800 dark:text-gray-200 shadow-sm transition duration-300 flex items-center gap-2">
          <i class="pi pi-linkedin text-blue-600 dark:text-blue-400"></i>
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/ApexPlayground" target="_blank"
          class="px-4 py-2 rounded-full border border-gray-200 dark:border-[#2a2a2a] bg-gray-100 dark:bg-[#222222] hover:bg-gray-200 dark:hover:bg-[#333333] text-gray-800 dark:text-gray-200 shadow-sm transition duration-300 flex items-center gap-2">
          <i class="pi pi-github text-gray-700 dark:text-gray-300"></i>
          <span>GitHub</span>
        </a>
      </div>
    </FadeUpSection>

    <!-- skills -->
    <FadeUpSection :delay="0.2">
      <section class="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
        <h2 class="text-sm uppercase tracking-wide text-gray-800 dark:text-gray-400 mb-6">
          Skills & Tools
        </h2>
        <div class="space-y-6">

          <!-- Languages -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-800 dark:text-gray-300 shrink-0">
              <i class="pi pi-code text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-1">Languages</h3>
              <p class="text-sm text-gray-800 dark:text-gray-400">Python, Go, SQL</p>
            </div>
          </div>

          <!-- Frameworks -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-800 dark:text-gray-300 shrink-0">
              <i class="pi pi-server text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-1">Frameworks</h3>
              <p class="text-sm text-gray-800 dark:text-gray-400">FastAPI, Gin</p>
            </div>
          </div>

          <!-- Tools -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-800 dark:text-gray-300 shrink-0">
              <i class="pi pi-cog text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-1">Tools</h3>
              <p class="text-sm text-gray-800 dark:text-gray-400">Docker, PostgreSQL, Redis, RabbitMQ, GCP, GitHub
                Actions, Linux, Git, Bash, Vue.js</p>
            </div>
          </div>

          <!-- Practices -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-800 dark:text-gray-300 shrink-0">
              <i class="pi pi-list-check text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-1">Practices</h3>
              <p class="text-sm text-gray-800 dark:text-gray-400">REST API design, Microservices architecture,
                Event-driven & async systems, Secure API design, Authentication & authorisation, CI/CD pipelines, Unit &
                integration testing, Agile/Scrum</p>
            </div>
          </div>

        </div>
      </section>
    </FadeUpSection>
  </section>
</template>
