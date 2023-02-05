import React from 'react'
import { Header } from '.'
import { render } from '@testing-library/react'

describe('Header Component', () => {
  test('ensure header component receive a correct size property', () => {
    const fakeProps = {
      iconSize: 18
    }
    render(<Header iconSize={fakeProps.iconSize} />)
    expect(fakeProps.iconSize).toBe(18)
  })
})
