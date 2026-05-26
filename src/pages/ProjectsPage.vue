<script setup>
import FadeUpSection from '../components/FadeUpSection.vue'

const projects = [
  {
    title: 'Stripe Webhook Processing System',
    subtitle: 'Distributed async event processing service',
    description:
      'Built a distributed event processing service that authenticates incoming Stripe webhook events using signature verification and applies idempotency checks against PostgreSQL to prevent duplicate processing. Designed an async ingestion pipeline with RabbitMQ, fully decoupling the API from downstream processing. Containerised all services with Docker Compose using health checks, and wrote a GitHub Actions CI pipeline with unit and integration tests across the API, worker, and database layers.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'GitHub Actions'],
    icon: 'pi pi-bolt',
    github: 'https://github.com/ApexPlayground/stripe_webhook_handler',
    live: null,
  },
  {
    title: 'URL Shortener & QR Analytics',
    subtitle: 'Full-stack link management platform',
    description:
      'Built a complete link-shortening product from scratch. Users can create short links, generate QR codes, and view real-time analytics showing who clicked, from where, and on what device. Designed to handle high traffic using Redis caching and a background worker pipeline, with secure user accounts and collision-safe link generation.',
    tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Vue.js'],
    icon: 'pi pi-link',
    github: 'https://github.com/ApexPlayground/Linkkit',
    live: null,
  },
  {
    title: 'T-Pot Honeypot Deployment',
    subtitle: 'Google Cloud honeypot for real-world attack analysis',
    description:
      'Deployed a multi-service honeypot on Google Cloud across two regions (Europe and Asia) to capture live attack traffic from real threat actors. Collected over 2 million events by automating daily log retrieval, then used Python and Pandas to analyse the data. Findings showed most attacks came from automated bots scanning for weak credentials, with attack patterns varying noticeably by region.',
    tech: ['Google Cloud', 'Python', 'T-Pot', 'Pandas', 'Linux'],
    icon: 'pi pi-shield',
    github: 'https://github.com/ApexPlayground/Tpot_analysis_project',
    live: null,
  },
  {
    title: 'S3Scan',
    subtitle: 'AWS S3 security auditing CLI tool',
    description:
      'A command-line tool that scans AWS S3 buckets for misconfigurations that commonly lead to data breaches, including exposed access controls, overly permissive policies, missing versioning, and unsafe CORS rules. Built with a modular check system and a full audit mode that runs everything in one command. Supports both live AWS environments and LocalStack for local testing without touching production.',
    tech: ['Python', 'Boto3', 'Click', 'AWS S3', 'LocalStack'],
    icon: 'pi pi-cloud',
    github: 'https://github.com/ApexPlayground/s3_Scan',
    live: null,
  },
]

const webProjects = [
  {
    title: "Potter's House Dublin",
    description: 'Church website built for Potter\'s House Dublin.',
    screenshot: '/church.png',
    url: 'https://pottershouse.ie/',
  },
  {
    title: 'First Made Foundation',
    description: 'Website built for First Made Foundation, a non-profit organisation.',
    screenshot: '/ngo.png',
    url: 'https://firstmade-foundation.org/',
  },
  {
    title: 'The Kingdom VA',
    description: 'Website built for The Kingdom VA, an administrative website.',
    screenshot: '/kva.png',
    url: 'https://www.thekingdomva.com/',
  },
]
</script>

<template>
  <section class="max-w-3xl mx-auto mt-12">

    <!-- Main projects -->
    <h2 class="text-sm uppercase tracking-wide text-white mb-8">Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <FadeUpSection v-for="(project, i) in projects" :key="i" :delay="i * 0.1">
        <div
          class="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-white/20 hover:shadow-sm">

          <!-- Icon + title -->
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <i :class="[project.icon, 'text-sm text-white opacity-60']"></i>
            </div>
            <div>
              <h3 class="font-medium text-white leading-snug">{{ project.title }}</h3>
              <p class="text-sm text-white/60 mt-0.5">{{ project.subtitle }}</p>
            </div>
          </div>

          <div class="border-t border-white/10 mb-3"></div>

          <p class="text-sm text-white leading-relaxed flex-1 mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-4">
            <span v-for="(tech, t) in project.tech" :key="t"
              class="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-white font-mono">
              {{ tech }}
            </span>
          </div>

          <div class="flex items-center gap-2 mt-auto">
            <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white text-gray-900 font-medium hover:opacity-80 transition-opacity duration-200">
              <i class="pi pi-external-link text-[10px]"></i>
              Live
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-white/20 text-white hover:border-white/40 transition-colors duration-200 font-medium">
              <i class="pi pi-github text-[10px]"></i>
              GitHub
            </a>
          </div>

        </div>
      </FadeUpSection>
    </div>

    <!-- Web Projects -->
    <FadeUpSection :delay="0.15">
      <div class="mt-14 border-t border-white/10 pt-10">
        <h2 class="text-sm uppercase tracking-wide text-white mb-2">Web Projects</h2>
        <p class="text-sm text-white mb-8">Websites built for clients</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div v-for="(site, i) in webProjects" :key="i"
            class="group flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-sm">

            <!-- Screenshot -->
            <div class="relative overflow-hidden bg-white/5 aspect-[16/9]">
              <img :src="site.screenshot" :alt="site.title + ' screenshot'"
                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            </div>

            <!-- Info -->
            <div class="p-4 flex flex-col flex-1">
              <h3 class="font-medium text-white text-sm mb-1">{{ site.title }}</h3>
              <p class="text-sm text-white leading-relaxed flex-1 mb-4">{{ site.description }}</p>

              <a :href="site.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-white/20 text-white hover:border-white/40 transition-colors duration-200 font-medium w-fit">
                <i class="pi pi-external-link text-[10px]"></i>
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeUpSection>

  </section>
</template>