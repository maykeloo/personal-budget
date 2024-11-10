import { defineStore } from 'pinia'
import { UserController } from '@/application/controllers/user.controller'
import { supabase } from '@/lib/db/db.config'
import { useRequest } from 'vue-request'
import { computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userController = new UserController(supabase)
  const { data, mutate, runAsync } = useRequest(() => userController.getUser(), {
    manual: true,
  })

  const user = computed(() => data.value?.data.user ?? null)

  return {
    user,
    mutateUser: mutate,
    getUser: runAsync,
  }
})
