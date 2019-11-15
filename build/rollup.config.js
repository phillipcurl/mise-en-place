// rollup.config.js
import alias from '@rollup/plugin-alias';
import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import minimist from 'minimist';
import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

const cssvariables = require("postcss-css-variables");
const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, "..");

const baseConfig = {
  input: "lib/entry.js",
  plugins: {
    preVue: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      }),
      commonjs(),
      alias({
        resolve: [".jsx", ".js", ".vue"],
        entries: {
          "@": path.resolve(projectRoot, "lib")
        }
      })
    ],
    vue: {
      css: true,
      style: {
        postcssPlugins: [cssvariables()]
      },
      template: {
        isProduction: true
      }
    },
    postVue: [buble()]
  }
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === "es") {
  const esConfig = {
    ...baseConfig,
    external,
    output: {
      file: "dist/mise-en-place.esm.js",
      format: "esm",
      exports: "named"
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue
    ]
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === "cjs") {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: "dist/mise-en-place.ssr.js",
      format: "cjs",
      name: "MiseEnPlace",
      exports: "named",
      globals
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: false
        }
      }),
      ...baseConfig.plugins.postVue
    ]
  };
  buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === "iife") {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: "dist/mise-en-place.min.js",
      format: "iife",
      name: "MiseEnPlace",
      exports: "named",
      globals
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      terser({
        output: {
          ecma: 5
        }
      })
    ]
  };
  buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
