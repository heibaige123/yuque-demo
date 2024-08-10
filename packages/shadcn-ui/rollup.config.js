import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import ts from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: './src/index.ts',
	plugins: [
		commonjs(),
		ts(),
		clear({
			targets: ['dist'],
		}),
		nodeResolve({
			modulesOnly: true,
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		}),
		babel({
			exclude: 'node_modules/**',
			presets: ['@babel/preset-react'],
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			runtimeHelpers: true,
		}),
		postcss({
			extract: 'dist/index.css',
		}),
	],
	output: [
		{
			file: './dist/index.js',
			format: 'es',
		},
	],
	preserveSymlinks: true,
	external: ['react', 'react-dom', 'react/jsx-runtime'],
};
