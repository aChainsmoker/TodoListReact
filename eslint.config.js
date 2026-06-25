const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  
  {
    files: ['**/*.{js,jsx}'],
    
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    
    plugins: {
      react,
    },
    
    settings: {
      react: {
        version: 'detect',
      },
    },
    
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules, 
      
      'react/react-in-jsx-scope': 'off', 
      'react/prop-types': 'warn',        
      'no-unused-vars': 'warn', 
    },
  },
];