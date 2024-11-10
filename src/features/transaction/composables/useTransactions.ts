import type { Tables } from '@/schema'
import dayjs from 'dayjs'
import type { Month } from '@/shared/types/time'

export const useTransactions = () => {
  function getTransactionForMonth(transactions: Tables<'transactions'>[], type: Tables<'transactions'>['type'], month: Month) {
    return transactions
      .filter((transaction) => transaction.type === type)
      .filter((transaction) => {
        return dayjs(transaction.created_at).isSame(dayjs().month(month.index), 'month')
      }).reduce((acc, transaction) => {
        return acc + transaction.amount
      }, 0)
  }

  return {
    getTransactionForMonth
  }
}
