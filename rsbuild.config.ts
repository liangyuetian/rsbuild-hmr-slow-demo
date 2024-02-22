import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import entry from './generate.vue'
import ESLintPlugin from 'eslint-webpack-plugin';
import Components from "unplugin-vue-components/rspack";
import { VantResolver } from "@vant/auto-import-resolver";
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import RsPackPlugin1 from './rspack.plugin1';

export default defineConfig({
  plugins: [
    pluginVue(),
  ],
  tools: {
    htmlPlugin: false,
    rspack: {
      plugins: [
        // new RsdoctorRspackPlugin({
        //   // 插件选项
        // }),
        new RsPackPlugin1(),
        // new ESLintPlugin({
        //   extensions: ['.js', '.ts', '.jsx', 'tsx', '.mjs', '.cjs', '.vue'],
        //   lintDirtyModulesOnly: true,
        //   failOnError: false,
        //   failOnWarning: false,
        //   cache: true,
        //   threads: 8,
        // }),
        Components({
          dirs: [],
          resolvers: [VantResolver()],
          dts: true
        }),
      ]
    },
    // bundlerChain(chain) {
    //   chain.plugin('eslint-plugin').use(ESLintPlugin, [
    //     {
    //       extensions: ['.js', '.ts', '.jsx', 'tsx', '.mjs', '.cjs', '.vue'],
    //       lintDirtyModulesOnly: true,
    //       failOnError: false,
    //       failOnWarning: false,
    //       cache: true,
    //       threads: 8,
    //     },
    //   ]);
    // },
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
