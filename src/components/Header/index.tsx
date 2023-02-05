import React from 'react'
import { type HeaderProps } from './interfaces'
import * as S from './styles'
import { FiDollarSign } from 'react-icons/fi'

export function Header(props: HeaderProps) {
  const { iconSize } = props
  return (
    <S.Container>
      <div>
        <FiDollarSign size={iconSize} />
      </div>
      <h4> Minha Carteira</h4>
    </S.Container>
  )
}
