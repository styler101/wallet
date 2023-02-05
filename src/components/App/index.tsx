import React from 'react'
import { SignIn } from '@/pages/Signin'
import GlobalStyles from '@/assets/styles/global'
import theme from '@/assets/themes'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <SignIn />
      <GlobalStyles />
    </ThemeProvider>
  )
}
