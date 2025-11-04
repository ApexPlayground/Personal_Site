<script setup>
import FadeUpSection from '../components/FadeUpSection.vue'

const workExperience = [
  {
    title: 'Software Engineer',
    company: 'Beacon Hospital',
    period: 'September 2023 – September 2024',
    points: [
      'Built and deployed an in-house stock management system that tracks inventory, sends low-stock alerts, and integrates with Sage using a daily task scheduler.',
      'Reduced backend latency by analysing query executions and implementing proper indexing, significantly improving performance for the HR onboarding app.',
      'Developed RESTful API endpoints using Java and Spring Boot, integrating with hospital systems and internal tools.',
      'Created a dosage calculation web app using React and C# handlers, supporting accurate prescriptions and improving pharmaceutical operations.',
      'Implemented session-based authentication and role-based access control with Spring Security for roles such as Consultants, Nurses, and Doctors.',
    ],
    icon: 'pi pi-briefcase',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Beacon Hospital',
    period: 'May 2023 – August 2023',
    points: [
      'Developed an appointment scheduling system using ASP.NET and React, enabling consultants to manage bookings efficiently and reducing administrative overhead.',
      'Built a medication ordering system to streamline nurse-to-pharmacy requests, cutting drug administration time.',
      'Migrated internal applications across multiple servers, improving system availability for 500+ staff members.',
      'Participated in debugging, testing, and pair programming within an agile environment.',
    ],
    icon: 'pi pi-briefcase',
  },
]

const education = [
  {
    title: 'MSc in Applied Cyber Security',
    institution: 'Technological University Dublin (TUD)',
    period: 'September 2025 – September 2026',
    points: [
      'Currently pursuing a Master’s degree focused on cybersecurity, cloud infrastructure, and digital forensics.',
      'Learning advanced topics such as network defense, threat analysis, and cryptographic systems.',
    ],
    icon: 'pi pi-graduation-cap',
  },
  {
    title: 'BSc in Computer Science',
    institution: 'Griffith College Dublin',
    period: '2019 – 2023',
    points: [
      'Graduated with First-Class Honours (1:1).',
      'Built strong foundations in software engineering, data structures, and network security.',
      'Developed multiple academic and personal projects in Python, Java, and cloud technologies.',
    ],
    icon: 'pi pi-graduation-cap',
  },
]
</script>

<template>
  <section
    class="max-w-3xl mx-auto mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 space-y-12"
  >
    <!-- WORK EXPERIENCE -->
    <FadeUpSection>
      <h2 class="text-sm uppercase tracking-wide opacity-70 mb-6">Work Experience</h2>

      <div class="space-y-10">
        <div v-for="(job, i) in workExperience" :key="i" class="flex items-start gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#222222] transition-colors duration-300"
          >
            <i :class="[job.icon, 'text-lg']"></i>
          </div>

          <div>
            <h3
              class="font-semibold hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
            >
              {{ job.title }}
            </h3>
            <p class="text-sm italic opacity-80 mb-2">{{ job.company }} • {{ job.period }}</p>

            <ul class="list-disc pl-5 space-y-1 text-sm opacity-90">
              <li v-for="(point, p) in job.points" :key="p">{{ point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </FadeUpSection>

    <!-- EDUCATION -->
    <FadeUpSection :delay="0.2">
      <div class="border-t border-gray-200 dark:border-gray-800 pt-8">
        <h2 class="text-sm uppercase tracking-wide opacity-70 mb-6">Education</h2>

        <div class="space-y-10">
          <div v-for="(edu, i) in education" :key="i" class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#222222] transition-colors duration-300"
            >
              <i :class="[edu.icon, 'text-lg']"></i>
            </div>

            <div>
              <h3
                class="font-semibold hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
              >
                {{ edu.title }}
              </h3>
              <p class="text-sm italic opacity-80 mb-2">{{ edu.institution }} • {{ edu.period }}</p>

              <ul class="list-disc pl-5 space-y-1 text-sm opacity-90">
                <li v-for="(point, p) in edu.points" :key="p">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FadeUpSection>
  </section>
</template>
