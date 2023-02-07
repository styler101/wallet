import React from 'react'
import * as S from './styles'
import { type HeaderProps } from '../interfaces'
import { FiDollarSign } from 'react-icons/fi'

export function Header(props: HeaderProps) {
  const { iconSize, hasAnimation } = props
  return (
    <S.Container hasAnimation={hasAnimation}>
      <div>
        <FiDollarSign size={iconSize} />
      </div>
      <h4> Minha Carteira</h4>
    </S.Container>
  )
}
