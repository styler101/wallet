export type SignInFields = {
  email: string
  password: string
}
export interface Authentication {
  authentication: (params: SignInFields) => any
}

export interface AccountModel {
  accessToken: string
}
