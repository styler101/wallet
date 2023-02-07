import {
  type SignInFields,
  type Authentication,
  type AccountModel
} from '../interfaces'
import { delay } from '@/utitls/timer'
import { generateId } from '@/utitls/validators'

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
          throw new Error(`Invalid Field ${fields[key]}`)
        }
      }
      return {
        accessToken: generateId()
      }
    } catch (error) {
      throw new Error('Invalid Request')
    }
  }
}

export default new SignInService()
