module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  ignorePatterns: ['www'],
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/ no-explicit-any': 'off',
    '@typescript-eslint/ no-var-requires': 'off',
    'react-native/no-inline-style': 'off',
  },
};
