import * as z from 'zod'

const schema = () => {
  return z.object({
    email: z
      .string({ required_error: 'E-mail Obrigatório' })
      .email('Por valor informe um email váliado'),
    password: z.string({ required_error: 'Senha Obrigatóra' })
  })
}

export { schema }
