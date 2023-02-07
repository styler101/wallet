import React from 'react'
import { isValidEmail } from '@/utitls/validators'
import { SignIn } from '../ui'
import { render, type RenderResult, fireEvent } from '@testing-library/react'

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

  test('ensure signin handler recieve correct email', () => {
    const { sut } = makeSut()
    const inputEmail = sut.getByTestId('data-testIdemail') as HTMLInputElement
    fireEvent.change(inputEmail, { target: { value: 'any_mail' } })
    expect(isValidEmail(inputEmail.value)).toBe(true)
  })
})
