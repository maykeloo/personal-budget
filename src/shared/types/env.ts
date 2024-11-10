import { z } from 'zod'

const nodeEnv = z.object({
  MODE: z.string(),
})

const envSchema = z.object({
  VITE_SUPABASE_URL: z.string(),
  VITE_SUPABASE_KEY: z.string(),
})

type EnvSchema = z.infer<typeof envSchema>

export class Env {
  static variables() {
    return envSchema.parse(import.meta.env)
  }
}
