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
  },
  rules: {
    'linebreak-style': [
      'error',
      'windows',
    ],
  },
};
