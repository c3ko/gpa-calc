const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssPurgecss = require(`@fullhuman/postcss-purgecss`);

const purgecss = postcssPurgecss({
      // Specify the paths to all of the template files in your project.
      content: [
        './public/**/*.html',
        './src/**/*.vue',
      ],
});

module.exports = {
    plugins: [
      tailwindcss,
      autoprefixer,
     ...process.env.NODE_ENV === 'production'
       ? [purgecss]
       : [],
    ],
};