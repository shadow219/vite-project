import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Home/Dashboard/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router