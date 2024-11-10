import { useRequest } from 'vue-request'
import { UserController } from '@/application/controllers/user.controller'
import { supabase } from '@/lib/db/db.config'
import { useRouter } from 'vue-router'

export const useUserSignIn = () => {
  const userController = new UserController(supabase)
  const router = useRouter()

  const signInRequest = useRequest(signIn, { manual: true })

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
