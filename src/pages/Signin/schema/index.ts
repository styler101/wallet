import * as z from 'zod'

const schema = () => {
  return z.object({
    email: z
      .string({ required_error: 'E-mail Obrigatório' })
      .email('Por favor informe um email válido'),
    password: z
      .string({ required_error: 'Senha Obrigatóra' })
      .min(1, { message: 'O campo senha não pode ser vazio' })
  })
}

export { schema }
