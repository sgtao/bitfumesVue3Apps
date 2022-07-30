module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'google',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'prettier'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
