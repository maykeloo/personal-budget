import type { Router } from 'vue-router'
import { useUserStore } from '@/domain/user/data-access/user.store'

export function routerMiddleware(router: Router) {
  router.beforeEach(async (to) => {
    if (!to.meta.requiresAuth) {
      return '/dashboard'
    }

    if (to.meta.requiresAuth) {
      const { getUser, mutateUser } = useUserStore()
      const user = await getUser()
      mutateUser(user)
      return user.data.user ? true : '/auth/sign-in'
    }
  })
}
