import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from '../views/CatalogPage.vue'

const routes = [
  {
    path: '/',
    name: 'CatalogPage',
    component: CatalogPage
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
