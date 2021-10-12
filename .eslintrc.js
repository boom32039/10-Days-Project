module.exports = {
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint/eslint-plugin'],
   extends: ['@typescript-eslint'],
   root: true,
   env: {
      node: true,
      jest: true,
   },
   rules: {
      eqeqeq: 'warn',
      'no-var': 'warn',
      'prefer-arrow-callback': 'warn',
      'no-unused-vars': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'no-nested-ternary': 'off',
   },
};
