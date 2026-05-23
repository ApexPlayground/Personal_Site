<script setup>
import FadeUpSection from '../components/FadeUpSection.vue'

const workExperience = [

  {
    title: 'Software Engineer',
    company: 'Beacon Hospital',
    period: 'September 2023 – September 2024',
    points: [
      'Designed, built, and maintained backend APIs for internal systems including records management and HR, serving 500+ staff daily across a live production environment as part of a small engineering team.',
      'Built a Python tool that parsed structured Excel templates to automate medical formula dosage calculations, replacing a manual, error-prone workflow.',
      'Improved response times by over 90% on a staff-facing service, reducing a 10s cross-department join to under 1s by introducing a Redis caching layer with write-through invalidation to eliminate redundant database queries.',
      'Developed and launched an inventory management system across 6 departments, tracking 3,000+ items with automated low-stock alerting and daily sync to finance software.',
      'Implemented a full audit trail for all inventory changes in a dedicated database table, capturing the user, action type (create, update, delete), and previous and new values for every change.',
      'Wrote and maintained GitHub Actions CI pipelines running unit and integration tests across all internal services on every pull request.',
    ],
    icon: 'pi pi-briefcase',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Beacon Hospital',
    period: 'May 2023 – August 2023',
    points: [
      'Built a digital supply request system allowing nurses to submit drug orders directly to the pharmacy via a web application; fully shipped and used daily.',
      'Identified and resolved recurring bugs across existing internal systems, reducing support requests and improving day-to-day reliability for end users.',
      'Worked in an Agile team with two-week sprints, daily standups, and collaborative code reviews, consistently delivering well-tested and documented code.',
    ],
    icon: 'pi pi-briefcase',
  },

  {
    title: 'Software Developer',
    company: 'Freelance',
    location: 'Dublin, Ireland',
    period: 'September 2024 – Present',
    points: [
      'Built <a href="https://thekingdomva.com" target="_blank" rel="noopener noreferrer" class="underline opacity-90 hover:opacity-100">thekingdomva.com</a> (virtual assistant agency): full-stack application with a Vue.js frontend and FastAPI backend, implementing JWT-based authentication and a structured REST API; live in production.',
      'Designed and deployed a serverless payment integration for <a href="https://pottershouse.ie" target="_blank" rel="noopener noreferrer" class="underline opacity-90 hover:opacity-100">pottershouse.ie</a> (religious organisation, 150 members) with full transaction logging, handling live payments end-to-end.',
      'Integrated the Google Sheets API into <a href="https://firstmade-foundation.org" target="_blank" rel="noopener noreferrer" class="underline opacity-90 hover:opacity-100">firstmade-foundation.org</a> (non-profit) to manage event registrations for 3 annual events, replacing a manual data entry process.',
    ],
    icon: 'pi pi-briefcase',
  },
]

const education = [
  {
    title: 'MSc in Applied Cyber Security',
    institution: 'Technology University of Dublin (TU Dublin)',
    location: 'Dublin, Ireland',
    period: 'Sep 2025 to Sep 2026 (Expected)',
    icon: 'pi pi-graduation-cap',
  },
  {
    title: 'BSc in Computer Science, First-Class Honours',
    institution: 'Griffith College Dublin',
    location: 'Dublin, Ireland',
    period: 'Sep 2020 to Nov 2024',
    icon: 'pi pi-graduation-cap',
  },
]
</script>

<template>
  <section class="max-w-3xl mx-auto mt-12 sm:px-0 space-y-10">

    <!-- Work Experience -->
    <FadeUpSection>
      <h2 class="uppercase tracking-wide mb-6 text-center sm:text-left">Experience</h2>

      <div class="space-y-8 sm:space-y-10">
        <div v-for="(job, i) in workExperience" :key="i"
          class="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <!-- Icon -->
          <div
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#222222] transition-colors duration-300 mx-auto sm:mx-0 shrink-0">
            <i :class="[job.icon, 'text-lg sm:text-xl opacity-60']"></i>
          </div>

          <!-- Content -->
          <div class="text-center sm:text-left w-full">
            <!-- Title + period -->
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
              <h3 class="font-semibold">{{ job.title }}</h3>
              <span class="text-xs opacity-40">{{ job.period }}</span>
            </div>
            <!-- Company -->
            <p class="text-sm opacity-50 mb-3">{{ job.company }}, {{ job.location }}</p>

            <!-- Bullet points -->
            <ul class="space-y-2 text-left">
              <li v-for="(point, p) in job.points" :key="p"
                class="flex items-start gap-2 text-sm opacity-70 leading-relaxed">
                <span class="mt-2 w-1 h-1 rounded-full bg-current shrink-0 opacity-40"></span>
                <span v-html="point"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FadeUpSection>

    <!-- Education -->
    <FadeUpSection :delay="0.2">
      <div class="border-t border-gray-200 dark:border-gray-800 pt-8">
        <h2 class="uppercase tracking-wide mb-6 text-center sm:text-left">Education</h2>

        <div class="space-y-6">
          <div v-for="(edu, i) in education" :key="i" class="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            <!-- Icon -->
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#222222] transition-colors duration-300 mx-auto sm:mx-0 shrink-0">
              <i :class="[edu.icon, 'text-lg sm:text-xl opacity-60']"></i>
            </div>

            <!-- Content -->
            <div class="text-center sm:text-left w-full">
              <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
                <h3 class="font-semibold">{{ edu.title }}</h3>
                <span class="text-xs opacity-40">{{ edu.period }}</span>
              </div>
              <p class="text-sm opacity-50">{{ edu.institution }}, {{ edu.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </FadeUpSection>

  </section>
</template>
