import dark from './dark'
import light from './light'
import common from './common'

export default {
  dark: { ...dark, common },
  light: { ...light, common }
}
