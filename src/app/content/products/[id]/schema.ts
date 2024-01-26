import { z } from 'zod'

export const passwordBuy = z.object({
  password: z.string(),
})

export type usePassword = z.infer<typeof passwordBuy>
