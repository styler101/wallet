/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  roots: ['<rootDir>/src'], // diretório raiz,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts, tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  preset: 'ts-jest'
}
