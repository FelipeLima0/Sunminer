import { z } from 'zod'

export const amountValue = z.object({
  amount: z.string(),
})

export type AmountValueType = z.infer<typeof amountValue>
