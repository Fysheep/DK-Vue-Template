import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/Fyshi',
      name: 'AboutMe',
      component: () => import('@/views/AboutMe.vue')
    }
  ]
})

export default router
