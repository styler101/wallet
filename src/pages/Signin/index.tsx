import React from 'react'
import * as S from './styles'
import { Header } from '@/components/Header'
import { Input } from '@/components/Form/Input'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
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
          <button> Acessar </button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
