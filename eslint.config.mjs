import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] }, // General file pattern
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node // Added node globals
      } 
    } 
  },
  js.configs.recommended, // Correct way to apply ESLint JS recommended rules
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);