import React, { useState } from 'react'
import * as S from './styles'
import signInService from '../services'
import { type SignInFields } from '../interfaces'
import { schema } from '../schema'
import { delay } from '@/utitls/timer'
import { Header, Button, ErrorField, Input } from '@/components'
import { FiMail, FiLock } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<SignInFields>({
    resolver: zodResolver(schema()),
    mode: 'onBlur'
  })
  const [formState, setFormState] = useState({
    isLoading: false
  })

  const onSubmit = async (data: SignInFields) => {
    setFormState((prev) => {
      prev.isLoading = true
      return { ...prev }
    })
    try {
      await delay(2000)
      await signInService.authentication({
        email: data.email,
        password: data.password
      })
    } catch (error) {
    } finally {
      setFormState((prev) => {
        prev.isLoading = false
        return { ...prev }
      })
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
          </S.FormFields>
          <Button
            type="submit"
            buttonType="danger"
            disabled={formState.isLoading || !isValid}
            data-testid="submit-button"
            loading={formState.isLoading}
          >
            <S.ButtonLabel>Acessar</S.ButtonLabel>
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
