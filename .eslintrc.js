module.exports = {
  env: {
    es2017: true,
    jasmine: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  globals: {
    browser: 'readonly',
    require: 'readonly',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: [2, 'single']
  }
};
