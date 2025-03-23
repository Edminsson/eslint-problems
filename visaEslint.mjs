/* eslint-disable no-undef */
import fs from 'fs';
import eslint from '@eslint/js';

const filePath = process.argv[2] || 'output.txt';

var konfigurationJson = JSON.stringify(eslint.configs.recommended);
fs.writeFileSync(filePath, `${konfigurationJson}\n`)