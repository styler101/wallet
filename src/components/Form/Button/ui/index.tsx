import React from 'react'
import type { ButtonProps } from '../interfaces'
import { Spinner } from '@/components'
import * as S from './styles'

export function Button(props: ButtonProps) {
  const { children, loading, ...rest } = props
  return (
    <S.Container {...rest}>
      {loading ? <Spinner width={20} height={20} /> : children}
    </S.Container>
  )
}
