import type { Router } from 'vue-router'

export function redirectMiddleware(router: Router) {
  router.beforeEach(async (to) => {
    if (to.path === '/') {
      return '/auth/sign-in'
    }
  })
}
