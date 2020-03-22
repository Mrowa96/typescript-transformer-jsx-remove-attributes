module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
