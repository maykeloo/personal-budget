import { SupabaseClient, type AuthResponse } from '@supabase/supabase-js'

export class UserController {
  private db: SupabaseClient

  constructor(db: SupabaseClient) {
    this.db = db
  }

  signUp(email: string, password: string): Promise<AuthResponse> {
    return this.db.auth.signUp({ email, password })
  }

  signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      return this.db.auth.signInWithPassword({ email, password })
    } catch (error) {
      throw error
    }
  }

  getUser() {
    try {
      return this.db.auth.getUser()
    } catch (error) {
      throw error
    }
  }
}
