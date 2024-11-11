import { createRouter, createWebHistory } from 'vue-router'
import { routerMiddleware } from '@/lib/router/middlewares/auth.middleware'
import FeatureSignIn from '@/features/auth/sign-in/feature-sign-in.vue'
import FeatureSignUp from '@/features/auth/sign-up/feature-sign-up.vue'
import FeatureDashboard from '@/features/dashboard/feature-dashboard.vue'
import { redirectMiddleware } from '@/lib/router/middlewares/redirect.middleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/sign-up',
      name: 'sign-up',
      component: FeatureSignUp,
    },
    {
      path: '/auth/sign-in',
      name: 'sign-in',
      component: FeatureSignIn,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: FeatureDashboard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

routerMiddleware(router)
redirectMiddleware(router)

export default router
