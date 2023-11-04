/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:lit/recommended",
    "plugin:wc/best-practice",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist/*"],
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
      },
    },
  ],
  root: true,
};
