<script setup>
import FadeUpSection from '../components/FadeUpSection.vue'

const workExperience = [
  {
    title: 'Software Engineer',
    company: 'Freelance & Contractor',
    location: 'Dublin, Ireland',
    period: 'Sep 2024 to Present',
    points: [
      'Designed, developed, and deployed three production websites for real-world clients, managing the full project lifecycle from requirements gathering through to deployment.',
      'Implemented internationalization (i18n) in an Angular application for an early-stage startup, enabling multi-language support across the UI.',
      'Built <a href="https://pottershouse.ie" target="_blank" rel="noopener noreferrer" class="underline opacity-90 hover:opacity-100">pottershouse.ie</a>, a church website with Stripe donation functionality via serverless functions, using HTML, CSS, JavaScript, and Python.',
      'Developed <a href="https://firstmade-foundation.org" target="_blank" rel="noopener noreferrer" class="underline opacity-90 hover:opacity-100">firstmade-foundation.org</a>, an NGO website built with React, integrating the Google Sheets API for event registration and data collection.',
      'Built <a href="https://www.thekingdomva.com" target="_blank" rel="noopener noreferrer" class="underline opacity-90 hover:opacity-100">thekingdomva.com</a>, a full-stack virtual assistant application with a React frontend and FastAPI backend.',
    ],
    icon: 'pi pi-briefcase',
  },
  {
    title: 'Software Engineer',
    company: 'Beacon Hospital',
    location: 'Dublin, Ireland',
    period: 'Sep 2023 to Sep 2024',
    points: [
      'Launched a stock management system across 6 departments on AWS ECS, tracking 3,000+ medical supplies with automated logging and low-stock alert tickets.',
      'Built a prescription dosage calculator with a React frontend and serverless AWS Lambda backend, replacing a manual paper-based process.',
      'Improved staff onboarding application response times by 65% by introducing a Redis caching layer, reducing redundant database calls.',
      'Developed and maintained backend APIs connecting hospital systems including appointments, HR, and clinical records using Java and Spring Boot on AWS ECS, serving 500+ staff daily.',
    ],
    icon: 'pi pi-briefcase',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Beacon Hospital',
    location: 'Dublin, Ireland',
    period: 'May 2023 to Aug 2023',
    points: [
      'Built an online appointment booking system across 3 departments, reducing manual scheduling by 30% within the first month.',
      'Developed a digital medication request system that allows nurses to submit drug orders directly to the pharmacy via a web application.',
      'Migrated 5 internal applications from on-premise servers to AWS (EC2 and RDS), improving uptime significantly with automated CloudWatch alerting.',
      'Worked in an Agile team with daily standups, two-week sprints, and collaborative code reviews, consistently delivering well-documented and tested code.',
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
