<script setup>
import FadeUpSection from '../components/FadeUpSection.vue'

const projects = [
  {
    title: 'URL Shortener & QR Analytics',
    subtitle: 'Full-stack link management platform',
    description:
      'Built a complete link-shortening product from scratch. Users can create short links, generate QR codes, and view real-time analytics showing who clicked, from where, and on what device. Designed to handle high traffic using Redis caching and a background worker pipeline, with secure user accounts and collision-safe link generation.',
    tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Vue.js'],
    icon: 'pi pi-link',
    github: 'https://github.com/ApexPlayground/url-shortener',
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
]
</script>

<template>
  <section class="max-w-5xl mx-auto mt-12 px-4 sm:px-0">

    <!-- Main projects -->
    <h2 class="uppercase tracking-wide mb-8 text-center sm:text-left">Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <FadeUpSection v-for="(project, i) in projects" :key="i" :delay="i * 0.1">
        <div
          class="h-full flex flex-col rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#111111] p-5 transition-all duration-300 hover:border-gray-300 dark:hover:border-[#3a3a3a] hover:shadow-sm">

          <!-- Icon + title -->
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-lg bg-gray-100 dark:bg-[#1e1e1e] flex items-center justify-center shrink-0">
              <i :class="[project.icon, 'text-sm opacity-60']"></i>
            </div>
            <div>
              <h3 class="font-semibold text-sm leading-snug">{{ project.title }}</h3>
              <p class="text-xs opacity-40 mt-0.5">{{ project.subtitle }}</p>
            </div>
          </div>

          <div class="border-t border-gray-100 dark:border-[#1e1e1e] mb-3"></div>

          <p class="text-xs sm:text-sm opacity-70 leading-relaxed flex-1 mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-4">
            <span v-for="(tech, t) in project.tech" :key="t"
              class="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-[#1e1e1e] opacity-80 font-mono">
              {{ tech }}
            </span>
          </div>

          <div class="flex items-center gap-2 mt-auto">
            <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-80 transition-opacity duration-200">
              <i class="pi pi-external-link text-[10px]"></i>
              Live
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#2a2a2a] hover:border-gray-400 dark:hover:border-[#444] transition-colors duration-200 font-medium">
              <i class="pi pi-github text-[10px]"></i>
              GitHub
            </a>
          </div>

        </div>
      </FadeUpSection>
    </div>

    <!-- Web Projects -->
    <FadeUpSection :delay="0.15">
      <div class="mt-14 border-t border-gray-200 dark:border-gray-800 pt-10">
        <h2 class="uppercase tracking-wide mb-2 text-center sm:text-left">Web Projects</h2>
        <p class="text-sm opacity-40 mb-8 text-center sm:text-left">Websites built for clients</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div v-for="(site, i) in webProjects" :key="i"
            class="group flex flex-col rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#111111] overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-[#3a3a3a] hover:shadow-sm">
            <!-- Screenshot -->
            <div class="relative overflow-hidden bg-gray-100 dark:bg-[#1a1a1a] aspect-[16/9]">
              <img :src="site.screenshot" :alt="site.title + ' screenshot'"
                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            </div>

            <!-- Info -->
            <div class="p-4 flex flex-col flex-1">
              <h3 class="font-semibold text-sm mb-1">{{ site.title }}</h3>
              <p class="text-xs opacity-50 leading-relaxed flex-1 mb-4">{{ site.description }}</p>

              <a :href="site.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#2a2a2a] hover:border-gray-400 dark:hover:border-[#444] transition-colors duration-200 font-medium w-fit">
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
