import React, { type HTMLAttributes } from 'react'
import { SignIn } from '../ui'
import { render, screen } from '@testing-library/react'

describe('Signin Component', () => {
  test('Should start signin state with default values', () => {
    render(<SignIn />)
    const button = screen.getByRole('button', {
      name: /acessar/i
    }) as HTMLButtonElement
    expect(button.disabled).toBe(true)
    const email = screen.getByPlaceholderText(
      /informe seu email/i
    ) as HTMLInputElement
    expect(email.value).toBe('')
    const password = screen.getByPlaceholderText(
      /informe sua senha/i
    ) as HTMLInputElement
    expect(password.value).toBe('')
  })
})
