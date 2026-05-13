<script setup>
import FadeUpSection from '../components/FadeUpSection.vue'

const workExperience = [
  {
    title: 'Software Engineer',
    company: 'Beacon Hospital',
    location: 'Dublin, Ireland',
    period: 'Sep 2023 to Sep 2024',
    points: [
      'Built and launched a stock management system used across 6 hospital departments, hosted on AWS. It tracks 3,000+ medical supplies, sends automatic low-stock alerts, and syncs daily with the hospital\'s finance software (Sage).',
      'Sped up a slow staff onboarding application by 65% by adding a caching layer using Amazon ElastiCache (Redis), reducing unnecessary database calls and improving system performance.',
      'Developed the backend APIs that connect the hospital\'s internal applications, including appointment systems, HR tools, and clinical records. Built with Java and Spring Boot, deployed on AWS and handling 500+ staff.',
      'Built a prescription dosage calculator used by pharmacists, replacing a paper-based process. Includes a web interface (React), a serverless backend (AWS Lambda, C#), and automatic logging of every calculation for compliance.',
    ],
    icon: 'pi pi-briefcase',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Beacon Hospital',
    location: 'Dublin, Ireland',
    period: 'May 2023 to Aug 2023',
    points: [
      'Built an online appointment booking system used by hospital patients across 3 departments, hosted on AWS Elastic Beanstalk. Reduced time spent on manual scheduling by 30% within the first month.',
      'Created a digital medication request system letting nurses send drug orders directly to the pharmacy through a web application.',
      'Moved 5 internal hospital applications from old on-site servers to AWS (EC2 and RDS), improving system uptime from 94% to 99.5% and adding automated CloudWatch alerts when anything goes wrong.',
      'Worked in an Agile team, with daily standups, two-week sprints, and collaborative code reviews with senior engineers.',
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
                {{ point }}
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
