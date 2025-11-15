import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('../views/Button.vue')
    },
    {
      path: '/enhanced-button',
      name: 'EnhancedButton',
      component: () => import('../views/EnhancedButton.vue')
    }
  ]
})

export default router

