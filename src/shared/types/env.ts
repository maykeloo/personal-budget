import { z } from 'zod'

const nodeEnv = z.object({
  MODE: z.string(),
})

const envSchema = z.object({
  SUPABASE_URL: z.string(),
  SUPABASE_KEY: z.string(),
})

const devEnvSchema = z.object(
  Object.fromEntries(Object.entries(envSchema.shape).map(([key, type]) => [`VITE_${key}`, type])),
)

type EnvSchema = z.infer<typeof envSchema>

export class Env {
  static variables() {
    console.log(import.meta.env)
    if (nodeEnv.parse(import.meta.env).MODE === 'development') {
      const developmentSchema = devEnvSchema.parse(import.meta.env)
      return {
        SUPABASE_KEY: developmentSchema.VITE_SUPABASE_KEY,
        SUPABASE_URL: developmentSchema.VITE_SUPABASE_URL,
      }
    }
    return envSchema.parse(import.meta.env)
  }
}
