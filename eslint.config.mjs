import { defineConfig, globalIgnores } from "eslint/config";
// Use absolute imports to access eslint-config-next modules from node_modules
const eslintNextCoreWebVitals = require.resolve("eslint-config-next/core-web-vitals");
const eslintNextTypescript = require.resolve("eslint-config-next/typescript");

const eslintConfig = defineConfig([
  {
    plugins: {
      "next/core-web-vitals": eslintNextCoreWebVitals,
      "next/typescript": eslintNextTypescript,
    },
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  },
]);

export default eslintConfig;
