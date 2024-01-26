import { z } from 'zod'

export const user = z.object({
  username: z.string().email({ message: 'O email e obrigatorio' }),
  password: z.string().min(6, { message: 'A senha e obrigatoria' }),
})

export type userForm = z.infer<typeof user>
