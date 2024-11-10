import { useRequest } from 'vue-request'
import { UserController } from '@/application/controllers/user.controller'
import { supabase } from '@/lib/db/db.config'

export const useUserSignUp = () => {
  const userController = new UserController(supabase)

  const signUpRequest = useRequest(signUp, { manual: true })

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
