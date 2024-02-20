module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    defineProps: true,
    defineEmits: true,
    defineExpose: true,
    withDefaults: true,
  },
  // overrides: [
  //   {
  //     "files": ['src/**/*.ts'],
  //     "excludedFiles": "*.test.js",
  //     "rules": {
  //       "quotes": ["error", "single"]
  //     }
  //   },
  //   {
  //     "files": ['src/**/*.vue'],
  //     "excludedFiles": "*.test.js",
  //     "rules": {
  //       "quotes": ["error", "single"]
  //     }
  //   }
  // ],
  ignorePatterns: ['.eslintrc.js', 'build', 'dist', 'mock', 'coverage'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
    createDefaultProgram: true,
  },
  // settings: {
  //   'import/resolver': {
  //     [require.resolve('eslint-import-resolver-node')]: {},
  //   },
  //   'import/extensions': [
  //     '.js',
  //     '.jsx',
  //     '.mjs',
  //     '.ts',
  //     '.tsx',
  //   ],
  // },
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/vue3-strongly-recommended',
  ],
  // https://cn.eslint.org/docs/rules/
  rules: {
    "@typescript-eslint/no-var-requires": ['off'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'never',
    }],
    "comma-dangle": ["error", {
      arrays: "never",
      objects: "always-multiline",
      imports: "never",
      exports: "never",
      functions: "never",
    }],
    "max-len": ["error", {
      code: 120, // (默认 80) 强制行的最大长度
      tabWidth: 2, // (默认 4) 指定 tab 字符的宽度
      comments: 120, // 强制注释的最大长度；默认长度同 code
      "ignorePattern": "data:image", // 忽略正则表达式匹配的行；可以只匹配单行，而且在 YAML 或 JSON 中需要双重转义
      ignoreComments: true, // 忽略所有拖尾注释和行内注释
      ignoreTrailingComments: true, // 忽略拖尾注释
      ignoreUrls: true, // 忽略含有链接的行
      ignoreStrings: true, // 忽略含有双引号或单引号字符串的行
      ignoreTemplateLiterals: true, // 忽略包含模板字面量的行
      ignoreRegExpLiterals: true, // 忽略包含正则表达式的行
    }],
    "max-lines": ["error", {
      max: 500,
      skipBlankLines: true ,
      skipComments: true,
    }],
    "max-lines-per-function": ["error", {
      max: 100,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],
    "array-callback-return": ["error"],
    "default-case": ["error"],
    "object-curly-spacing": ["error", "always"],
    "indent": ["error", 2],
  },
}
