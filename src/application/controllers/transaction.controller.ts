import type { DatabaseClient } from '@/lib/db/db.config'

export class TransactionController {
  private db: DatabaseClient

  constructor(db: DatabaseClient) {
    this.db = db
  }

  async getAccountTransactions(userId: string, accountId: string) {
    try {
      return this.db
        .from('transactions')
        .select('*')
        .eq('user_id', userId)
        .eq('bank_account_id', accountId)
    } catch (error) {
      throw error
    }
  }
}
