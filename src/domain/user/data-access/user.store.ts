import { defineStore } from 'pinia'
import { UserController } from '@/application/controllers/user.controller'
import { supabase } from '@/lib/db/db.config'
import { useAsyncState } from '@vueuse/core'
import type { User } from '@supabase/supabase-js'

export const useUserStore = defineStore('user', () => {
  const userController = new UserController(supabase)
  const { state: user, execute } = useAsyncState(
    async () => {
      const user = await userController.getUser()
      return user.data.user
    },
    null,
    {
      immediate: false,
      onSuccess: (newUser) => {
        user.value = newUser
      },
    },
  )

  return {
    user,
    getUser: execute,
  }
})
