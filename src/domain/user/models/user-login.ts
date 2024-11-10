import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(6).max(50),
})

export const loginForm = toTypedSchema(loginFormSchema)
export type UserLoginForm = z.infer<typeof loginFormSchema>
