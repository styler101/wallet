import { type SignInFields, type Authentication } from '../interfaces'

export class SignInService implements Authentication {
  authentication(params: SignInFields): any {
    return ''
  }
}

export default new SignInService()
