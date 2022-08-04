import type { Component } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    component: (): Component => import('@/pages/HomePage.vue'),
    name: 'home',
    path: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
