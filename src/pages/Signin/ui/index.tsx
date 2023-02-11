import React, { useState } from 'react'
import * as S from './styles'
import signInService from '../services'
import { type SignInFields } from '../interfaces'
import { schema } from '../schema'
import { delay } from '@/utils/timer'
import { Header, Button, ErrorField, Input } from '@/components'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function SignIn() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<SignInFields>({
    resolver: zodResolver(schema()),
    mode: 'onBlur'
  })

  const onSubmit = async (data: SignInFields) => {
    setLoading(true)
    try {
      await delay(2000)
      const { accessToken } = await signInService.authentication({
        email: data.email,
        password: data.password
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <S.Container>
      <S.Content>
        <Header iconSize={18} hasAnimation={true} />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <strong> Entrar</strong>
          <S.FormFields>
            <Input
              type="email"
              label="E-mail"
              placeholder="Informe seu email"
              icon={<FiMail />}
              register={register}
              name="email"
              error={!!(errors && errors.email)}
            />
            {errors.email != null && errors?.email?.message && (
              <ErrorField message={String(errors.email.message)} />
            )}
            <Input
              type="password"
              label="Senha"
              placeholder="Informe sua senha"
              icon={<FiLock />}
              register={register}
              name="password"
              error={!!(errors && errors.password)}
            />
            {errors.password != null && errors?.password?.message && (
              <ErrorField message={String(errors.password.message)} />
            )}
            <Link to="/signup">
              <S.SignUpLink>
                <FiLogIn size={18} />
                Criar Conta
              </S.SignUpLink>
            </Link>
          </S.FormFields>
          <Button
            type="submit"
            buttonType="danger"
            disabled={loading || !isValid}
            data-testid="submit-button"
            loading={loading}
          >
            <S.ButtonLabel>Acessar</S.ButtonLabel>
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
