<script setup>
import FadeUpSection from '../components/FadeUpSection.vue'

const projects = [
  {
    title: 'S3Scan',
    subtitle: 'Python CLI Tool for AWS S3 Security Auditing',
    points: [
      'Developed a command-line tool to audit AWS S3 buckets for security misconfigurations.',
      'Implemented checks for ACLs, CORS, bucket policies, and versioning, with a full audit mode.',
      'Built with Python, Click, and Boto3, supporting both AWS and LocalStack for local testing.',
    ],
    tech: ['Python', 'Boto3', 'Click', 'LocalStack'],
    icon: 'pi pi-cloud',
    link: 'https://github.com/ApexPlayground/s3_Scan',
  },
  {
    title: 'T-Pot Honeypot Deployment & Analysis',
    subtitle: 'Google Cloud Honeypot Environment for Real-World Attack Analysis',
    points: [
      'Deployed a multi-service honeypot environment (T-Pot) on Google Cloud to capture real-world attack data from hackers.',
      'Automated secure log collection using rsync and analyzed SSH/HTTP attack trends with Python.',
      'Managed cloud firewall rules, user access, and secure log storage on local and cloud systems.',
    ],
    tech: ['Google Cloud', 'Python', 'T-Pot', 'rsync', 'Firewall'],
    icon: 'pi pi-shield',
    link: 'https://github.com/ApexPlayground/Tpot_analysis_project',
  },
  {
    title: 'Personal Portfolio',
    subtitle: 'Modern Developer Portfolio Built with Vue & Tailwind',
    points: [
      'Designed and built a responsive, dark-mode friendly portfolio using Vue 3 and Tailwind CSS.',
      'Implemented floating navigation, fade-up animations, and theme persistence with localStorage.',
      'Showcases professional projects, technical experience, and contact links.',
    ],
    tech: ['Vue.js', 'Tailwind', 'PrimeIcons'],
    icon: 'pi pi-desktop',
    link: 'https://github.com/ApexPlayground/Personal_Site',
  },
]
</script>

<template>
  <section class="max-w-3xl mx-auto mt-12 px-4 sm:px-0 space-y-10">
    <h2 class="text-sm uppercase tracking-wide mb-6 text-center sm:text-left">Projects</h2>

    <div class="space-y-12 sm:space-y-16">
      <FadeUpSection v-for="(project, i) in projects" :key="i" :delay="i * 0.15">
        <div class="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 text-sm sm:text-base">
          <!-- Icon -->
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#222222] transition-colors duration-300 mx-auto sm:mx-0"
          >
            <i :class="[project.icon, 'text-lg sm:text-xl']"></i>
          </a>

          <div class="text-center sm:text-left">
            <!-- Title -->
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold transition-opacity duration-300 hover:opacity-80"
            >
              {{ project.title }}
              <i class="pi pi-external-link text-xs ml-1 opacity-60"></i>
            </a>

            <!-- Subtitle -->
            <p class="text-sm italic opacity-80 mb-3 leading-relaxed mt-1">
              {{ project.subtitle }}
            </p>

            <!-- Bullet points -->
            <ul class="list-disc pl-5 sm:pl-5 space-y-1 text-sm opacity-90 text-left">
              <li v-for="(point, p) in project.points" :key="p">
                {{ point }}
              </li>
            </ul>

            <!-- Tech tags -->
            <div class="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
              <span
                v-for="(tech, t) in project.tech"
                :key="t"
                class="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-[#2a2a2a]"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </FadeUpSection>
    </div>
  </section>
</template>
