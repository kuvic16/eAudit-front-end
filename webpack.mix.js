const mix = require("laravel-mix");

mix
  .js("src/scripts/index.js", "public/js")
  .sass("src/styles/index.scss", "public/css");
