import React from 'react'
import { type Props } from '../interfaces'
import * as S from './styles'

export function Spinner(props: Props) {
  return (
    <S.Container {...props}>
      <div />
    </S.Container>
  )
}
