let mix = require('laravel-mix')

mix.setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .sass('resources/sass/field.scss', 'css')
    .js('node_modules/mapbox-gl/dist/mapbox-gl.js', 'js')
    .copy('node_modules/mapbox-gl/dist/mapbox-gl.css', 'dist/css')

mix.webpackConfig({
    module: {
        no
    }
})