import { v4 } from 'uuid'
export function isValidEmail(email: string): boolean {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}

export function generateId(): string {
  return v4()
}
