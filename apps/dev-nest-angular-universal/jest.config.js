module.exports = {
  name: 'dev-nest-angular-universal',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/dev-nest-angular-universal',
  collectCoverageFrom: [
    './src/**/*.ts',
    '!./src/environments/**',
    '!./src/main.ts',
    '!./src/main.server.ts',
    '!./src/app/app.server.module.ts',
    '!./src/zone-flsgs.ts',
    '!./src/polyfills.ts'
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer']
      }
    }
  }
};
