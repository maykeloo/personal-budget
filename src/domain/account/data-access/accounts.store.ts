import { AccountController } from '@/application/controllers/account.controller'
import { useUserStore } from '@/domain/user/data-access/user.store'
import { supabase } from '@/lib/db/db.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAsyncState } from '@vueuse/core'
import type { Tables } from '@/schema'

export const useAccountsStore = defineStore('accounts', () => {
  const accountController = new AccountController(supabase)
  const { user } = useUserStore()

  const currentAccount = ref<Tables<'bank_accounts'> | null>(null)

  if (!user) {
    throw new Error('User not found')
  }

  const getUserAccounts = () => {
    try {
      return accountController.getUserAccounts(user.id)
    } catch (error) {
      throw error
    }
  }

  const { state: accounts } = useAsyncState<Tables<'bank_accounts'>[]>(
    async () => {
      const accounts = await getUserAccounts()
      return accounts.data ?? []
    },
    [],
    {
      onSuccess: (response) => {
        currentAccount.value = response?.find((account) => account.type === 'PRIMARY') ?? null
      },
    },
  )

  return {
    accounts,
    currentAccount,
  }
})
