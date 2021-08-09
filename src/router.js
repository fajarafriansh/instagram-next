import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/profile',
    name: 'PageProfile',
    component: () => import('@/views/Profile.vue'),
  },
  {
    path: '/explore',
    name: 'PageExplore',
    component: () => import('@/views/Explore.vue'),
  },
  {
    path: '/message',
    name: 'PageMessage',
    component: () => import('@/views/Direct.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
