import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import jest from "eslint-plugin-jest";

import js from '@eslint/js';

export default [
    {
        ignores: ["dist/**", "node_modules/**", "bin/**", "build/**"],
    },
    js.configs.recommended,
    eslintConfigPrettier,
    {
        "files": ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
            parser: tsParser,
        },
        "plugins": {
            "prettier": prettierPlugin,
            "react": reactPlugin,
        },
        "ignores": [""],
        "rules": {
            "prettier/prettier": "error",
            "no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",   // Ignore unused parameters that start with an underscore
                    "varsIgnorePattern": "^_"    // Ignore unused variables that start with an underscore
                }
            ],
        },
    },
    {
        files: ["**/*.test.ts", "**/*.test.tsx"],
        plugins: {
            jest,
        },
        languageOptions: {
            globals: {
                ...globals.jest,
                it: "readonly",
                expect: "readonly",
                describe: "readonly",
                test: "readonly",
            }
        },
        rules: {
            "jest/no-disabled-tests": "warn",
            "jest/no-identical-title": "error",
            "jest/valid-expect": "error",
        },
    }
];
