export function notEmptyString(value: string): string {
  return value === null || value === '' ? '-' : value.trim()
}
