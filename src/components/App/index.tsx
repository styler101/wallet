import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/themes'

export function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <h1> Teste Import</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}
