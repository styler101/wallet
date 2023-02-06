import React from 'react'
import { SignIn } from '../ui'

import { render, screen } from '@testing-library/react'

describe('SignIn Component', () => {
  test('ensure signin component start with initial state', () => {
    render(<SignIn />)
    const submitedButton = screen.getByRole('button', {
      name: /acessar/i
    }) as HTMLButtonElement
    expect(submitedButton.disabled).toBe(true)
  })
})
