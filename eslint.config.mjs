import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,json,css,html,md}"],
    rules: {
      "no-unused-vars": "error",
      "no-console": "warn",
    },
  },
]);

export default eslintConfig;
