/* eslint-disable no-undef */
import fs from 'fs';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// Get command-line arguments (skip the first two)
//const content = process.argv[2] || 'Default text content';
const filePath = process.argv[2] || 'output.txt';

const konfiguration = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
);

var konfigurationJson = JSON.stringify(konfiguration);
fs.writeFileSync(filePath, `${konfigurationJson}\n`)