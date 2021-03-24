import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import path from 'path';

const input = "./src/password-security.ts";

export default [
  {
    input,
    output: [
      {
        file: 'dist/password-security.min.js',
        // globals: {
        //   'zxcvbn': 'zxcvbn',
        //   'hsimp': 'hsimp'
        // },
        format: "iife",
        compact: true,
        name: "passwordSecurity",
        sourcemap: true
      }
    ],
    // external: id => !id.startsWith(".") && !path.isAbsolute(id),
    plugins: [
      resolve(),
      commonjs({
        // non-CommonJS modules will be ignored, but you can also
        // specifically include/exclude files
        include: 'node_modules/**',  // Default: undefined
      }),
      terser({
        toplevel: true
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
      typescript()
    ]
  }
];
