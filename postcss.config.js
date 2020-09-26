const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssPreset = require('postcss-preset-env')({ stage: 0 });


module.exports = {
    plugins: [
      tailwindcss,
      autoprefixer,
      postcssPreset
    ],
};

