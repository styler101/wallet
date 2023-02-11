export async function delay(value: number = 3000) {
  return await new Promise((resolve) => setTimeout(resolve, value))
}
