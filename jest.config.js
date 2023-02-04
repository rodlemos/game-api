module.exports = {
  bail: true,
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "**/*.spec.ts"
  ],
  setupFilesAfterEnv: ['<rootDir>/singleton.ts'],
}