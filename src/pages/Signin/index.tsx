import React from 'react'
import * as S from './styles'
import { Header } from '@/components/Header'

export function SignIn() {
  return (
    <S.Container>
      <S.Content>
        <Header iconSize={18} />
      </S.Content>
    </S.Container>
  )
}
