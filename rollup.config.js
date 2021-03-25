import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss'
import { terser } from "rollup-plugin-terser";
import path from 'path';
import clear from 'rollup-plugin-clear';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const input = "./src/password-security.ts";

export default [
  {
    input,
    external: [
      'zxcvbn',
      'hsimp'
    ],
    output: [
      {
        file: 'dist/password-security.min.js',
        format: "iife",
        globals: {
          "zxcvbn": "zxcvbn",
          "hsimp": 'hsimp'
        },
        compact: true,
        name: "passwordSecurity",
        sourcemap: true
      }
    ],
    plugins: [
      clear({
        targets: ['dist']
      }),
      nodePolyfills(),
      resolve(),
      commonjs({
        // non-CommonJS modules will be ignored, but you can also
        // specifically include/exclude files
        include: 'node_modules/**',  // Default: undefined
      }),
      terser(),
      scss({
        output: 'dist/password-security.css',
      }),
      typescript()
    ]
  },
  {
    input,
    output: [
      {
        dir: 'dist',
        format: "esm",
        sourcemap: true
      }
    ],
    external: id => !id.startsWith(".") && !path.isAbsolute(id),
    plugins: [
      resolve(),
      typescript(),
      scss({
        output: 'dist/password-security.css',
      })
    ]
  }
];
