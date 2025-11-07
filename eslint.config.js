import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'react**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'app/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'pages/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'shared/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'assets/**',
              group: 'index',
              position: 'after',
            },
            {
              pattern: '**/*.scss',
              group: 'index',
              position: 'after',
            },
            {
              pattern: './*.scss',
              group: 'index',
              position: 'after',
            },
          ],
          distinctGroup: false,
          pathGroupsExcludedImportTypes: ['react'],
        },
      ],
    },
  },
]);
