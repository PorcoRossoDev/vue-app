// router/index.js
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const menuRoutes = [
  { 
    path: '/dashboard', 
    name: 'dashboard.view',
    component: () => import('@/components/Dashboard.vue'),
    meta: { title: 'Dashboard' } 
  },
  { 
    path: '/users', 
    name: 'users.view',
    component: () => import('@/components/Users.vue'), 
    meta: { title: 'Thành viên' } 
  },
  { 
    path: '/users/:id', 
    name: 'users.show', 
    component: () => import('@/components/UserDetail.vue'), 
    meta: { title: 'Thông tin thành viên' } 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue'),
    meta: {
      title: 'Đăng nhập'
    }
  }
  ,
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/components/Logout.vue'),
    meta: {
      title: 'Đăng xuất'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: menuRoutes,
})


router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  const isLoggedIn = auth?.isLoggedIn || null
  if (!isLoggedIn && to.path !== '/login') {
    alert('Bạn phải đăng nhập để sử dụng.')
    next('/login')
  } else {
    next()
  }
})

export default router
