import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm', 'cjs'],
	platform: 'browser',
	dts: true,
	splitting: false,
	clean: true,
	sourcemap: true,
});
