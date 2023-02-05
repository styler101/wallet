import 'styled-components'
import {
  type ColorsProps,
  type SizeProps,
  type SpacingProps
} from './styles-types'

declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      size: SizeProps
      spacing: SpacingProps
    }
    colors: ColorsProps
  }
}
