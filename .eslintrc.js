module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier',
    'prettier/standard',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': 'off',
    'no-use-before-define': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'eslint-disable-next-line': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    // 'react/prop-types': [2, { ignore: ['children'] }],
    'no-param-reassign': 'off',
    'react/prop-types': "off",
    camelcase: 'off',
    'no-unused-vars': 'off'
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }
    }
  }
}
