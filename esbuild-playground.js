const esbuild = require('esbuild')

esbuild
  .build({
    entryPoints: ['src/index.js'],
    outfile: 'docs/dist/stimulus-tailwind-components.min.js',
    bundle: true,
    legalComments: 'eof',
    sourcemap: false,
    minify: true,
    splitting: false,
    format: 'esm',
    target: ['esnext'],
  })
  .catch(() => process.exit(1))
