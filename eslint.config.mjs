import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    {
        languageOptions: { globals: globals.browser },
        rules: {
            indent: ["error", 4, {
                SwitchCase: 1,
            }],

            "linebreak-style": ["error", "windows"],
            quotes: ["error", "single"],
            semi: ["error", "always"],
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
