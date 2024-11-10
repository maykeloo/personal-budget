import { useUserStore } from '@/domain/user/data-access/user.store'
import { supabase } from '@/lib/db/db.config'
import { defineStore, storeToRefs } from 'pinia'
import { TransactionController } from '@/application/controllers/transaction.controller'
import { useAccountsStore } from '@/domain/account/data-access/accounts.store'
import { useAsyncState } from '@vueuse/core'
import type { Tables } from '@/schema'
import { watch } from 'vue'

export const useTransactionsStore = defineStore('transactions', () => {
  const transactionController = new TransactionController(supabase)
  const { user } = useUserStore()
  const { currentAccount } = storeToRefs(useAccountsStore())

  if (!user) {
    throw new Error('User not found')
  }

  const getAccountTransactions = () => {
    try {
      if (!currentAccount.value) {
        throw new Error('Account not found')
      }
      return transactionController.getAccountTransactions(user.id, currentAccount.value.id)
    } catch (error) {
      throw error
    }
  }

  const { state: transactions, execute } = useAsyncState<
    Tables<'transactions'>[]
  >(async () => {
    const transactions = await getAccountTransactions()
    return transactions.data ?? []
  }, [])

  watch(currentAccount, (account) => {
    if (account) {
      execute()
    }
  })

  return {
    transactions,
  }
})
