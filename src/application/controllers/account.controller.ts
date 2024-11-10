import type { DatabaseClient } from '@/lib/db/db.config'

export class AccountController {
  private db: DatabaseClient

  constructor(db: DatabaseClient) {
    this.db = db
  }

  async getUserAccounts(userId: string) {
    try {
      return this.db.from('bank_accounts').select('*').eq('user_id', userId)
    } catch (error) {
      throw error
    }
  }
}
