import { z } from 'zod'

const nodeEnv = z.object({
  MODE: z.string(),
})

const envSchema = z.object({
  SUPABASE_URL: z.string(),
  SUPABASE_KEY: z.string(),
  AUTH0_DOMAIN: z.string(),
  AUTH0_CLIENT_ID: z.string(),
})

const devEnvSchema = z.object(
  Object.fromEntries(Object.entries(envSchema.shape).map(([key, type]) => [`VITE_${key}`, type])),
)

type EnvSchema = z.infer<typeof envSchema>

export class Env {
  static variables() {
    if (nodeEnv.parse(import.meta.env).MODE === 'development') {
      const developmentSchema = devEnvSchema.parse(import.meta.env)
      return {
        AUTH0_CLIENT_ID: developmentSchema.VITE_AUTH0_CLIENT_ID,
        AUTH0_DOMAIN: developmentSchema.VITE_AUTH0_DOMAIN,
        SUPABASE_KEY: developmentSchema.VITE_SUPABASE_KEY,
        SUPABASE_URL: developmentSchema.VITE_SUPABASE_URL,
      }
    }
    return envSchema.parse(process.env)
  }
}
