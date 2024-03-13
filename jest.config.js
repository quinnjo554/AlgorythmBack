/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  modulePaths: ["**/**/*.ts"],
  moduleNameMapper: { "^(\\.\\.?\\/.+)\\.js$": "$1" },
};
