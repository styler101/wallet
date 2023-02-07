import React from 'react'
import { Header } from '../ui'
import { render, type RenderResult } from '@testing-library/react'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  return {
    sut: render(<Header hasAnimation={true} iconSize={10} />)
  }
}

describe('Header Component', () => {
  test('ensure header component receive a correct size property', () => {
    const fakeProps = {
      iconSize: 18
    }
    render(<Header iconSize={fakeProps.iconSize} hasAnimation={false} />)
    expect(fakeProps.iconSize).toBe(18)
  })

  test('ensure header component has a correct heading title', () => {
    const { sut } = makeSut()
    const heading = sut.getByRole('heading', { level: 4 })
    expect(heading.innerHTML).toEqual(' Minha Carteira')
  })
})
