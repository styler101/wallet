import React, { type HTMLAttributes } from 'react'
import { SignIn } from '../ui'
import { render, type RenderResult } from '@testing-library/react'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  return {
    sut: render(<SignIn />)
  }
}

describe('Signin Component', () => {
  test('Should start signin state with default values', () => {
    const { sut } = makeSut()
    const button = sut.getByRole('button', {
      name: /acessar/i
    }) as HTMLButtonElement
    expect(button.disabled).toBe(true)
    const email = sut.getByPlaceholderText(
      /informe seu email/i
    ) as HTMLInputElement
    expect(email.value).toBe('')
    const password = sut.getByPlaceholderText(
      /informe sua senha/i
    ) as HTMLInputElement
    expect(password.value).toBe('')
  })
})
