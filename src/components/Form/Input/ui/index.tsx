import React from 'react'
import * as S from './styles'
import { type InputProps } from '../interfaces'

export function Input(props: InputProps) {
  const { label, icon, register, name, ...rest } = props
  return (
    <S.Container>
      {label !== null && <label> {label}</label>}
      <div>
        {icon !== null && icon}
        <input
          {...register(name)}
          {...rest}
          id={label !== null ? 'any_id' : label}
          autoComplete="off"
        />
      </div>
    </S.Container>
  )
}
