/* eslint-env node */
module.exports = {
  env: {
    es2021: true,
    browser: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:lit/recommended",
    "plugin:wc/best-practice",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["lib/*"],
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      rules: {
        // Lit automatically binds `this` in event handlers
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
  root: true,
};
