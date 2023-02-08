export class InvalidParamError extends Error {
  constructor(
    private readonly paramName: string,
    private readonly statusCode: number
  ) {
    super(`Invalid Param${paramName}`)
    this.name = 'Invalid Param Error'
    this.statusCode = statusCode
  }
}
