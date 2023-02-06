import React from 'react'
import { SignIn } from './index'

import { render, screen } from '@testing-library/react'

describe('SignIn Component', () => {
  test('Should init signin component with initial state', () => {
    render(<SignIn />)
    const submitedButton = screen.getByRole('button', {
      name: /acessar/i
    }) as HTMLButtonElement
    expect(submitedButton.disabled).toBe(true)
  })
})
