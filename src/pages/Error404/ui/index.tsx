import React from 'react'
import * as S from './styles'
import { CiFaceFrown } from 'react-icons/ci'

export function Error404() {
  return (
    <S.Container>
      <h1 data-testId="title"> Página não encontrada!</h1>
      <CiFaceFrown color="#ccc" size={40} />
    </S.Container>
  )
}
