import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import alias from 'rollup-plugin-alias'
import uglify from 'rollup-plugin-uglify'

export default {
    input: 'src/index.js',
    output: {
        format: 'cjs',
        file: 'build/main.js',
        sourcemap: (process.env.NODE_ENV === 'production' ? false : 'inline'),
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
        alias({
            'ionicons/dist/fonts/ionicons.woff': 'node_modules/ionicons/dist/fonts/ionicons.woff'
        }),
        babel({
          exclude: 'node_modules/**',
          plugins: ['external-helpers'],
        }),
        (process.env.NODE_ENV === 'production' && uglify())
      ],
}