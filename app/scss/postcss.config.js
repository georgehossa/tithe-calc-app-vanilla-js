module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true,
      browsers: ['> 1%', 'last 2 versions'],
    }),
  ],
};
