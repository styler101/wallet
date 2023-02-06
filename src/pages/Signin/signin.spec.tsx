import React from 'react'
import { SignIn } from './index'

import { render, screen } from '@testing-library/react'

describe('SignIn Component', () => {
  test('Should init signin component with initial state', () => {
    render(<SignIn />)
  })
})
