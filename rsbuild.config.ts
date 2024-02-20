import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import entry from './generate.vue'
import ESLintPlugin from 'eslint-webpack-plugin';
// console.log(entry);

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      plugins: [
        // new ESLintPlugin({
        //   extensions: ['.js', '.ts', '.jsx', 'tsx', '.mjs', '.cjs', '.vue'],
        //   lintDirtyModulesOnly: true,
        //   failOnError: false,
        //   failOnWarning: false,
        //   cache: true,
        //   threads: 8,
        // })
      ]
    },
    bundlerChain(chain) {
      chain.plugin('eslint-plugin').use(ESLintPlugin, [
        {
          extensions: ['.js', '.ts', '.jsx', 'tsx', '.mjs', '.cjs', '.vue'],
          lintDirtyModulesOnly: true,
          // failOnError: false,
          failOnWarning: false,
          cache: true,
          threads: 8,
        },
      ]);
    },
  },
  source: {
    entry: {
      index: './src/index.ts',
      ...entry
    },
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one'
    },
    // profile: true,
  }
});
