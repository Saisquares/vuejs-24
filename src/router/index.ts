import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: ProjectsView, // this is a static import causing the page to load slower
    // },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'), // dynamic  import for lazy loading, causing the page to load faster, bundle size is smaller
    },
  ],
})

export default router
