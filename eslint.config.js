import globals from "globals";
import jsconfig from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  jsconfig.configs.recommended,
  {
    files:["**/*.js"],
    ignores:["dist/**"],
    languageOptions: { 
    globals: globals.browser,
    sourceType:'module'
   }
  },
  {
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn"
    }
}
];