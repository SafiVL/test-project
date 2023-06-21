import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/CatalogPage.vue'

const routes = [
  {
    path: '/catalog',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('../views/CartPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
