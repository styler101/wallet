import React, { useState } from 'react'
import { type SignInFields } from '../interfaces'
import * as S from './styles'
import { Header } from '@/components'
import { Button, Input, ErrorField } from '@/components/Form'
import { FiMail, FiLock } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../schema'

export function SignIn() {
  const {
    register,
    formState: { errors, isValid, isValidating }
  } = useForm<SignInFields>({
    resolver: zodResolver(schema()),
    mode: 'onBlur'
  })
  const [formState, setFormState] = useState({
    isLoading: true
  })

  console.log(errors)
  return (
    <S.Container>
      <S.Content>
        <Header iconSize={18} />
        <S.Form>
          <strong> Entrar</strong>
          <S.FormFields>
            <Input
              type="email"
              label="E-mail"
              placeholder="Informe seu email"
              icon={<FiMail color="#ccc" />}
              register={register}
              name="email"
            />
            {errors.email != null && errors?.email?.message && (
              <ErrorField message={String(errors.email.message)} />
            )}
            <Input
              type="password"
              label="Senha"
              placeholder="Informe sua senha"
              icon={<FiLock color="#ccc" />}
              register={register}
              name="password"
            />
            {errors.password != null && errors?.password?.message && (
              <ErrorField message={String(errors.password.message)} />
            )}
          </S.FormFields>
          <Button
            type="submit"
            buttonType="danger"
            disabled={formState.isLoading}
            data-testid="submit-button"
          >
            <S.ButtonLabel>Acessar</S.ButtonLabel>
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
