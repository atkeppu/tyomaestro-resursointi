import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...tseslint.configs.recommended,
  // Lisää Prettier-konfiguraatio VIIMEISENÄ. Se poistaa ESLintistä säännöt,
  // jotka ovat ristiriidassa Prettierin kanssa.
  eslintConfigPrettier,
];
