This is a repo with some files that contain different eslint problems.

Prettier kan användas för att fixa till json-filen
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"

Ignore-filen kan anpassas så här:
\# Exclude everything by default
*.*
\# Only include TypeScript files
!*.json



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
