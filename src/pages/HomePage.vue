<template>
  <section class="max-w-3xl mx-auto mt-12">
    <!-- about me -->
    <FadeUpSection :delay="0">
      <div class="text-base leading-relaxed text-white space-y-5">
        <p>
          I'm a backend engineer based in Dublin. I spent just over a year at Beacon Hospital
          building internal tools that hundreds of staff depended on every day: records systems,
          inventory systems, and HR APIs. It's the kind of work that makes you care about getting
          things right.
        </p>

        <p>
          I work mostly in Python and Go, and I've built across the stack when needed: async
          pipelines, caching layers, distributed systems, and frontend work when the job calls
          for it. Everything I've shipped has been in production and used by real people.
        </p>

        <p>
          I'm currently finishing an MSc in Applied Cyber Security at TU Dublin, which has
          sharpened how I think about building systems that are not just functional, but secure
          by design.
        </p>
      </div>

      <!-- socials -->
      <div class="flex flex-wrap gap-4 mt-16">
        <a href="https://www.linkedin.com/in/divine-eboigbe-a63483205/" target="_blank"
          class="px-4 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white shadow-sm transition duration-300 flex items-center gap-2">
          <i class="pi pi-linkedin text-white"></i>
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/ApexPlayground" target="_blank"
          class="px-4 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white shadow-sm transition duration-300 flex items-center gap-2">
          <i class="pi pi-github text-white"></i>
          <span>GitHub</span>
        </a>
      </div>
    </FadeUpSection>

    <!-- skills -->
    <FadeUpSection :delay="0.2">
      <section class="mt-16 border-t border-white/20 pt-8">
        <h2 class="text-sm uppercase tracking-wide text-white mb-6">
          Skills & Tools
        </h2>
        <div class="space-y-6">

          <!-- Languages -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <i class="pi pi-code text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-white mb-1">Languages</h3>
              <p class="text-sm text-white">Python, Go, JavaScript SQL</p>
            </div>
          </div>

          <!-- Frameworks -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <i class="pi pi-server text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-white mb-1">Frameworks</h3>
              <p class="text-sm text-white">FastAPI, Gin, Vue.js</p>
            </div>
          </div>

          <!-- Tools -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <i class="pi pi-cog text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-white mb-1">Tools</h3>
              <p class="text-sm text-white">Docker, PostgreSQL, Redis, RabbitMQ, GCP, GitHub Actions, Linux, Git, Bash,
                Vue.js</p>
            </div>
          </div>

          <!-- Practices -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <i class="pi pi-list-check text-xl"></i>
            </div>
            <div>
              <h3 class="font-medium text-white mb-1">Practices</h3>
              <p class="text-sm text-white">REST API design, Microservices architecture,
                Event-driven & async systems, Secure API design, Authentication & authorisation, CI/CD pipelines, Unit &
                integration testing, Agile/Scrum</p>
            </div>
          </div>

        </div>
      </section>
    </FadeUpSection>
  </section>
</template>