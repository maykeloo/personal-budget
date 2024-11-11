import { UserController } from '@/application/controllers/user.controller'
import { supabase } from '@/lib/db/db.config'
import { useRouter } from 'vue-router'
import { useAsyncState } from '@vueuse/core'
import type { AuthError } from '@supabase/supabase-js'

export const useUserSignIn = () => {
  const userController = new UserController(supabase)
  const router = useRouter()

  const signInRequest = useAsyncState(signIn, null, {
    immediate: false,
    throwError: true,
  })

  async function signIn(email: string, password: string) {
    const { error } = await userController.signIn(email, password)

    if (error) {
      throw error
    }

    return router.push('/dashboard')
  }

  return {
    signInRequest,
  }
}
