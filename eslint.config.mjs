// ESLint 8.x plugin-based configuration
import js from '@eslint/js';
import globals from 'globals';

const eslintConfig = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      'react': { rules: {} },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
];

export default eslintConfig;
