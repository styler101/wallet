import React from 'react'
import { Routes } from '@/routes'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/themes'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
