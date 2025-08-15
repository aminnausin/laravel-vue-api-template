import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';
import globals from 'globals';

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{js,mjs,cjs,vue,ts,mts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parserOptions: {
                parser: {
                    js: '@typescript-eslint/parser',
                    ts: '@typescript-eslint/parser',
                },
                sourceType: 'module',
                extraFileExtensions: ['.vue'],
            },
        },
    },
    vue.configs['flat/essential'],
    vueTsConfigs.recommended,
    skipFormatting,
    {
        ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr', 'tailwind.config.js', 'resources/js/components/ui/*'],
    },
    {
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    prettier,
    {
        name: 'overrides',
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'vue/block-lang': [
                'error',
                {
                    script: { lang: 'ts', allowNoLang: true },
                },
            ],
        },
    },
);
