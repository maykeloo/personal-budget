import type { Database } from '@/schema'
import { Env } from '@/shared/types/env'
import { createClient } from '@supabase/supabase-js'

const { VITE_SUPABASE_KEY, VITE_SUPABASE_URL } = Env.variables()

export const supabase = createClient<Database>(VITE_SUPABASE_URL, VITE_SUPABASE_KEY)

export type DatabaseClient = typeof supabase
