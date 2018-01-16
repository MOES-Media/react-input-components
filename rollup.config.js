import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import alias from 'rollup-plugin-alias'
import url from "rollup-plugin-url"

export default {
    input: 'src/index.js',
    output: {
        format: 'cjs',
        file: 'build/rollup/main.js',
        sourcemap: 'inline',
    },
    external: [
        'react', 
        'styled-components',
        'react-dom',
        'ionicons/dist/fonts/ionicons.woff'
    ],
    plugins: [
        resolve({
            extensions: [ '.js', '.json' ],
            customResolveOptions: {
                moduleDirectory: 'src'
            }
        }),
        url({
            limit: 0,
            include: ['**/*.woff'],
        }),
        babel({
          exclude: 'node_modules/**',
        }),
        alias({
            'ionicons/dist/fonts/ionicons.woff': 'node_modules/ionicons/dist/fonts/ionicons.woff'
        }),
      ]
}