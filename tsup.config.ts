import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm'],
	platform: 'browser',
	dts: true,
	splitting: false,
	clean: true,
	sourcemap: true,
});
