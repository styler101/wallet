import {
  type SignInFields,
  type Authentication,
  type AccountModel
} from '../interfaces'
import { delay } from '@/utitls/timer'

export class SignInService implements Authentication {
  async authentication(params: SignInFields): Promise<AccountModel> {
    try {
      await delay(2000)
      if(params.email !== '' &&  params.password !== '')
    } catch (error) {}
  }
}

export default new SignInService()
