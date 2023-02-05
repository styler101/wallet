import React from 'react'
import * as S from './styles'
import { FiDollarSign } from 'react-icons/fi'

export function Header() {
  return (
    <S.Container>
      <div>
        <FiDollarSign />
      </div>
      <h4> Minha Carteira</h4>
    </S.Container>
  )
}
