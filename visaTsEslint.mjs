/* eslint-disable no-undef */
import fs from 'fs';
import tseslint from 'typescript-eslint';

const filePath = process.argv[2] || 'output.txt';

var konfigurationJson = JSON.stringify(tseslint.configs.recommended);
fs.writeFileSync(filePath, `${konfigurationJson}\n`)