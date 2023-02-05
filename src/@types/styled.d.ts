import 'styled-components'

type SizeProps = {
  xs: string
  sm: string
  base: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  '7xl': string
  '8xl': string
  '9xl': string
}

type SpacingProps = {
  xs: string
  sm: string
  base: string
  lg: string
  xl: string
  '2xl': string
}

type ColorsProps = {
  primary: string
  secondary: string
  tertiary: string
  white: string
  black: string
  gray: string
  success: string
  info: string
  warning: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      size: SizeProps
      spacing: SpacingProps
    }
    colors: ColorsProps
  }
}
