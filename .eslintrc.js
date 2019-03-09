module.exports = {
  // parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 2017,
  //   sourceType: 'module',
  // },
  // env: {
  //   browser: true,
  //   es6: true,
  // },
  extends: [
    'airbnb-base',
  ],
  globals: {
    test: 'readonly',
    expect: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    describe: 'readonly',
  },
  rules: {
    'linebreak-style': [
      'error',
      'windows',
    ],
  },
};
