import React from 'react'
import { Header } from '../ui'
import { render, screen } from '@testing-library/react'

describe('Header Component', () => {
  test('ensure header component receive a correct size property', () => {
    const fakeProps = {
      iconSize: 18
    }
    render(<Header iconSize={fakeProps.iconSize} />)
    expect(fakeProps.iconSize).toBe(18)
  })

  test('ensure header component has a correct heading title', () => {
    const fakeProps = {
      iconSize: 18
    }
    render(<Header iconSize={fakeProps.iconSize} />)
    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading.innerHTML).toEqual(' Minha Carteira')
  })
})
