module.exports = {
  extends: ['standard-with-typescript'],
  parserOptions: { 
    project: './tsconfig.json' 
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-trailing-spaces': 'off'
  }
}
  