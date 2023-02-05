import React from 'react'
import * as S from './styles'
import { Header } from '@/components/Header'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return (
    <S.Container>
      <S.Content>
        <Header iconSize={18} />
        <S.Form>
          <strong> Entrar</strong>
          <div>
            <FiMail />
            <input type="text" placeholder="Informe o seu E-mail" />
          </div>
          <div>
            <FiLock size={18} />
            <input type="password" placeholder="Informe o seu E-mail" />
          </div>
          <button> Acessar </button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
