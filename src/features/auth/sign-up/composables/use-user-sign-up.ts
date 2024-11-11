import { UserController } from '@/application/controllers/user.controller'
import { supabase } from '@/lib/db/db.config'
import { useAsyncState } from '@vueuse/core'

export const useUserSignUp = () => {
  const userController = new UserController(supabase)

  const signUpRequest = useAsyncState(signUp, null, {
    immediate: false,
  })

  async function signUp(email: string, password: string) {
    const { error } = await userController.signUp(email, password)

    if (error) {
      throw error
    }
  }

  return {
    signUpRequest,
  }
}
