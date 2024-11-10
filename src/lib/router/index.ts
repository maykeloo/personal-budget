import { createRouter, createWebHistory } from 'vue-router'
import { routerMiddleware } from '@/lib/router/middlewares/auth.middleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
    },
    {
      path: '/auth/sign-up',
      name: 'sign-up',
      component: () => import('@/features/auth/sign-up/feature-sign-up.vue'),
    },
    {
      path: '/auth/sign-in',
      name: 'sign-in',
      component: () => import('@/features/auth/sign-in/feature-sign-in.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      components: {
        default: () => import('@/features/dashboard/feature-dashboard.vue'),
        navigation: () => import('@/ui/components/navigation-bar.vue'),
      },
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

routerMiddleware(router)

export default router
