let mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .js('resources/js/tool.js', 'js')
  .react('resources/js/react.js', 'js')
  .sass('resources/sass/tool.scss', 'css')
