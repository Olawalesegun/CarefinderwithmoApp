export const preset = 'ts-jest';
export const testEnvironment = 'jsdom';
export const setupFilesAfterEnv = ['./jest.setup.js'];
export const testMatch = ['<rootDir>/src/tests/**/*.test.tsx'];