// router/index.js
import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import AboutView from '../components/AboutView.vue'

export const menuRoutes = [
  { path: '/', component: HomeView, meta: { title: 'Trang chủ' } },
  { path: '/about', component: AboutView, meta: { title: 'Giới thiệu' } },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes: menuRoutes,
})

export default router
