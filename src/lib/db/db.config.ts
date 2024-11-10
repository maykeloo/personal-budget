import type { Database } from '@/schema'
import { Env } from '@/shared/types/env'
import { createClient } from '@supabase/supabase-js'

const { SUPABASE_URL, SUPABASE_KEY } = Env.variables()

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY)

export type DatabaseClient = typeof supabase
