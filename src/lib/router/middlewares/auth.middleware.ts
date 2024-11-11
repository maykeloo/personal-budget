import type { Router } from 'vue-router'
import { useUserStore } from '@/domain/user/data-access/user.store'

export function routerMiddleware(router: Router) {
  router.beforeEach(async (to) => {
    if (to.path === '/') {
      return '/auth/sign-in'
    }

    const userStore = useUserStore()
    await userStore.getUser()

    if (to.name === 'sign-in' || to.name === 'sign-up') {
      return userStore.user ? '/dashboard' : true
    }

    if (to.meta.requiresAuth) {
      return userStore.user ? true : '/auth/sign-in'
    }
  })
}
