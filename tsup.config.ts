import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  platform: 'browser',
  legacyOutput: true,
  dts: true,
  splitting: true,
});
