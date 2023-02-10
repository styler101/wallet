import React from 'react'
import * as S from './styles'
import { type Props } from '../interfaces'
import { RiErrorWarningLine } from 'react-icons/ri'

export function ErrorField(props: Props) {
  const { message } = props
  return (
    <S.Container>
      <span> {message}</span>
      <RiErrorWarningLine size={18} color="#E44C4E" />
    </S.Container>
  )
}
