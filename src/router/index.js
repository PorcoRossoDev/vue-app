// router/index.js
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import AboutView from '../components/AboutView.vue'
import Users from '../components/Users.vue'
import UserDetail from '../components/UserDetail.vue'

export const menuRoutes = [
  { 
    path: '/dashboard', 
    name: 'dashboard.view',
    component: HomeView,
    meta: { title: 'Dashboard' } 
  },
  { 
    path: '/users', 
    name: 'dashboard.view',
    component: () => import('@/components/Users.vue'), 
    meta: { title: 'Thành viên' } 
  },
  { 
    path: '/users/:id', 
    name: 'users.show', 
    component: () => import('@/components/UserDetail.vue'), 
    meta: { title: 'Thông tin thành viên' } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: menuRoutes,
})

export default router
