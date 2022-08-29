import { createWebHashHistory, createRouter } from 'vue-router'
import { MyRouteRecordRaw } from '@/views/types/custom'

const Layout = () => import('@/views/Layout/index.vue')

export const routes: MyRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboardMgt'
  },
  {
    path: '/dashboardMgt',
    name: 'dashboardMgt',
    redirect: { name: 'dashboard' },
    component: Layout,
    meta: { title: '仪表盘管理' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/index.vue'),
        meta: { title: '仪表盘', icon: 'icon-quanbu' },
      }
    ]
  },
  {
    path: '/calendarMgt',
    name: 'calendarMgt',
    redirect: { name: 'calendar' },
    component: Layout,
    meta: { title: '日程表管理', icon: '' },
    children: [
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import('@/views/Calendar/index.vue'),
        meta: { title: '日程表', icon: 'icon-richeng' },
      }
    ]
  },
  {
    path: '/chatMgt',
    name: 'chatMgt',
    redirect: { name: 'chat' },
    component: Layout,
    meta: { title: '消息管理', icon: '' },
    children: [
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/Chat/index.vue'),
        meta: { title: '消息', icon: 'icon-xiaoxi' },
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
