// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // Cấu hình của bạn khác ở đây
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
