module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testURL: 'http://localhost',
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@styles/(.*)': '<rootDir>/src/styles/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
  },
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.tsx'],
  coverageDirectory: './__coverage__/jest',
  coverageReporters: ['cobertura', 'text-summary', 'html'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/@(components|utils|styles)/**/*.{ts,tsx}',
    '!src/utils/test-utils.tsx',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  snapshotSerializers: ['@emotion/jest/serializer'],
};
