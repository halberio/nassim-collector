const mix = require("laravel-mix");
require("laravel-mix-react-typescript-extension");
mix.reactTypeScript("resources/js/index.tsx", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .browserSync("http://localhost:8000");
