import { z } from 'zod'

export const loginScheme = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

export type LoginPayload = z.infer<typeof loginScheme>
