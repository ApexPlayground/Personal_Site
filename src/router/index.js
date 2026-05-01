import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/HomePage.vue'
import Projects from '../pages/ProjectsPage.vue'
import Work from '../pages/ExperiencePage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/experience', name: 'Work', component: Work },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
