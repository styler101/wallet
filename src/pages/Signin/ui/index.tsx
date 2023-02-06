import React, { useState } from 'react'
import * as S from './styles'
import { Header } from '@/components/Header'
import { Button, Input } from '@/components/Form'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  const [formState, setFormState] = useState({
    isLoading: true
  })
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
            />
            <Input
              type="password"
              label="Senha"
              placeholder="Informe sua senha"
              icon={<FiLock color="#ccc" />}
            />
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
