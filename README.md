This is a repo with some files that contain different eslint problems.

Deprecated configuration that works:

// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      "parserOptions": {
        "sourceType": "module",
        "project": "./tsconfig.json"
      },
    },
    rules: {
      "@typescript-eslint/no-deprecated": "error"
    }
  }
);
