import type { Router } from 'vue-router'
import { useUserStore } from '@/domain/user/data-access/user.store'

export function routerMiddleware(router: Router) {
  router.beforeEach(async (to) => {
    if (to.meta.requiresAuth) {
      const userStore = useUserStore()
      await userStore.getUser()
      return userStore.user ? true : '/auth/sign-in'
    }
  })
}
