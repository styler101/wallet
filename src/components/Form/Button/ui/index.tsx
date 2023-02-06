import React from 'react'
import { type ButtonProps } from '../interfaces'
import * as S from './styles'

export function Button(props: ButtonProps) {
  const { children, ...rest } = props
  return <S.Container {...rest}>{children}</S.Container>
}
