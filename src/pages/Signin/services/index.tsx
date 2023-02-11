import {
  type SignInFields,
  type Authentication,
  type AccountModel
} from '../interfaces'
import { delay } from '@/utils/timer'
import { generateId } from '@/utils/validators'
import { InvalidParamError } from '@/errors/http/invalid-param'

export class SignInService implements Authentication {
  async authentication({
    email,
    password
  }: SignInFields): Promise<AccountModel> {
    try {
      await delay(2000)
      const fields = [email, password]
      for (const key in fields) {
        if (fields[key] === '') {
          throw new InvalidParamError(`Invalid Field ${fields[key]}`, 400)
        }
      }
      return {
        accessToken: generateId()
      }
    } catch (error) {
      throw new InvalidParamError('Internal server error', 500)
    }
  }
}

export default new SignInService()
