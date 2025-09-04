import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    rules: { 
      semi: "error", 
      indent: ["error", 2], 
      "linebreak-style": ["error", "windows"], 
      "no-unused-vars": "warn", 
      "no-console": "off", 
      "comma-dangle": ["error", "always-multiline"],
    }, 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: { 
      ...globals.browser,
      ...globals.node },
    ecmaVersion: 2025 } },
]);
